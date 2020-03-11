# Projet Symfony/REACT : 
## Site vitrine administrable pour Marie Casaÿs (dessinatrice)

### Pour lancer le projet :
#### Backend Symfony =>
  - Dans le fichier .env parametrer les acces en BDD
  - <code>composer install</code>
  - <code>php bin/console doctrine:database:create</code>
  - <code>php bin/console make:migration</code>
  - <code>php bin/console doctrine:migrations:migrate</code>
  - <code>php bin/console doctrine:fixtures:load</code> 
          => créer un utilisateur admin -> psw : admin
  - <code>symfony server:serve</code> ou <code>php -S localhost:8000</code> ou <code>php bin/console server:start</code>
#### Frontend React.Js =>
  - <code>yarn install</code>
  - <code>yarn encore dev --watch</code>
    

