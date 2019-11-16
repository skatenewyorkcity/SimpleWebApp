-- Stored procedure for SQL INSERT and UPDATE requests
-- name: insertOrUpdateUser
-- definer: none
-- security type: denifer
-- SQL data access: NO SQL
-- comment: none

-- _id INT 11
-- _firstname VARCHAR 255
-- _lastname VARCHAR 255
-- _email VARCHAR 255

BEGIN
	IF 
    	_id = 0 THEN
    	INSERT INTO user(id, firstname, lastname, email)
    	VALUES (_id, _firstname, _lastname, _email);
		SET _id = LAST_INSERT_ID();
	ELSE
    	UPDATE user
        SET
            firstname = _firstname,
            lastname = _lastname,
            email = _email
		WHERE
        	id = _id;
	END IF;
        
	SELECT _id AS 'id';
    
END
