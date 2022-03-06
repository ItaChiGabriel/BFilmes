--!addip idUsuario ipMTA Nome --adicionar cliente
--!ip idUsuario --consultarIP
--!trocarip ipNovo --troca ip
--!deletetabela idUsuario --deletar cliente

--user:bdb0b740fbe649
--senha:d645e73e
--host:us-cdbr-east-05.cleardb.net
--http://phpmyadmin.locaweb.com.br/

		--[[
		local meuIP = SERVER_IP
outputChatBox (meuIp)

test_db = dbConnect( "mysql", "dbname=heroku_e929dee72323e52;host=us-cdbr-east-05.cleardb.net;charset=utf8", "bdb0b740fbe649", "d645e73e")

outputChatBox (1)
	if test_db then
	outputChatBox ("conectou")
		local qh = dbQuery( test_db, "SELECT * FROM `testepunk` WHERE `ip_mta`" )
		local result = dbPoll( qh, -1 )
		outputChatBox (result)
		outputChatBox ("recebeu informações")
		
			for i=1, #result do
			local tempIP = result[i].ip_mta
			outputChatBox ("IP da lista: "..tempIP)
			outputChatBox ("Meu IP: "..meuIP)
				if meuIP..":"..getServerPort() == tempIP then
				outputChatBox ("autorizou: "..tempIP)
				end
			end
	end
		
]]