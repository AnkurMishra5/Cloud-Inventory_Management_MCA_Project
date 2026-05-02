# ⚙️ Automate — Cloud Inventory Management (MCA Project)

A DevOps automation system that combines **Docker containerization**, **Kubernetes orchestration**, and **Ansible-based Infrastructure as Code** to automate provisioning and deployments of a cloud inventory management application.

---

## 🎯 Project Tasks

- ✅ Develop sample application (Next.js inventory dashboard)
- ✅ Containerize using Docker (multi-stage build)
- ✅ Deploy on Kubernetes (Helm charts)
- ✅ Write Ansible playbooks for server setup
- ✅ Automate cluster configuration
- ✅ Integrate CI/CD (GitHub Actions)
- ⬜ Perform system monitoring setup
- ⬜ Validate automation workflows
- ⬜ Conduct performance tests
- ✅ Document automation scripts

---

## 🏗️ Architecture

```
GitHub Actions CI/CD
       │
       ▼
Docker Build → Docker Hub
       │
       ▼
Ansible (deploy.yml) → Helm upgrade --install
       │
       ▼
Kubernetes Cluster (kubeadm)
  ├── Master Node  (t3.medium)
  └── Worker Node  (t3.small)
       │
       ▼
Next.js App (3 replicas, HPA enabled in prod)
```

---

## 🛠️ Tech Stack

### Application
- ⚡ Next.js 14 (App Router)
- ⚛️ React 18 + TypeScript
- 🎨 Tailwind CSS + shadcn/ui
- 📊 Recharts (analytics)

### Infrastructure & DevOps
| Layer | Tool |
|---|---|
| Containerization | Docker (multi-stage) |
| Orchestration | Kubernetes (kubeadm) |
| Package Management | Helm |
| IaC (Cloud) | Terraform (AWS EC2) |
| IaC (Config) | Ansible |
| CI/CD | GitHub Actions |
| Container Registry | Docker Hub |

---

## 📁 Project Structure

```
automate/
├── app/                        # Next.js App Router pages
│   ├── dashboard/              # Dashboard overview
│   ├── inventory/              # Real-time inventory
│   ├── orders/                 # Order management
│   ├── buyers/                 # Buyer management
│   └── reports/                # Analytics & charts
├── components/                 # Reusable React components
├── helm/storlogix/             # Helm chart for K8s deployment (chart: cloud-inventory-management)
│   ├── templates/              # K8s manifests (Deployment, Service, Ingress, HPA)
│   ├── values.yaml             # Default values
│   └── values-prod.yaml        # Production overrides
├── terraform/                  # AWS infrastructure (VPC, EC2, Security Groups)
├── ansible/
│   ├── inventory/hosts.ini     # Cluster node IPs (fill from terraform output)
│   ├── playbooks/
│   │   ├── bootstrap.yml       # Install containerd + kubeadm on all nodes
│   │   ├── master.yml          # Init cluster + Flannel CNI + Nginx Ingress
│   │   ├── workers.yml         # Join workers to cluster
│   │   └── deploy.yml          # Deploy app via Helm
│   └── vars/common.yml         # Shared variables
├── .github/workflows/
│   └── ci-cd.yml               # Build → Push → Deploy pipeline
└── Dockerfile                  # Multi-stage production build
```

---

## 🚀 Deployment Guide

### 1. Provision Infrastructure (Terraform)

```bash
cd terraform
terraform init
terraform apply
# Note the master_public_ip and worker_public_ips from output
```

### 2. Update Ansible Inventory

Edit `ansible/inventory/hosts.ini` — replace `MASTER_IP` and `WORKER_IP` with the IPs from step 1.

### 3. Bootstrap the Cluster

```bash
# Install containerd + kubeadm on all nodes
ansible-playbook ansible/playbooks/bootstrap.yml -i ansible/inventory/hosts.ini

# Initialize master + install Flannel CNI + Nginx Ingress
ansible-playbook ansible/playbooks/master.yml -i ansible/inventory/hosts.ini

# Join workers
ansible-playbook ansible/playbooks/workers.yml -i ansible/inventory/hosts.ini
```

### 4. Configure GitHub Actions Secrets

In your GitHub repo → Settings → Secrets, add:

| Secret | Value |
|---|---|
| `DOCKERHUB_USERNAME` | Your Docker Hub username |
| `DOCKERHUB_TOKEN` | Docker Hub access token |
| `SSH_PRIVATE_KEY` | Contents of `~/.ssh/id_rsa` |
| `MASTER_IP` | Master node public IP |
| `WORKER_IP` | Worker node public IP |

### 5. Push to main → CI/CD runs automatically

```bash
git push origin main
# GitHub Actions: build → lint → docker push → ansible deploy
```

---

## 🔧 Local Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build
npm run lint      # Lint check
```

---

## 📦 Docker

```bash
# Build
docker build -t automate:latest .

# Run
docker run -p 3000:3000 automate:latest
```

---

## 📊 Helm Values

| Key | Default | Production |
|---|---|---|
| `replicaCount` | 2 | 3 |
| `autoscaling.enabled` | false | true |
| `autoscaling.maxReplicas` | 5 | 10 |
| `resources.limits.cpu` | 500m | 1000m |
| `resources.limits.memory` | 512Mi | 1Gi |

---

## 👤 Author

**Ankur Mishra** — MCA Project, 2024-25
