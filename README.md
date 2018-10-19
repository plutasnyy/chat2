# chat2
The chat application in React and Django Channels with Django Rest Framework

### Setup guide

## Redis
```bash
sudo docker run -p 6379:6379 -d redis:2.8
```

## Backend
```bash
python3 -m venv env
source env/bin/activate
pip . install 
python3 manage.py runserver
```

## Frontend
```bash
npm install
npm start
```