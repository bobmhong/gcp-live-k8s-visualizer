#!/bin/bash
echo "## Starting kubernetes visualizer on localost:8001/static"
kubectl proxy -w=src/
