locals {
  project_name            = "vite-fs-boilerplate-${var.env}"
  project_description     = "A Vite boilerplate with file system routing"
  project_author          = var.author
  project_author_email    = var.author_email
  project_author_github   = var.author_github
  rg_name                 = "vite-fs-rg-${var.env}"
  app_service_plan_name   = "vite-fs-asp-${var.env}"
  afd_name                = "vite-fs-afd-${var.env}"
  afd_endpoint_name       = "vite-fs-afde-${var.env}"
  afd_app_orig_group_name = "vite-fs-app-orig-group-${var.env}"
  afd_app_orig_name       = "vite-fs-app-orig-${var.env}"
  afd_swagger_route_name  = "vite-fs-swagger-route-${var.env}"
  afd_graphql_route_name  = "vite-fs-graphql-route-${var.env}"
  afd_app_route_name      = "vite-fs-app-route-${var.env}"
}