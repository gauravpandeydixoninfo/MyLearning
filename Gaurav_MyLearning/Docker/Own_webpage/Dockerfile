FROM ubuntu:16.04

RUN apt update && apt upgrade
RUN apt install -y wget build-essential libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev  libffi-dev
RUN apt-get install -y python3.9
RUN apt install -y python3-pip
RUN pip3 install flask
COPY app.py /opt/
ENTRYPOINT FLASK_APP=/opt/app.py flask run --host=0.0.0.0 --port=8080
