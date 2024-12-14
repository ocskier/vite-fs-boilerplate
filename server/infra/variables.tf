variable "subscription_id" {
  type    = string
  default = null
}

variable "author" {
  type    = string
  default = null
}

variable "author_email" {
  type    = string
  default = null
}

variable "author_github" {
  type    = string
  default = null
}

variable "env" {
  type    = string
  default = "dev"
}

variable "location" {
  type    = string
  default = "East US 2"
}

variable "allowed_ips" {
  type    = set(string)
  default = []
}