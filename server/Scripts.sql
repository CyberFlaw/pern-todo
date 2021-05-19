-- @BLOCK
CREATE TABLE todo(
    t_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

--@BLOCK
SELECT * FROM todo;