output "master_public_ip" {
  description = "Master node public IP — use this in Ansible inventory"
  value       = aws_instance.master.public_ip
}

output "worker_public_ips" {
  description = "Worker node public IPs"
  value       = aws_instance.worker[*].public_ip
}

output "ansible_inventory_hint" {
  description = "Run this after terraform apply to generate inventory"
  value       = "ansible-playbook ansible/playbooks/bootstrap.yml -i ansible/inventory/hosts.ini"
}
