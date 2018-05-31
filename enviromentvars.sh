#!/bin/bash
# Script to update environment variables for webservice
# IMPORTANT: Edit the values below before running!
echo "export DB_USER=user" >> ~/.bashrc
echo "export DB_PASSWORD=password" >> ~/.bashrc
echo "export DB_CONNECTSTRING=\"host/service\"" >> ~/.bashrc
source ~/.bashrc