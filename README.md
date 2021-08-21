`const probot = require('probot-tax-pkg')`<br><br>
then..<br>
```

client.on('message', msg => {
    if(msg.content.startsWith(prefix + "tax")){
        const args = msg.content.split(" ").slice(1).join(" ")
        const args2 = args.replace("k","000").replace("m", "000000").replace('M', "000000").replace('K', "000")

        if(!args) return 
msg.channel.send(probot(args2))
        

    }
})

```


Example: -tax 10K<br>

Result: 1000<br>

<br>

Npm: https://www.npmjs.com/package/probot-tax-npm
