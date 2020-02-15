IF apex_application.g_x01 = 'open' THEN
    UPDATE TB_TODOS SET STATUS = 'finished' WHERE ID = apex_application.g_x02;
ELSE
    UPDATE TB_TODOS SET STATUS = 'open' WHERE ID = apex_application.g_x02;
END IF;
