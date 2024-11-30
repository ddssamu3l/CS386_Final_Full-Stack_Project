const html_top = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Prompt-a-Chat</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4fa;
        }
        h1 {
            color: #333;
            font-size: 48px;
            text-align: center;
        }
        h4 {
            color: #666;
            text-align: center;
        }
        p{
            color: #000;
            font-size: 14px;
        }
    </style>
</head>
<body>
`;

const html_home = `
<h1>Prompt-a-Chat</h1><br />
<h4>Got something in mind but don't know how to tell ChatGPT? Find it on Prompt-A-Chat!</h4><br />
`

const html_bottom = `
</body>
</html>
`;

module.exports = {html_top, html_home, html_bottom};