terraform {
  cloud {
    organization = "azure-test-org"
  }
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0.0"
    }
  }
  required_version = ">= 0.14.9"
}

provider "azurerm" {
  subscription_id = var.SUBSCRIPTION_ID
  features {}
}
