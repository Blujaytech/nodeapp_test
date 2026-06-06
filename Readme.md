Creates reusable Docker installation automation script. Docker Installation Script

#!/bin/bash

R="\e[31m"
N="\e[0m"

yum install -y yum-utils

yum-config-manager --add-repo https://download.docker.com/linux/rhel/docker-ce.repo

yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

systemctl start docker

systemctl enable docker

usermod -aG docker ec2-user

echo -e "$R Logout and Login again $N"
Why This Command is Required

Allows Jenkins pipelines to:

Build Docker images Run containers Push images to DockerHub/ECR Fix Docker Socket Permission

sudo chmod 666 /var/run/docker.sock
Jenkins Installation Purpose
Jenkins is an automation server used for:

CI/CD pipelines Automated testing Kubernetes deployments Docker builds Add Jenkins Repository

sudo curl -o /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/rpm-stable/jenkins.repo
Purpose

Adds official Jenkins repository.

Without repository:

Jenkins package cannot be installed. Import Jenkins GPG Key

sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
Purpose

Imports Jenkins security key for package verification. Install Java

sudo yum install fontconfig java-21-openjdk -y
Why Java is Required

Jenkins is built using Java.

Without Java:

Jenkins service will not start. Reload Linux Services

sudo systemctl daemon-reload
Purpose

Reloads Linux service manager configurations.

Install Jenkins

sudo dnf install jenkins -y
Purpose

Downloads and installs Jenkins package.

Enable Jenkins

sudo systemctl enable jenkins
Purpose

Automatically starts Jenkins after reboot.

Start Jenkins

sudo systemctl start jenkins
Purpose

Starts Jenkins service.
Check Jenkins Status

sudo systemctl status jenkins
Purpose

Checks whether Jenkins is:

Running Failed Stopped Get Jenkins Initial Password

sudo cat /var/lib/jenkins/secrets/initialAdminPassword
Purpose

Retrieves first-time admin login password.

Kubernetes kubectl Installation Purpose
kubectl is Kubernetes command-line tool used to:

Create deployments Manage pods Manage services Communicate with EKS cluster Download kubectl

curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
Purpose

Downloads latest kubectl binary.

Give Execute Permission

chmod +x kubectl
Purpose

Makes kubectl executable.

Move kubectl to System Path

sudo mv kubectl /usr/local/bin/
Purpose

Allows kubectl to run globally from anywhere.

Verify kubectl

kubectl version --client
Purpose

Checks kubectl installation version.

eksctl Installation Purpose
eksctl is official CLI tool used to:

Create EKS clusters Delete EKS clusters Manage node groups Download eksctl

curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
Purpose

Downloads and extracts eksctl binary.

Move eksctl

sudo mv /tmp/eksctl /usr/local/bin
Purpose

Moves eksctl into executable path.

Verify eksctl

eksctl version
Purpose

Displays eksctl version.

Create EKS Cluster
eksctl create cluster \
--name blujay-cluster \
--region us-east-1 \
--nodegroup-name demo-nodes \
--node-type t3.small \
--nodes 2
Configure Jenkins for Kubernetes Access Create kube Directory
sudo mkdir -p /var/lib/jenkins/.kube
Copy kubeconfig

sudo cp /root/.kube/config /var/lib/jenkins/.kube/config
Purpose

Copies Kubernetes authentication file.

Change Ownership

sudo chown -R jenkins:jenkins /var/lib/jenkins/.kube
Purpose

Allows Jenkins user to access Kubernetes config.

Connects kubectl with EKS cluster.

Configure AWS Credentials for Jenkins Create AWS Directory
sudo mkdir -p /var/lib/jenkins/.aws
Purpose

Creates AWS credential directory.

Copy AWS Credentials

sudo cp -r /root/.aws/* /var/lib/jenkins/.aws/

Purpose

Copies AWS authentication credentials.

Change Ownership

sudo chown -R jenkins:jenkins /var/lib/jenkins/.aws

Purpose

Allows Jenkins to access AWS credentials.

Switch to Jenkins User

sudo su - jenkins

Purpose

Logs into Jenkins user environment.

Verify AWS Authentication

aws sts get-caller-identity

Purpose

Checks AWS identity and permissions.

Verify Kubernetes Access

kubectl get nodes
kubectl get pods
kubectl get svc
Purpose

Reloads Jenkins configurations.

Check Jenkins Status

sudo systemctl status jenkins

Purpose

Verifies Jenkins service health.

Final Verification Commands

Docker Verification

docker ps
Kubernetes Verification
kubectl get nodes
kubectl get pods
kubectl get svc

