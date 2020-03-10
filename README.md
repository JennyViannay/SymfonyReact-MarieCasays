# Projet Symfony/REACT : 
## Site vitrine pour Marie Casey (dessinatrice)

### Pour lancer le projet :
#### Backend Symfony =>
  - Dans le fichier .env parametrer les acces en BDD
  - <code>composer install</code>
  - <code>php bin/console make:create:database</code>
  - <code>php bin/console make:migration</code>
  - <code>php bin/console doctrine:migrations:migrate</code>
  - <code>php bin/console doctrine:fixtures:load</code> 
          => créer un utilisateur admin -> psw : admin
  - <code>symfony server:serve</code>
#### Frontend React.Js =>
  - <code>yarn install</code>
  - <code>yarn encore dev --watch</code>
    

