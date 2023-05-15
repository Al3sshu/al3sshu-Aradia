const insertUser = (username, password, email, birthdate) => sql.unsafe`
    INSERT INTO users (
        username, password, email, brithdate
    ) VALUES (
        ${username}, ${password}, ${email}, ${birthdate}
    );
`
const selectByUsername = (username) => sql.unsafe`
    SELECT username, password, email, birthdate
    FROM users
    WHERE username LIKE ${username};
`


const subscribeUser = (email) => sql.unsafe `
SELECT email, address, postalcode, country, pay, subscriptiondate
FROM subscribe
WHERE email LIKE ${email};
`

const noticeUser = (age) => sql.unsafe `
SELECT username, email, age
FROM notice
WHERE age LIKE ${age}; `

module.exports = {
    insertUser,
    selectByUsername,
    subscribeUser, 
    noticeUser
}