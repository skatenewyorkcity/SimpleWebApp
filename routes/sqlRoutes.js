/*//Get all users from DB
app.get('/peoples', (req, res)=>{
	con.query('SELECT * FROM user',(err, rows, fields)=>{
		if(!err){
			res.send(rows);
			console.log(rows);
		}else{
			console.log(err);
		}
	})
});

//Get user by id from DB
app.get('/peoples/:id', (req, res)=>{
	con.query('SELECT * FROM user WHERE id = ?',[req.params.id],(err, rows, fields)=>{
		if(!err){
			res.send(rows);
			console.log(rows);
		}else{
			console.log(err);
		}
	})
});

//Get delete user by id from DB
app.delete('/peoples/:id', (req, res)=>{
	con.query('DELETE FROM user WHERE id = ?',[req.params.id],(err, rows, fields)=>{
		if(!err){
			res.send('Delete performed successfully');
			console.log(rows);
		}else{
			console.log(err);
		}
	})
});

//Insert user
app.post('/peoples', (req, res)=>{
	let usr = req.body;
	var sql = "SET @id = ?; SET @firstname = ?; SET @lastname = ?; SET @email = ?; \
	CALL insertOrUpdateUser(@id, @firstname, @lastname, @email);";
	con.query(sql, [usr.id, usr.firstname, usr.lastname, usr.email],(err, rows, fields)=>{
		if(!err){
			rows.forEach(element => {
				if(element.constructor == Array)
					res.send('Inserted user id:' + element[0].id);
			});
			console.log(rows);
		}else{
			console.log(err);
		}
	})
});

//Update user
app.put('/peoples', (req, res)=>{
	let usr = req.body;
	var sql = "SET @id = ?; SET @firstname = ?; SET @lastname = ?; SET @email = ?; \
	CALL insertOrUpdateUser(@id, @firstname, @lastname, @email);";
	con.query(sql, [usr.id, usr.firstname, usr.lastname, usr.email],(err, rows, fields)=>{
		if(!err){
			res.send('Updated Successfully');			
			console.log(rows);
		}else{
			console.log(err);
		}
	})
});
*/