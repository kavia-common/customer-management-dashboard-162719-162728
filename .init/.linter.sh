#!/bin/bash
cd /home/kavia/workspace/code-generation/customer-management-dashboard-162719-162728/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

