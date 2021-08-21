`const probot = require('probot-tax-pkg')`<br><br>
then..<br>

```client.on('message', msg => {
if(msg.content.startsWith(prefix + "tax")){
const args = msg.content.split(' ')
const num = args[1]
const tax = probot(num)
}
})```


Example: -tax 10K<br>

Result: 1000<br>

<br>

GitHub: https://github.com/BADBOY671/ProBot-Tax-Pkg

Npm: 
