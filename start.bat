@echo off
cd /d %~dp0
echo Running website using live-server...
live-server --host=0.0.0.0 --port=8080
pause