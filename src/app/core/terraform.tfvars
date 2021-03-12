aws_region = "us-east-1"

# Password to the postgres server
# If no password is provided, a random one will be generated and printed in terraform output
# postgresql_password = "database-server-password"

# To use an existing VPC, set create_vpc to false, then uncomment and fill vpc_id and subnet_ids.
create_vpc = true

# vpc_id = "your-vpc-id"

# At least two subnets must be provided with CIDR blocks /23 or bigger.
# The first listed subnet should be PRIVATE. It will be used by EKS worker nodes.
# subnet_ids = ["subnet-foo", "subnet-bar"]

# Use Git Bash on Windows
# local_exec_interpreter = ["bash", "-c"]

# ElasticSearch enabled with Master Nodes
es_enabled = true
es_dedicated_master = true
es_ebs_enabled = true
es_dedicated_master_type = "c5.large.elasticsearch"

# ElastiCache enabled
elasticache_enabled = true

# EKS Cluster node instance size and count
cluster_worker_instance_type = "c5.xlarge"
cluster_worker_count = 5

# RDS instance size and storage
postgresql_server_class = "db.m5.2xlarge"
postgresql_storage_gb = "1000"
