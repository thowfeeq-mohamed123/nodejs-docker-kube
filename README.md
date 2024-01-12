# nodejs-docker-kube

1. Create node.js application
2. Create docker file
3. Create docker compose file
4. Build node js application using docker (docker build -t <docker hub username>/<image name>:<version>)
5. Login to docker account
6. Push builded application in docker hub (docker push username>/<image name>:<version>)
7. Start minikube service (minikube start)
8. Check minikube status (minikube status)
9. Create deployment.yml file
10. Create service.yml file
11. Run deployment yml file (kubectl apply -f deployment.yml)
12. Run service yml file (kubectl apply -f service.yml)
13. Check pod status (kubectl get pods)
14. Check service status (kubectl get service)
15. Check deployment status (kubectl get deployment)
16. Check svc status (kubectl get svc)
17. Get deployed env URL (minikube service <svc name>)
18. If need to delete pod/deployment/service (kubectl delete <pod/deployment/service> <pod/deployment/service> name)
