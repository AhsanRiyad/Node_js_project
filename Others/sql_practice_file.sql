
<% if(msg=='invalid'){ %> 
<small id="idExampleInputEmail1Small" style="color: red;"> Invalid Email</small> 
<% } %>

<% else { %> 
<small id="idExampleInputEmail1Small" style="color: red;"> Email*</small> 
<% } %>

<% 
if(msg=='invalid')
{
%> 
		<small id="idExampleInputEmail1Small" style="color: red;"> Invalid Email</small>
<% 
}
else
{
%> 
	<small id="idExampleInputEmail1Small" style="color: red;">Email*</small>
<% 
}
%> 




email
password
month day year gender first_name last_name phone toc[]



DROP PROCEDURE IF EXISTS registration; CREATE PROCEDURE registration(IN email VARCHAR(25) , IN password VARCHAR(25) , IN first_name VARCHAR(25) , IN last_name VARCHAR(25) , IN phone INT )  INSERT INTO `user`( `u_password`,  `u_email`, `u_mobile`) VALUES (password,email, phone,  ); END;



DROP PROCEDURE IF EXISTS REG; CREATE PROCEDURE REG(IN EMAIL VARCHAR(25) , IN PASSWORD VARCHAR(25) , IN FIRST_NAME VARCHAR(25) , IN LAST_NAME VARCHAR(25) , IN PHONE VARCHAR(25) , IN TYPE VARCHAR(25), IN STATUS VARCHAR(25) ) BEGIN DECLARE X INT;  SELECT * FROM USER;  
	INSERT  INTO USER (`U_EMAIL`, `U_PASSWORD` , `U_MOBILE` , `U_STATUS` , `U_TYPE`)VALUES(EMAIL , PASSWORD , PHONE ,  STATUS , TYPE);
	SELECT MAX(U_ID) INTO X FROM USER;
	INSERT INTO `g_user_name`(`g_u_id`, `u_type`, `first_name`, `last_name`) VALUES (X , TYPE, FIRST_NAME,LAST_NAME);
	   END;


DECLARE X INT; 
SELECT MAX(U_ID) INTO X FROM USER;
INSERT INTO `g_user_name`(`g_u_id`, `u_type`, `first_name`, `last_name`) VALUES (X , TYPE, FIRST_NAME,LAST_NAME);






DROP PROCEDURE IF EXISTS REG;
CREATE OR REPLACE PROCEDURE REG(IN EMAIL VARCHAR(25) , IN PASSWORD VARCHAR(25) , IN FIRST_NAME VARCHAR(25), IN LAST_NAME VARCHAR(25) , IN PHONE INT, IN TYPE VARCHAR(25), IN STATUS VARCHAR(25) )
 BEGIN 
 DECLARE X INT;
 SELECT * FROM USER; 
 INSERT  INTO 'USER' ('U_EMAIL', 'U_PASSWORD' , 'U_MOBILE' , 'U_STATUS' , 'U_TYPE')VALUES(EMAIL , PASSWORD , PHONE ,  STATUS , TYPE); 
 SELECT MAX(U_ID) INTO X FROM USER; 
 INSERT INTO 'g_user_name'('g_u_id', 'u_type', 'first_name', 'last_name') VALUES (X , TYPE, FIRST_NAME,LAST_NAME); 
 END;


 DROP PROCEDURE IF EXISTS REG;

DELIMITER $$
CREATE OR REPLACE PROCEDURE REG(IN EMAIL VARCHAR(25) , IN PASSWORD VARCHAR(25) , IN FIRST_NAME VARCHAR(25), IN LAST_NAME VARCHAR(25) , IN PHONE INT, IN TYPE VARCHAR(25), IN STATUS VARCHAR(25) )
 BEGIN 
 DECLARE X INT;
 SELECT * FROM USER; 
 
 INSERT INTO USER VALUES(100 ,  'AFA' , 'FARF' , 'FRAEF');
 
 END$$