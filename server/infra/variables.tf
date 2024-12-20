variable "SUBSCRIPTION_ID" {
  type    = string
  default = null
}

variable "AUTHOR" {
  type    = string
  default = null
}

variable "AUTHOR_EMAIL" {
  type    = string
  default = null
}

variable "AUTHOR_GITHUB" {
  type    = string
  default = null
}

variable "ENV" {
  type    = string
  default = "qa"
}

variable "LOCATION" {
  type    = string
  default = "East US 2"
}

variable "ALLOWED_IPS" {
  type    = set(string)
  default = []
}
