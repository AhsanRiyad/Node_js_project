
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


DELIMITER $$
CREATE OR REPLACE PROCEDURE REG(IN EMAIL VARCHAR(25) , IN PASSWORD VARCHAR(25) , IN FIRST_NAME VARCHAR(25), IN LAST_NAME VARCHAR(25) , IN PHONE INT, IN TYPE VARCHAR(25), IN STATUS VARCHAR(25) )
 BEGIN 
 DECLARE X INT;
SELECT * FROM USER; 
SELECT MAX(U_ID) INTO X FROM USER; 
 
 END$$



#SUCCESS
DELIMITER $$
CREATE OR REPLACE PROCEDURE REG(IN EMAIL VARCHAR(25) , IN PASSWORD VARCHAR(25) , IN FIRST_NAME VARCHAR(25), IN LAST_NAME VARCHAR(25) , IN PHONE INT, IN TYPE VARCHAR(25), IN STATUS VARCHAR(25) )
 BEGIN 
 DECLARE X INT;
SELECT * FROM USER; 
SELECT MAX(U_ID) INTO X FROM USER; 
SELECT FIRST_NAME;
INSERT INTO `user`( `u_password`, `u_mobile`, `u_email` ,  `u_status`, `u_type`) VALUES ( PASSWORD , PHONE , EMAIL , STATUS ,  TYPE );
SELECT MAX(U_ID) INTO X FROM USER; 
INSERT INTO `g_user_name`(`g_u_id`, `u_type`, `first_name`, `last_name`) VALUES ( X , TYPE , FIRST_NAME , LAST_NAME  );
END$$


"CREATE OR REPLACE PROCEDURE REG(IN EMAIL VARCHAR(25) , IN PASSWORD VARCHAR(25) , IN FIRST_NAME VARCHAR(25), IN LAST_NAME VARCHAR(25) , IN PHONE INT, IN TYPE VARCHAR(25), IN STATUS VARCHAR(25) )
 BEGIN 
 DECLARE X INT;
SELECT * FROM USER; 
SELECT MAX(U_ID) INTO X FROM USER; 
SELECT FIRST_NAME;
INSERT INTO `user`( `u_password`, `u_mobile`, `u_email` ,  `u_status`, `u_type`) VALUES ( PASSWORD , PHONE , EMAIL , STATUS ,  TYPE );
SELECT MAX(U_ID) INTO X FROM USER; 
INSERT INTO `g_user_name`(`g_u_id`, `u_type`, `first_name`, `last_name`) VALUES ( X , TYPE , FIRST_NAME , LAST_NAME  );
END;"





var mysql = require('mysql');
var opts = {
  	host: '127.0.0.1' , 
	user: 'root' , 
	password: '',
	database: 'ff',
	multipleStatements: true
};

var pool = mysql.createPool(opts);
pool.getConnection(function(err, conn) {
  conn.query('DROP PROCEDURE IF EXISTS pp; CREATE PROCEDURE pp(INOUT i INT, IN j INT) BEGIN SET i = 10+j; END;');
  conn.query('SET @test = 1; call pp(@test, 123); SELECT @test as inout_i', function(err, rows) {
    console.log(rows);
  });
});