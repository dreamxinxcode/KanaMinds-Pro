# Use the official Python image as the base image
FROM python:3.9

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONPATH "${PYTHONPATH}:/usr/src/app"

# Install system dependencies
RUN apt-get update

# Set the working directory
WORKDIR /code

# Copy the requirements file and install dependencies
COPY requirements.txt /code/
RUN pip3 install -r requirements.txt

# Copy the rest of the application code to the container
COPY . /code/

# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
