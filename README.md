# ionicfirebase
ionic start appFirebase blank --type=angular --capacitor
cd appFirebase

# Generar uma pagina de serviço
ionic g service services/data

#instalar o angular
npm install -g @angular/cli

# Instalar Firebase e AngularFire

npm install -g firebase-tools  
npm install firebase

npm install angularfire2 firebase --save  

firebase login    (Aqui você irá entrar com a sua conta)
           
ng add @angular/fire ou ng add @angular/fire@next
