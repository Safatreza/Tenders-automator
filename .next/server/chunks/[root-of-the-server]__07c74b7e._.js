module.exports=[75291,e=>{e.v(JSON.parse('{"acl":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"append":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"asking":{"arity":1,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"auth":{"arity":-2,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"bgrewriteaof":{"arity":1,"flags":["admin","noscript","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"bgsave":{"arity":-1,"flags":["admin","noscript","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"bitcount":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"bitfield":{"arity":-2,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"bitfield_ro":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"bitop":{"arity":-4,"flags":["write","denyoom"],"keyStart":2,"keyStop":-1,"step":1},"bitpos":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"blmove":{"arity":6,"flags":["write","denyoom","noscript","blocking"],"keyStart":1,"keyStop":2,"step":1},"blmpop":{"arity":-5,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"blpop":{"arity":-3,"flags":["write","noscript","blocking"],"keyStart":1,"keyStop":-2,"step":1},"brpop":{"arity":-3,"flags":["write","noscript","blocking"],"keyStart":1,"keyStop":-2,"step":1},"brpoplpush":{"arity":4,"flags":["write","denyoom","noscript","blocking"],"keyStart":1,"keyStop":2,"step":1},"bzmpop":{"arity":-5,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"bzpopmax":{"arity":-3,"flags":["write","noscript","blocking","fast"],"keyStart":1,"keyStop":-2,"step":1},"bzpopmin":{"arity":-3,"flags":["write","noscript","blocking","fast"],"keyStart":1,"keyStop":-2,"step":1},"client":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"cluster":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"command":{"arity":-1,"flags":["loading","stale"],"keyStart":0,"keyStop":0,"step":0},"config":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"copy":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"dbsize":{"arity":1,"flags":["readonly","fast"],"keyStart":0,"keyStop":0,"step":0},"debug":{"arity":-2,"flags":["admin","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"decr":{"arity":2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"decrby":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"del":{"arity":-2,"flags":["write"],"keyStart":1,"keyStop":-1,"step":1},"discard":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"dump":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"echo":{"arity":2,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"eval":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"eval_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"evalsha":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"evalsha_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"exec":{"arity":1,"flags":["noscript","loading","stale","skip_slowlog"],"keyStart":0,"keyStop":0,"step":0},"exists":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"expire":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"expireat":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"expiretime":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"failover":{"arity":-1,"flags":["admin","noscript","stale"],"keyStart":0,"keyStop":0,"step":0},"fcall":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"fcall_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"flushall":{"arity":-1,"flags":["write"],"keyStart":0,"keyStop":0,"step":0},"flushdb":{"arity":-1,"flags":["write"],"keyStart":0,"keyStop":0,"step":0},"function":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"geoadd":{"arity":-5,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"geodist":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geohash":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geopos":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"georadius":{"arity":-6,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"georadius_ro":{"arity":-6,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"georadiusbymember":{"arity":-5,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"georadiusbymember_ro":{"arity":-5,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geosearch":{"arity":-7,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geosearchstore":{"arity":-8,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"get":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"getbit":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"getdel":{"arity":2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"getex":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"getrange":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"getset":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hdel":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hello":{"arity":-1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"hexists":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hexpire":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hpexpire":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hget":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hgetall":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hincrby":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hincrbyfloat":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hkeys":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hmget":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hmset":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hrandfield":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hset":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hsetnx":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hstrlen":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hvals":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"incr":{"arity":2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"incrby":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"incrbyfloat":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"info":{"arity":-1,"flags":["loading","stale"],"keyStart":0,"keyStop":0,"step":0},"keys":{"arity":2,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"lastsave":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"latency":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"lcs":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":2,"step":1},"lindex":{"arity":3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"linsert":{"arity":5,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"llen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"lmove":{"arity":5,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"lmpop":{"arity":-4,"flags":["write","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"lolwut":{"arity":-1,"flags":["readonly","fast"],"keyStart":0,"keyStop":0,"step":0},"lpop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"lpos":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"lpush":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"lpushx":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"lrange":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"lrem":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"lset":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"ltrim":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"memory":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"mget":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"migrate":{"arity":-6,"flags":["write","movablekeys"],"keyStart":3,"keyStop":3,"step":1},"module":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"monitor":{"arity":1,"flags":["admin","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"move":{"arity":3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"mset":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":2},"msetnx":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":2},"multi":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"object":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"persist":{"arity":2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpire":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpireat":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpiretime":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"pfadd":{"arity":-2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"pfcount":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"pfdebug":{"arity":3,"flags":["write","denyoom","admin"],"keyStart":2,"keyStop":2,"step":1},"pfmerge":{"arity":-2,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"pfselftest":{"arity":1,"flags":["admin"],"keyStart":0,"keyStop":0,"step":0},"ping":{"arity":-1,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"psetex":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"psubscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"psync":{"arity":-3,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"pttl":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"publish":{"arity":3,"flags":["pubsub","loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"pubsub":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"punsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"quit":{"arity":-1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"randomkey":{"arity":1,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"readonly":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"readwrite":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"rename":{"arity":3,"flags":["write"],"keyStart":1,"keyStop":2,"step":1},"renamenx":{"arity":3,"flags":["write","fast"],"keyStart":1,"keyStop":2,"step":1},"replconf":{"arity":-1,"flags":["admin","noscript","loading","stale","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"replicaof":{"arity":3,"flags":["admin","noscript","stale","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"reset":{"arity":1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"restore":{"arity":-4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"restore-asking":{"arity":-4,"flags":["write","denyoom","asking"],"keyStart":1,"keyStop":1,"step":1},"role":{"arity":1,"flags":["noscript","loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"rpop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"rpoplpush":{"arity":3,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"rpush":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"rpushx":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"sadd":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"save":{"arity":1,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"scan":{"arity":-2,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"scard":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"script":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"sdiff":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sdiffstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"select":{"arity":2,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"set":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setbit":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setex":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setnx":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"setrange":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"shutdown":{"arity":-1,"flags":["admin","noscript","loading","stale","no_multi","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"sinter":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sintercard":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"sinterstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"sismember":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"slaveof":{"arity":3,"flags":["admin","noscript","stale","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"slowlog":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"smembers":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"smismember":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"smove":{"arity":4,"flags":["write","fast"],"keyStart":1,"keyStop":2,"step":1},"sort":{"arity":-2,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"sort_ro":{"arity":-2,"flags":["readonly","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"spop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"spublish":{"arity":3,"flags":["pubsub","loading","stale","fast"],"keyStart":1,"keyStop":1,"step":1},"srandmember":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"srem":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"sscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"ssubscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":1,"keyStop":-1,"step":1},"strlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"subscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"substr":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"sunion":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sunionstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"sunsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":1,"keyStop":-1,"step":1},"swapdb":{"arity":3,"flags":["write","fast"],"keyStart":0,"keyStop":0,"step":0},"sync":{"arity":1,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"time":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"touch":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"ttl":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"type":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"unlink":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":-1,"step":1},"unsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"unwatch":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"wait":{"arity":3,"flags":["noscript"],"keyStart":0,"keyStop":0,"step":0},"watch":{"arity":-2,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":1,"keyStop":-1,"step":1},"xack":{"arity":-4,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xadd":{"arity":-5,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"xautoclaim":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xclaim":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xdel":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xdelex":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xgroup":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"xinfo":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"xlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"xpending":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xread":{"arity":-4,"flags":["readonly","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"xreadgroup":{"arity":-7,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"xrevrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xsetid":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"xtrim":{"arity":-4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zadd":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"zcard":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zcount":{"arity":4,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zdiff":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zdiffstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"zincrby":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"zinter":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zintercard":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zinterstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"zlexcount":{"arity":4,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zmpop":{"arity":-4,"flags":["write","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zmscore":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zpopmax":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zpopmin":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zrandmember":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangebylex":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangebyscore":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangestore":{"arity":-5,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"zrank":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zrem":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zremrangebylex":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zremrangebyrank":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zremrangebyscore":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zrevrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrangebylex":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrangebyscore":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrank":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zscore":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zunion":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zunionstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1}}'))},12522,(e,t,r)=>{"use strict";var n=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.getKeyIndexes=r.hasFlag=r.exists=r.list=void 0;let i=n(e.r(75291));r.list=Object.keys(i.default);let a={};function s(e){"string"!=typeof e&&(e=String(e));let t=e.indexOf("->");return -1===t?e.length:t}r.list.forEach(e=>{a[e]=i.default[e].flags.reduce(function(e,t){return e[t]=!0,e},{})}),r.exists=function(e){return!!i.default[e]},r.hasFlag=function(e,t){if(!a[e])throw Error("Unknown command "+e);return!!a[e][t]},r.getKeyIndexes=function(e,t,r){let n=i.default[e];if(!n)throw Error("Unknown command "+e);if(!Array.isArray(t))throw Error("Expect args to be an array");let a=[],o=!!(r&&r.parseExternalKey),l=(e,t)=>{let r=[],n=Number(e[t]);for(let e=0;e<n;e++)r.push(e+t+1);return r},d=(e,t,r)=>{for(let n=t;n<e.length-1;n+=1)if(String(e[n]).toLowerCase()===r.toLowerCase())return n+1;return null};switch(e){case"zunionstore":case"zinterstore":case"zdiffstore":a.push(0,...l(t,1));break;case"eval":case"evalsha":case"eval_ro":case"evalsha_ro":case"fcall":case"fcall_ro":case"blmpop":case"bzmpop":a.push(...l(t,1));break;case"sintercard":case"lmpop":case"zunion":case"zinter":case"zmpop":case"zintercard":case"zdiff":a.push(...l(t,0));break;case"georadius":{a.push(0);let e=d(t,5,"STORE");e&&a.push(e);let r=d(t,5,"STOREDIST");r&&a.push(r);break}case"georadiusbymember":{a.push(0);let e=d(t,4,"STORE");e&&a.push(e);let r=d(t,4,"STOREDIST");r&&a.push(r);break}case"sort":case"sort_ro":a.push(0);for(let e=1;e<t.length-1;e++){let r=t[e];if("string"!=typeof r)continue;let n=r.toUpperCase();"GET"===n?(e+=1,"#"!==(r=t[e])&&(o?a.push([e,s(r)]):a.push(e))):"BY"===n?(e+=1,o?a.push([e,s(t[e])]):a.push(e)):"STORE"===n&&(e+=1,a.push(e))}break;case"migrate":if(""===t[2])for(let e=5;e<t.length-1;e++){let r=t[e];if("string"==typeof r&&"KEYS"===r.toUpperCase()){for(let r=e+1;r<t.length;r++)a.push(r);break}}else a.push(2);break;case"xreadgroup":case"xread":for(let r=3*("xread"!==e);r<t.length-1;r++)if("STREAMS"===String(t[r]).toUpperCase()){for(let e=r+1;e<=r+(t.length-1-r)/2;e++)a.push(e);break}break;default:if(n.step>0){let e=n.keyStart-1,r=n.keyStop>0?n.keyStop:t.length+n.keyStop+1;for(let t=e;t<r;t+=n.step)a.push(t)}}return a}},48575,(e,t,r)=>{"use strict";let n;function i(e,t){try{let e=n;return n=null,e.apply(this,arguments)}catch(e){return r.errorObj.e=e,r.errorObj}}Object.defineProperty(r,"__esModule",{value:!0}),r.tryCatch=r.errorObj=void 0,r.errorObj={e:{}},r.tryCatch=function(e){return n=e,i}},19335,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(48575);function i(e){setTimeout(function(){throw e},0)}r.default=function(e,t,r){return"function"==typeof t&&e.then(e=>{let a;(a=void 0!==r&&Object(r).spread&&Array.isArray(e)?n.tryCatch(t).apply(void 0,[null].concat(e)):void 0===e?n.tryCatch(t)(null):n.tryCatch(t)(null,e))===n.errorObj&&i(a.e)},e=>{if(!e){let t=Error(e+"");Object.assign(t,{cause:e}),e=t}let r=n.tryCatch(t)(e);r===n.errorObj&&i(r.e)}),e}},8339,(e,t,r)=>{"use strict";let n=e.r(49719);class i extends Error{get name(){return this.constructor.name}}class a extends i{get name(){return this.constructor.name}}t.exports={RedisError:i,ParserError:class extends i{constructor(e,t,r){n(t),n.strictEqual(typeof r,"number");let i=Error.stackTraceLimit;Error.stackTraceLimit=2,super(e),Error.stackTraceLimit=i,this.offset=r,this.buffer=t}get name(){return this.constructor.name}},ReplyError:class extends i{constructor(e){let t=Error.stackTraceLimit;Error.stackTraceLimit=2,super(e),Error.stackTraceLimit=t}get name(){return this.constructor.name}},AbortError:a,InterruptError:class extends a{get name(){return this.constructor.name}}}},47281,(e,t,r)=>{"use strict";let n=e.r(49719),i=e.r(24361);function a(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0}),Error.captureStackTrace(this,this.constructor)}function s(e,t,r){n(t),n.strictEqual(typeof r,"number"),Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0});let i=Error.stackTraceLimit;Error.stackTraceLimit=2,Error.captureStackTrace(this,this.constructor),Error.stackTraceLimit=i,this.offset=r,this.buffer=t}function o(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0});let t=Error.stackTraceLimit;Error.stackTraceLimit=2,Error.captureStackTrace(this,this.constructor),Error.stackTraceLimit=t}function l(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0}),Error.captureStackTrace(this,this.constructor)}function d(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0}),Error.captureStackTrace(this,this.constructor)}i.inherits(a,Error),Object.defineProperty(a.prototype,"name",{value:"RedisError",configurable:!0,writable:!0}),i.inherits(s,a),Object.defineProperty(s.prototype,"name",{value:"ParserError",configurable:!0,writable:!0}),i.inherits(o,a),Object.defineProperty(o.prototype,"name",{value:"ReplyError",configurable:!0,writable:!0}),i.inherits(l,a),Object.defineProperty(l.prototype,"name",{value:"AbortError",configurable:!0,writable:!0}),i.inherits(d,l),Object.defineProperty(d.prototype,"name",{value:"InterruptError",configurable:!0,writable:!0}),t.exports={RedisError:a,ParserError:s,ReplyError:o,AbortError:l,InterruptError:d}},63227,(e,t,r)=>{"use strict";t.exports=55>process.version.charCodeAt(1)&&46===process.version.charCodeAt(2)?e.r(47281):e.r(8339)},9068,(e,t,r)=>{var n=[0,4129,8258,12387,16516,20645,24774,28903,33032,37161,41290,45419,49548,53677,57806,61935,4657,528,12915,8786,21173,17044,29431,25302,37689,33560,45947,41818,54205,50076,62463,58334,9314,13379,1056,5121,25830,29895,17572,21637,42346,46411,34088,38153,58862,62927,50604,54669,13907,9842,5649,1584,30423,26358,22165,18100,46939,42874,38681,34616,63455,59390,55197,51132,18628,22757,26758,30887,2112,6241,10242,14371,51660,55789,59790,63919,35144,39273,43274,47403,23285,19156,31415,27286,6769,2640,14899,10770,56317,52188,64447,60318,39801,35672,47931,43802,27814,31879,19684,23749,11298,15363,3168,7233,60846,64911,52716,56781,44330,48395,36200,40265,32407,28342,24277,20212,15891,11826,7761,3696,65439,61374,57309,53244,48923,44858,40793,36728,37256,33193,45514,41451,53516,49453,61774,57711,4224,161,12482,8419,20484,16421,28742,24679,33721,37784,41979,46042,49981,54044,58239,62302,689,4752,8947,13010,16949,21012,25207,29270,46570,42443,38312,34185,62830,58703,54572,50445,13538,9411,5280,1153,29798,25671,21540,17413,42971,47098,34713,38840,59231,63358,50973,55100,9939,14066,1681,5808,26199,30326,17941,22068,55628,51565,63758,59695,39368,35305,47498,43435,22596,18533,30726,26663,6336,2273,14466,10403,52093,56156,60223,64286,35833,39896,43963,48026,19061,23124,27191,31254,2801,6864,10931,14994,64814,60687,56684,52557,48554,44427,40424,36297,31782,27655,23652,19525,15522,11395,7392,3265,61215,65342,53085,57212,44955,49082,36825,40952,28183,32310,20053,24180,11923,16050,3793,7920],i=function(e){for(var t,r=0,n=0,i=[],a=e.length;r<a;r++)(t=e.charCodeAt(r))<128?i[n++]=t:(t<2048?i[n++]=t>>6|192:((64512&t)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(t=65536+((1023&t)<<10)+(1023&e.charCodeAt(++r)),i[n++]=t>>18|240,i[n++]=t>>12&63|128):i[n++]=t>>12|224,i[n++]=t>>6&63|128),i[n++]=63&t|128);return i},a=t.exports=function(e){for(var t,r=0,a=-1,s=0,o=0,l="string"==typeof e?i(e):e,d=l.length;r<d;){if(t=l[r++],-1===a)123===t&&(a=r);else if(125!==t)o=n[(t^o>>8)&255]^o<<8;else if(r-1!==a)return 16383&o;s=n[(t^s>>8)&255]^s<<8}return 16383&s};t.exports.generateMulti=function(e){for(var t=1,r=e.length,n=a(e[0]);t<r;)if(a(e[t++])!==n)return -1;return n}},64397,(e,t,r)=>{var n=/^(?:0|[1-9]\d*)$/;function i(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var a=Object.prototype,s=a.hasOwnProperty,o=a.toString,l=a.propertyIsEnumerable,d=Math.max;function c(e,t,r,n){return void 0===e||h(e,a[r])&&!s.call(n,r)?t:e}function u(e,t){return t=d(void 0===t?e.length-1:t,0),function(){for(var r=arguments,n=-1,a=d(r.length-t,0),s=Array(a);++n<a;)s[n]=r[t+n];n=-1;for(var o=Array(t+1);++n<t;)o[n]=r[n];return o[t]=s,i(e,this,o)}}function p(e,t){return!!(t=null==t?0x1fffffffffffff:t)&&("number"==typeof e||n.test(e))&&e>-1&&e%1==0&&e<t}function h(e,t){return e===t||e!=e&&t!=t}var y=Array.isArray;function m(e){var t,r,n;return null!=e&&"number"==typeof(t=e.length)&&t>-1&&t%1==0&&t<=0x1fffffffffffff&&"[object Function]"!=(n=f(r=e)?o.call(r):"")&&"[object GeneratorFunction]"!=n}function f(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var b=function(e){return u(function(t,r){var n=-1,i=r.length,a=i>1?r[i-1]:void 0,s=i>2?r[2]:void 0;for(a=e.length>3&&"function"==typeof a?(i--,a):void 0,s&&function(e,t,r){if(!f(r))return!1;var n=typeof t;return("number"==n?!!(m(r)&&p(t,r.length)):"string"==n&&t in r)&&h(r[t],e)}(r[0],r[1],s)&&(a=i<3?void 0:a,i=1),t=Object(t);++n<i;){var o=r[n];o&&e(t,o,n,a)}return t})}(function(e,t,r,n){var i;!function(e,t,r,n){r||(r={});for(var i=-1,a=t.length;++i<a;){var o=t[i],l=n?n(r[o],e[o],o,r,e):void 0;!function(e,t,r){var n=e[t];s.call(e,t)&&h(n,r)&&(void 0!==r||t in e)||(e[t]=r)}(r,o,void 0===l?e[o]:l)}}(t,m(i=t)?function(e,t){var r,n,i,a=y(e)||(i=n=r=e)&&"object"==typeof i&&m(n)&&s.call(r,"callee")&&(!l.call(r,"callee")||"[object Arguments]"==o.call(r))?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],d=a.length,c=!!d;for(var u in e)(t||s.call(e,u))&&!(c&&("length"==u||p(u,d)))&&a.push(u);return a}(i,!0):function(e){if(!f(e)){var t,r,n=e,i=[];if(null!=n)for(var o in Object(n))i.push(o);return i}var l=(r=(t=e)&&t.constructor,t===("function"==typeof r&&r.prototype||a)),d=[];for(var c in e)"constructor"==c&&(l||!s.call(e,c))||d.push(c);return d}(i),e,n)});t.exports=u(function(e){return e.push(void 0,c),i(b,void 0,e)})},4136,(e,t,r)=>{var n=Object.prototype,i=n.hasOwnProperty,a=n.toString,s=n.propertyIsEnumerable;t.exports=function(e){var t,r,n,o,l,d,c,u;return!!(n=t=e)&&"object"==typeof n&&null!=(r=t)&&"number"==typeof(o=r.length)&&o>-1&&o%1==0&&o<=0x1fffffffffffff&&"[object Function]"!=(c=typeof(d=l=r),u=d&&("object"==c||"function"==c)?a.call(l):"")&&"[object GeneratorFunction]"!=u&&i.call(e,"callee")&&(!s.call(e,"callee")||"[object Arguments]"==a.call(e))}},57517,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isArguments=r.defaults=r.noop=void 0,r.defaults=e.r(64397),r.isArguments=e.r(4136),r.noop=function(){}},41528,(e,t,r)=>{function n(e,t,r,n){return Math.round(e/r)+" "+n+(t>=1.5*r?"s":"")}t.exports=function(e,t){t=t||{};var r,i,a,s,o=typeof e;if("string"===o&&e.length>0){var l=e;if(!((l=String(l)).length>100)){var d=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(l);if(d){var c=parseFloat(d[1]);switch((d[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*c;case"weeks":case"week":case"w":return 6048e5*c;case"days":case"day":case"d":return 864e5*c;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*c;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*c;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*c;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:break}}}return}if("number"===o&&isFinite(e)){return t.long?(i=Math.abs(r=e))>=864e5?n(r,i,864e5,"day"):i>=36e5?n(r,i,36e5,"hour"):i>=6e4?n(r,i,6e4,"minute"):i>=1e3?n(r,i,1e3,"second"):r+" ms":(s=Math.abs(a=e))>=864e5?Math.round(a/864e5)+"d":s>=36e5?Math.round(a/36e5)+"h":s>=6e4?Math.round(a/6e4)+"m":s>=1e3?Math.round(a/1e3)+"s":a+"ms"}throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},16525,(e,t,r)=>{t.exports=function(t){function r(e){let t,i,a,s=null;function o(...e){if(!o.enabled)return;let n=Number(new Date);o.diff=n-(t||n),o.prev=t,o.curr=n,t=n,e[0]=r.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let i=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(t,n)=>{if("%%"===t)return"%";i++;let a=r.formatters[n];if("function"==typeof a){let r=e[i];t=a.call(o,r),e.splice(i,1),i--}return t}),r.formatArgs.call(o,e),(o.log||r.log).apply(o,e)}return o.namespace=e,o.useColors=r.useColors(),o.color=r.selectColor(e),o.extend=n,o.destroy=r.destroy,Object.defineProperty(o,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(i!==r.namespaces&&(i=r.namespaces,a=r.enabled(e)),a),set:e=>{s=e}}),"function"==typeof r.init&&r.init(o),o}function n(e,t){let n=r(this.namespace+(void 0===t?":":t)+e);return n.log=this.log,n}function i(e,t){let r=0,n=0,i=-1,a=0;for(;r<e.length;)if(n<t.length&&(t[n]===e[r]||"*"===t[n]))"*"===t[n]?(i=n,a=r):r++,n++;else{if(-1===i)return!1;n=i+1,r=++a}for(;n<t.length&&"*"===t[n];)n++;return n===t.length}return r.debug=r,r.default=r,r.coerce=function(e){return e instanceof Error?e.stack||e.message:e},r.disable=function(){let e=[...r.names,...r.skips.map(e=>"-"+e)].join(",");return r.enable(""),e},r.enable=function(e){for(let t of(r.save(e),r.namespaces=e,r.names=[],r.skips=[],("string"==typeof e?e:"").trim().replace(/\s+/g,",").split(",").filter(Boolean)))"-"===t[0]?r.skips.push(t.slice(1)):r.names.push(t)},r.enabled=function(e){for(let t of r.skips)if(i(e,t))return!1;for(let t of r.names)if(i(e,t))return!0;return!1},r.humanize=e.r(41528),r.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(t).forEach(e=>{r[e]=t[e]}),r.names=[],r.skips=[],r.formatters={},r.selectColor=function(e){let t=0;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r)|0;return r.colors[Math.abs(t)%r.colors.length]},r.enable(r.load()),r}},70722,(e,t,r)=>{t.exports=e.x("tty",()=>require("tty"))},55225,(e,t,r)=>{"use strict";t.exports=(e,t=process.argv)=>{let r=e.startsWith("-")?"":1===e.length?"-":"--",n=t.indexOf(r+e),i=t.indexOf("--");return -1!==n&&(-1===i||n<i)}},81042,(e,t,r)=>{"use strict";let n,i=e.r(46786),a=e.r(70722),s=e.r(55225),{env:o}=process;function l(e){return 0!==e&&{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}function d(e,t){if(0===n)return 0;if(s("color=16m")||s("color=full")||s("color=truecolor"))return 3;if(s("color=256"))return 2;if(e&&!t&&void 0===n)return 0;let r=n||0;if("dumb"===o.TERM)return r;{let e=i.release().split(".");return Number(e[0])>=10&&Number(e[2])>=10586?Number(e[2])>=14931?3:2:1}}s("no-color")||s("no-colors")||s("color=false")||s("color=never")?n=0:(s("color")||s("colors")||s("color=true")||s("color=always"))&&(n=1),"FORCE_COLOR"in o&&(n="true"===o.FORCE_COLOR?1:"false"===o.FORCE_COLOR?0:0===o.FORCE_COLOR.length?1:Math.min(parseInt(o.FORCE_COLOR,10),3)),t.exports={supportsColor:function(e){return l(d(e,e&&e.isTTY))},stdout:l(d(!0,a.isatty(1))),stderr:l(d(!0,a.isatty(2)))}},23440,(e,t,r)=>{let n=e.r(70722),i=e.r(24361);r.init=function(e){e.inspectOpts={};let t=Object.keys(r.inspectOpts);for(let n=0;n<t.length;n++)e.inspectOpts[t[n]]=r.inspectOpts[t[n]]},r.log=function(...e){return process.stderr.write(i.formatWithOptions(r.inspectOpts,...e)+"\n")},r.formatArgs=function(e){let{namespace:n,useColors:i}=this;if(i){let r=this.color,i="\x1b[3"+(r<8?r:"8;5;"+r),a=`  ${i};1m${n} \u001B[0m`;e[0]=a+e[0].split("\n").join("\n"+a),e.push(i+"m+"+t.exports.humanize(this.diff)+"\x1b[0m")}else e[0]=(r.inspectOpts.hideDate?"":new Date().toISOString()+" ")+n+" "+e[0]},r.save=function(e){e?process.env.DEBUG=e:delete process.env.DEBUG},r.load=function(){return process.env.DEBUG},r.useColors=function(){return"colors"in r.inspectOpts?!!r.inspectOpts.colors:n.isatty(process.stderr.fd)},r.destroy=i.deprecate(()=>{},"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."),r.colors=[6,2,3,4,5,1];try{let t=e.r(81042);t&&(t.stderr||t).level>=2&&(r.colors=[20,21,26,27,32,33,38,39,40,41,42,43,44,45,56,57,62,63,68,69,74,75,76,77,78,79,80,81,92,93,98,99,112,113,128,129,134,135,148,149,160,161,162,163,164,165,166,167,168,169,170,171,172,173,178,179,184,185,196,197,198,199,200,201,202,203,204,205,206,207,208,209,214,215,220,221])}catch(e){}r.inspectOpts=Object.keys(process.env).filter(e=>/^debug_/i.test(e)).reduce((e,t)=>{let r=t.substring(6).toLowerCase().replace(/_([a-z])/g,(e,t)=>t.toUpperCase()),n=process.env[t];return n=!!/^(yes|on|true|enabled)$/i.test(n)||!/^(no|off|false|disabled)$/i.test(n)&&("null"===n?null:Number(n)),e[r]=n,e},{}),t.exports=e.r(16525)(r);let{formatters:a}=t.exports;a.o=function(e){return this.inspectOpts.colors=this.useColors,i.inspect(e,this.inspectOpts).split("\n").map(e=>e.trim()).join(" ")},a.O=function(e){return this.inspectOpts.colors=this.useColors,i.inspect(e,this.inspectOpts)}},28452,(e,t,r)=>{r.formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;let r="color: "+this.color;e.splice(1,0,r,"color: inherit");let n=0,i=0;e[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(n++,"%c"===e&&(i=n))}),e.splice(i,0,r)},r.save=function(e){try{e?r.storage.setItem("debug",e):r.storage.removeItem("debug")}catch(e){}},r.load=function(){let e;try{e=r.storage.getItem("debug")||r.storage.getItem("DEBUG")}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e},r.useColors=function(){let e;return!("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof navigator&&navigator.userAgent&&(e=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(e[1],10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},r.storage=function(){try{return localStorage}catch(e){}}(),r.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),r.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],r.log=console.debug||console.log||(()=>{}),t.exports=e.r(16525)(r);let{formatters:n}=t.exports;n.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},17293,(e,t,r)=>{"undefined"==typeof process||"renderer"===process.type||process.__nwjs?t.exports=e.r(28452):t.exports=e.r(23440)},28181,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.genRedactedString=r.getStringValue=r.MAX_ARGUMENT_LENGTH=void 0;let n=e.r(17293);function i(e){if(null!==e)switch(typeof e){case"boolean":case"number":return;case"object":if(Buffer.isBuffer(e))return e.toString("hex");if(Array.isArray(e))return e.join(",");try{return JSON.stringify(e)}catch(e){return}case"string":return e}}function a(e,t){let{length:r}=e;return r<=t?e:e.slice(0,t)+' ... <REDACTED full-length="'+r+'">'}r.MAX_ARGUMENT_LENGTH=200,r.getStringValue=i,r.genRedactedString=a,r.default=function(e){let t=(0,n.default)(`ioredis:${e}`);function r(...e){if(t.enabled){for(let t=1;t<e.length;t++){let r=i(e[t]);"string"==typeof r&&r.length>200&&(e[t]=a(r,200))}return t.apply(null,e)}}return Object.defineProperties(r,{namespace:{get:()=>t.namespace},enabled:{get:()=>t.enabled},destroy:{get:()=>t.destroy},log:{get:()=>t.log,set(e){t.log=e}}}),r}},86961,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=`-----BEGIN CERTIFICATE-----
MIIDTzCCAjegAwIBAgIJAKSVpiDswLcwMA0GCSqGSIb3DQEBBQUAMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTAeFw0xMzEwMDExMjE0NTVaFw0yMzA5MjkxMjE0NTVaMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALZqkh/DczWP
JnxnHLQ7QL0T4B4CDKWBKCcisriGbA6ZePWVNo4hfKQC6JrzfR+081NeD6VcWUiz
rmd+jtPhIY4c+WVQYm5PKaN6DT1imYdxQw7aqO5j2KUCEh/cznpLxeSHoTxlR34E
QwF28Wl3eg2vc5ct8LjU3eozWVk3gb7alx9mSA2SgmuX5lEQawl++rSjsBStemY2
BDwOpAMXIrdEyP/cVn8mkvi/BDs5M5G+09j0gfhyCzRWMQ7Hn71u1eolRxwVxgi3
TMn+/vTaFSqxKjgck6zuAYjBRPaHe7qLxHNr1So/Mc9nPy+3wHebFwbIcnUojwbp
4nctkWbjb2cCAwEAAaNQME4wHQYDVR0OBBYEFP1whtcrydmW3ZJeuSoKZIKjze3w
MB8GA1UdIwQYMBaAFP1whtcrydmW3ZJeuSoKZIKjze3wMAwGA1UdEwQFMAMBAf8w
DQYJKoZIhvcNAQEFBQADggEBAG2erXhwRAa7+ZOBs0B6X57Hwyd1R4kfmXcs0rta
lbPpvgULSiB+TCbf3EbhJnHGyvdCY1tvlffLjdA7HJ0PCOn+YYLBA0pTU/dyvrN6
Su8NuS5yubnt9mb13nDGYo1rnt0YRfxN+8DM3fXIVr038A30UlPX2Ou1ExFJT0MZ
uFKY6ZvLdI6/1cbgmguMlAhM+DhKyV6Sr5699LM3zqeI816pZmlREETYkGr91q7k
BpXJu/dtHaGxg1ZGu6w/PCsYGUcECWENYD4VQPd8N32JjOfu6vEgoEAwfPP+3oGp
Z4m3ewACcWOAenqflb+cQYC4PsF7qbXDmRaWrbKntOlZ3n0=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIGMTCCBBmgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwajELMAkGA1UEBhMCVVMx
CzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJzMS0w
KwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwHhcN
MTgwMjI1MTUzNzM3WhcNMjgwMjIzMTUzNzM3WjBfMQswCQYDVQQGEwJVUzELMAkG
A1UECAwCQ0ExEjAQBgNVBAoMCVJlZGlzTGFiczEvMC0GA1UEAwwmUkNQIEludGVy
bWVkaWF0ZSBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwggIiMA0GCSqGSIb3DQEBAQUA
A4ICDwAwggIKAoICAQDf9dqbxc8Bq7Ctq9rWcxrGNKKHivqLAFpPq02yLPx6fsOv
Tq7GsDChAYBBc4v7Y2Ap9RD5Vs3dIhEANcnolf27QwrG9RMnnvzk8pCvp1o6zSU4
VuOE1W66/O1/7e2rVxyrnTcP7UgK43zNIXu7+tiAqWsO92uSnuMoGPGpeaUm1jym
hjWKtkAwDFSqvHY+XL5qDVBEjeUe+WHkYUg40cAXjusAqgm2hZt29c2wnVrxW25W
P0meNlzHGFdA2AC5z54iRiqj57dTfBTkHoBczQxcyw6hhzxZQ4e5I5zOKjXXEhZN
r0tA3YC14CTabKRus/JmZieyZzRgEy2oti64tmLYTqSlAD78pRL40VNoaSYetXLw
hhNsXCHgWaY6d5bLOc/aIQMAV5oLvZQKvuXAF1IDmhPA+bZbpWipp0zagf1P1H3s
UzsMdn2KM0ejzgotbtNlj5TcrVwpmvE3ktvUAuA+hi3FkVx1US+2Gsp5x4YOzJ7u
P1WPk6ShF0JgnJH2ILdj6kttTWwFzH17keSFICWDfH/+kM+k7Y1v3EXMQXE7y0T9
MjvJskz6d/nv+sQhY04xt64xFMGTnZjlJMzfQNi7zWFLTZnDD0lPowq7l3YiPoTT
t5Xky83lu0KZsZBo0WlWaDG00gLVdtRgVbcuSWxpi5BdLb1kRab66JptWjxwXQID
AQABo4HrMIHoMDoGA1UdHwQzMDEwL6AtoCuGKWh0dHBzOi8vcmwtY2Etc2VydmVy
LnJlZGlzbGFicy5jb20vdjEvY3JsMEYGCCsGAQUFBwEBBDowODA2BggrBgEFBQcw
AYYqaHR0cHM6Ly9ybC1jYS1zZXJ2ZXIucmVkaXNsYWJzLmNvbS92MS9vY3NwMB0G
A1UdDgQWBBQHar5OKvQUpP2qWt6mckzToeCOHDAfBgNVHSMEGDAWgBQi42wH6hM4
L2sujEvLM0/u8lRXTzASBgNVHRMBAf8ECDAGAQH/AgEAMA4GA1UdDwEB/wQEAwIB
hjANBgkqhkiG9w0BAQsFAAOCAgEAirEn/iTsAKyhd+pu2W3Z5NjCko4NPU0EYUbr
AP7+POK2rzjIrJO3nFYQ/LLuC7KCXG+2qwan2SAOGmqWst13Y+WHp44Kae0kaChW
vcYLXXSoGQGC8QuFSNUdaeg3RbMDYFT04dOkqufeWVccoHVxyTSg9eD8LZuHn5jw
7QDLiEECBmIJHk5Eeo2TAZrx4Yx6ufSUX5HeVjlAzqwtAqdt99uCJ/EL8bgpWbe+
XoSpvUv0SEC1I1dCAhCKAvRlIOA6VBcmzg5Am12KzkqTul12/VEFIgzqu0Zy2Jbc
AUPrYVu/+tOGXQaijy7YgwH8P8n3s7ZeUa1VABJHcxrxYduDDJBLZi+MjheUDaZ1
jQRHYevI2tlqeSBqdPKG4zBY5lS0GiAlmuze5oENt0P3XboHoZPHiqcK3VECgTVh
/BkJcuudETSJcZDmQ8YfoKfBzRQNg2sv/hwvUv73Ss51Sco8GEt2lD8uEdib1Q6z
zDT5lXJowSzOD5ZA9OGDjnSRL+2riNtKWKEqvtEG3VBJoBzu9GoxbAc7wIZLxmli
iF5a/Zf5X+UXD3s4TMmy6C4QZJpAA2egsSQCnraWO2ULhh7iXMysSkF/nzVfZn43
iqpaB8++9a37hWq14ZmOv0TJIDz//b2+KC4VFXWQ5W5QC6whsjT+OlG4p5ZYG0jo
616pxqo=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIFujCCA6KgAwIBAgIJAJ1aTT1lu2ScMA0GCSqGSIb3DQEBCwUAMGoxCzAJBgNV
BAYTAlVTMQswCQYDVQQIDAJDQTELMAkGA1UEBwwCQ0ExEjAQBgNVBAoMCVJlZGlz
TGFiczEtMCsGA1UEAwwkUmVkaXNMYWJzIFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9y
aXR5MB4XDTE4MDIyNTE1MjA0MloXDTM4MDIyMDE1MjA0MlowajELMAkGA1UEBhMC
VVMxCzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJz
MS0wKwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkw
ggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDLEjXy7YrbN5Waau5cd6g1
G5C2tMmeTpZ0duFAPxNU4oE3RHS5gGiok346fUXuUxbZ6QkuzeN2/2Z+RmRcJhQY
Dm0ZgdG4x59An1TJfnzKKoWj8ISmoHS/TGNBdFzXV7FYNLBuqZouqePI6ReC6Qhl
pp45huV32Q3a6IDrrvx7Wo5ZczEQeFNbCeCOQYNDdTmCyEkHqc2AGo8eoIlSTutT
ULOC7R5gzJVTS0e1hesQ7jmqHjbO+VQS1NAL4/5K6cuTEqUl+XhVhPdLWBXJQ5ag
54qhX4v+ojLzeU1R/Vc6NjMvVtptWY6JihpgplprN0Yh2556ewcXMeturcKgXfGJ
xeYzsjzXerEjrVocX5V8BNrg64NlifzTMKNOOv4fVZszq1SIHR8F9ROrqiOdh8iC
JpUbLpXH9hWCSEO6VRMB2xJoKu3cgl63kF30s77x7wLFMEHiwsQRKxooE1UhgS9K
2sO4TlQ1eWUvFvHSTVDQDlGQ6zu4qjbOpb3Q8bQwoK+ai2alkXVR4Ltxe9QlgYK3
StsnPhruzZGA0wbXdpw0bnM+YdlEm5ffSTpNIfgHeaa7Dtb801FtA71ZlH7A6TaI
SIQuUST9EKmv7xrJyx0W1pGoPOLw5T029aTjnICSLdtV9bLwysrLhIYG5bnPq78B
cS+jZHFGzD7PUVGQD01nOQIDAQABo2MwYTAdBgNVHQ4EFgQUIuNsB+oTOC9rLoxL
yzNP7vJUV08wHwYDVR0jBBgwFoAUIuNsB+oTOC9rLoxLyzNP7vJUV08wDwYDVR0T
AQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQADggIBAHfg
z5pMNUAKdMzK1aS1EDdK9yKz4qicILz5czSLj1mC7HKDRy8cVADUxEICis++CsCu
rYOvyCVergHQLREcxPq4rc5Nq1uj6J6649NEeh4WazOOjL4ZfQ1jVznMbGy+fJm3
3Hoelv6jWRG9iqeJZja7/1s6YC6bWymI/OY1e4wUKeNHAo+Vger7MlHV+RuabaX+
hSJ8bJAM59NCM7AgMTQpJCncrcdLeceYniGy5Q/qt2b5mJkQVkIdy4TPGGB+AXDJ
D0q3I/JDRkDUFNFdeW0js7fHdsvCR7O3tJy5zIgEV/o/BCkmJVtuwPYOrw/yOlKj
TY/U7ATAx9VFF6/vYEOMYSmrZlFX+98L6nJtwDqfLB5VTltqZ4H/KBxGE3IRSt9l
FXy40U+LnXzhhW+7VBAvyYX8GEXhHkKU8Gqk1xitrqfBXY74xKgyUSTolFSfFVgj
mcM/X4K45bka+qpkj7Kfv/8D4j6aZekwhN2ly6hhC1SmQ8qjMjpG/mrWOSSHZFmf
ybu9iD2AYHeIOkshIl6xYIa++Q/00/vs46IzAbQyriOi0XxlSMMVtPx0Q3isp+ji
n8Mq9eOuxYOEQ4of8twUkUDd528iwGtEdwf0Q01UyT84S62N8AySl1ZBKXJz6W4F
UhWfa/HQYOAPDdEjNgnVwLI23b8t0TozyCWw7q8h
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIEjzCCA3egAwIBAgIQe55B/ALCKJDZtdNT8kD6hTANBgkqhkiG9w0BAQsFADBM
MSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEGA1UEChMKR2xv
YmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0yMjAxMjYxMjAwMDBaFw0y
NTAxMjYwMDAwMDBaMFgxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9iYWxTaWdu
IG52LXNhMS4wLAYDVQQDEyVHbG9iYWxTaWduIEF0bGFzIFIzIE9WIFRMUyBDQSAy
MDIyIFEyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmGmg1LW9b7Lf
8zDD83yBDTEkt+FOxKJZqF4veWc5KZsQj9HfnUS2e5nj/E+JImlGPsQuoiosLuXD
BVBNAMcUFa11buFMGMeEMwiTmCXoXRrXQmH0qjpOfKgYc5gHG3BsRGaRrf7VR4eg
ofNMG9wUBw4/g/TT7+bQJdA4NfE7Y4d5gEryZiBGB/swaX6Jp/8MF4TgUmOWmalK
dZCKyb4sPGQFRTtElk67F7vU+wdGcrcOx1tDcIB0ncjLPMnaFicagl+daWGsKqTh
counQb6QJtYHa91KvCfKWocMxQ7OIbB5UARLPmC4CJ1/f8YFm35ebfzAeULYdGXu
jE9CLor0OwIDAQABo4IBXzCCAVswDgYDVR0PAQH/BAQDAgGGMB0GA1UdJQQWMBQG
CCsGAQUFBwMBBggrBgEFBQcDAjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQW
BBSH5Zq7a7B/t95GfJWkDBpA8HHqdjAfBgNVHSMEGDAWgBSP8Et/qC5FJK5NUPpj
move4t0bvDB7BggrBgEFBQcBAQRvMG0wLgYIKwYBBQUHMAGGImh0dHA6Ly9vY3Nw
Mi5nbG9iYWxzaWduLmNvbS9yb290cjMwOwYIKwYBBQUHMAKGL2h0dHA6Ly9zZWN1
cmUuZ2xvYmFsc2lnbi5jb20vY2FjZXJ0L3Jvb3QtcjMuY3J0MDYGA1UdHwQvMC0w
K6ApoCeGJWh0dHA6Ly9jcmwuZ2xvYmFsc2lnbi5jb20vcm9vdC1yMy5jcmwwIQYD
VR0gBBowGDAIBgZngQwBAgIwDAYKKwYBBAGgMgoBAjANBgkqhkiG9w0BAQsFAAOC
AQEAKRic9/f+nmhQU/wz04APZLjgG5OgsuUOyUEZjKVhNGDwxGTvKhyXGGAMW2B/
3bRi+aElpXwoxu3pL6fkElbX3B0BeS5LoDtxkyiVEBMZ8m+sXbocwlPyxrPbX6mY
0rVIvnuUeBH8X0L5IwfpNVvKnBIilTbcebfHyXkPezGwz7E1yhUULjJFm2bt0SdX
y+4X/WeiiYIv+fTVgZZgl+/2MKIsu/qdBJc3f3TvJ8nz+Eax1zgZmww+RSQWeOj3
15Iw6Z5FX+NwzY/Ab+9PosR5UosSeq+9HhtaxZttXG1nVh+avYPGYddWmiMT90J5
ZgKnO/Fx2hBgTxhOTMYaD312kg==
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4G
A1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjMxEzARBgNVBAoTCkdsb2JhbFNp
Z24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDkwMzE4MTAwMDAwWhcNMjkwMzE4
MTAwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEG
A1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjCCASIwDQYJKoZI
hvcNAQEBBQADggEPADCCAQoCggEBAMwldpB5BngiFvXAg7aEyiie/QV2EcWtiHL8
RgJDx7KKnQRfJMsuS+FggkbhUqsMgUdwbN1k0ev1LKMPgj0MK66X17YUhhB5uzsT
gHeMCOFJ0mpiLx9e+pZo34knlTifBtc+ycsmWQ1z3rDI6SYOgxXG71uL0gRgykmm
KPZpO/bLyCiR5Z2KYVc3rHQU3HTgOu5yLy6c+9C7v/U9AOEGM+iCK65TpjoWc4zd
QQ4gOsC0p6Hpsk+QLjJg6VfLuQSSaGjlOCZgdbKfd/+RFO+uIEn8rUAVSNECMWEZ
XriX7613t2Saer9fwRPvm2L7DWzgVGkWqQPabumDk3F2xmmFghcCAwEAAaNCMEAw
DgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFI/wS3+o
LkUkrk1Q+mOai97i3Ru8MA0GCSqGSIb3DQEBCwUAA4IBAQBLQNvAUKr+yAzv95ZU
RUm7lgAJQayzE4aGKAczymvmdLm6AC2upArT9fHxD4q/c2dKg8dEe3jgr25sbwMp
jjM5RcOO5LlXbKr8EpbsU8Yt5CRsuZRj+9xTaGdWPoO4zzUhw8lo/s7awlOqzJCK
6fBdRoyV3XpYKBovHd7NADdBj+1EbddTKJd+82cEHhXXipa0095MJ6RMG3NzdvQX
mcIfeg7jLQitChws/zyrVQ4PkX4268NXSb7hLi18YIvDQVETI53O9zJrlAGomecs
Mx86OyXShkDOOyyGeMlhLxS67ttVb9+E7gUJTb0o2HLO02JQZR7rkpeDMdmztcpH
WD9f
-----END CERTIFICATE-----`;r.default={RedisCloudFixed:{ca:n},RedisCloudFlexible:{ca:n}}},26898,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.noop=r.defaults=r.Debug=r.zipMap=r.CONNECTION_CLOSED_ERROR_MSG=r.shuffle=r.sample=r.resolveTLSProfile=r.parseURL=r.optimizeErrorStack=r.toArg=r.convertMapToArray=r.convertObjectToArray=r.timeout=r.packObject=r.isInt=r.wrapMultiResult=r.convertBufferToString=void 0;let n=e.r(92509),i=e.r(57517);Object.defineProperty(r,"defaults",{enumerable:!0,get:function(){return i.defaults}}),Object.defineProperty(r,"noop",{enumerable:!0,get:function(){return i.noop}}),r.Debug=e.r(28181).default;let a=e.r(86961);function s(e){let t=parseFloat(e);return!isNaN(e)&&(0|t)===t}r.convertBufferToString=function e(t,r){if(t instanceof Buffer)return t.toString(r);if(Array.isArray(t)){let n=t.length,i=Array(n);for(let a=0;a<n;++a)i[a]=t[a]instanceof Buffer&&"utf8"===r?t[a].toString():e(t[a],r);return i}return t},r.wrapMultiResult=function(e){if(!e)return null;let t=[],r=e.length;for(let n=0;n<r;++n){let r=e[n];r instanceof Error?t.push([r]):t.push([null,r])}return t},r.isInt=s,r.packObject=function(e){let t={},r=e.length;for(let n=1;n<r;n+=2)t[e[n-1]]=e[n];return t},r.timeout=function(e,t){let r=null,n=function(){r&&(clearTimeout(r),r=null,e.apply(this,arguments))};return r=setTimeout(n,t,Error("timeout")),n},r.convertObjectToArray=function(e){let t=[],r=Object.keys(e);for(let n=0,i=r.length;n<i;n++)t.push(r[n],e[r[n]]);return t},r.convertMapToArray=function(e){let t=[],r=0;return e.forEach(function(e,n){t[r]=n,t[r+1]=e,r+=2}),t},r.toArg=function(e){return null==e?"":String(e)},r.optimizeErrorStack=function(e,t,r){let n,i=t.split("\n"),a="";for(n=1;n<i.length&&-1!==i[n].indexOf(r);++n);for(let e=n;e<i.length;++e)a+="\n"+i[e];if(e.stack){let t=e.stack.indexOf("\n");e.stack=e.stack.slice(0,t)+a}return e},r.parseURL=function(e){if(s(e))return{port:e};let t=(0,n.parse)(e,!0,!0);t.slashes||"/"===e[0]||(e="//"+e,t=(0,n.parse)(e,!0,!0));let r=t.query||{},a={};if(t.auth){let e=t.auth.indexOf(":");a.username=-1===e?t.auth:t.auth.slice(0,e),a.password=-1===e?"":t.auth.slice(e+1)}if(t.pathname&&("redis:"===t.protocol||"rediss:"===t.protocol?t.pathname.length>1&&(a.db=t.pathname.slice(1)):a.path=t.pathname),t.host&&(a.host=t.hostname),t.port&&(a.port=t.port),"string"==typeof r.family){let e=Number.parseInt(r.family,10);Number.isNaN(e)||(a.family=e)}return(0,i.defaults)(a,r),a},r.resolveTLSProfile=function(e){let t=null==e?void 0:e.tls;"string"==typeof t&&(t={profile:t});let r=a.default[null==t?void 0:t.profile];return r&&(t=Object.assign({},r,t),delete t.profile,e=Object.assign({},e,{tls:t})),e},r.sample=function(e,t=0){let r=e.length;return t>=r?null:e[t+Math.floor(Math.random()*(r-t))]},r.shuffle=function(e){let t=e.length;for(;t>0;){let r=Math.floor(Math.random()*t);t--,[e[t],e[r]]=[e[r],e[t]]}return e},r.CONNECTION_CLOSED_ERROR_MSG="Connection is closed.",r.zipMap=function(e,t){let r=new Map;return e.forEach((e,n)=>{r.set(e,t[n])}),r}},30846,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(12522),i=e.r(9068),a=e.r(19335),s=e.r(26898);class o{constructor(e,t=[],r={},n){if(this.name=e,this.inTransaction=!1,this.isResolved=!1,this.transformed=!1,this.replyEncoding=r.replyEncoding,this.errorStack=r.errorStack,this.args=t.flat(),this.callback=n,this.initPromise(),r.keyPrefix){let e=r.keyPrefix instanceof Buffer,t=e?r.keyPrefix:null;this._iterateKeys(n=>n instanceof Buffer?(null===t&&(t=Buffer.from(r.keyPrefix)),Buffer.concat([t,n])):e?Buffer.concat([r.keyPrefix,Buffer.from(String(n))]):r.keyPrefix+n)}r.readOnly&&(this.isReadOnly=!0)}static checkFlag(e,t){return!!this.getFlagMap()[e][t]}static setArgumentTransformer(e,t){this._transformer.argument[e]=t}static setReplyTransformer(e,t){this._transformer.reply[e]=t}static getFlagMap(){return this.flagMap||(this.flagMap=Object.keys(o.FLAGS).reduce((e,t)=>(e[t]={},o.FLAGS[t].forEach(r=>{e[t][r]=!0}),e),{})),this.flagMap}getSlot(){if(void 0===this.slot){let e=this.getKeys()[0];this.slot=null==e?null:i(e)}return this.slot}getKeys(){return this._iterateKeys()}toWritable(e){let t,r="*"+(this.args.length+1)+"\r\n$"+Buffer.byteLength(this.name)+"\r\n"+this.name+"\r\n";if(this.bufferMode){let e=new c;e.push(r);for(let t=0;t<this.args.length;++t){let r=this.args[t];r instanceof Buffer?0===r.length?e.push("$0\r\n\r\n"):(e.push("$"+r.length+"\r\n"),e.push(r),e.push("\r\n")):e.push("$"+Buffer.byteLength(r)+"\r\n"+r+"\r\n")}t=e.toBuffer()}else{t=r;for(let e=0;e<this.args.length;++e){let r=this.args[e];t+="$"+Buffer.byteLength(r)+"\r\n"+r+"\r\n"}}return t}stringifyArguments(){for(let e=0;e<this.args.length;++e){let t=this.args[e];"string"==typeof t||(t instanceof Buffer?this.bufferMode=!0:this.args[e]=(0,s.toArg)(t))}}transformReply(e){this.replyEncoding&&(e=(0,s.convertBufferToString)(e,this.replyEncoding));let t=o._transformer.reply[this.name];return t&&(e=t(e)),e}setTimeout(e){this._commandTimeoutTimer||(this._commandTimeoutTimer=setTimeout(()=>{this.isResolved||this.reject(Error("Command timed out"))},e))}initPromise(){let e=new Promise((e,t)=>{if(!this.transformed){this.transformed=!0;let e=o._transformer.argument[this.name];e&&(this.args=e(this.args)),this.stringifyArguments()}this.resolve=this._convertValue(e),this.errorStack?this.reject=e=>{t((0,s.optimizeErrorStack)(e,this.errorStack.stack,"/ROOT/node_modules/ioredis/built"))}:this.reject=t});this.promise=(0,a.default)(e,this.callback)}_iterateKeys(e=e=>e){if(void 0===this.keys&&(this.keys=[],(0,n.exists)(this.name)))for(let t of(0,n.getKeyIndexes)(this.name,this.args))this.args[t]=e(this.args[t]),this.keys.push(this.args[t]);return this.keys}_convertValue(e){return t=>{try{let r=this._commandTimeoutTimer;r&&(clearTimeout(r),delete this._commandTimeoutTimer),e(this.transformReply(t)),this.isResolved=!0}catch(e){this.reject(e)}return this.promise}}}r.default=o,o.FLAGS={VALID_IN_SUBSCRIBER_MODE:["subscribe","psubscribe","unsubscribe","punsubscribe","ssubscribe","sunsubscribe","ping","quit"],VALID_IN_MONITOR_MODE:["monitor","auth"],ENTER_SUBSCRIBER_MODE:["subscribe","psubscribe","ssubscribe"],EXIT_SUBSCRIBER_MODE:["unsubscribe","punsubscribe","sunsubscribe"],WILL_DISCONNECT:["quit"]},o._transformer={argument:{},reply:{}};let l=function(e){if(1===e.length){if(e[0]instanceof Map)return(0,s.convertMapToArray)(e[0]);if("object"==typeof e[0]&&null!==e[0])return(0,s.convertObjectToArray)(e[0])}return e},d=function(e){if(2===e.length){if(e[1]instanceof Map)return[e[0]].concat((0,s.convertMapToArray)(e[1]));if("object"==typeof e[1]&&null!==e[1])return[e[0]].concat((0,s.convertObjectToArray)(e[1]))}return e};o.setArgumentTransformer("mset",l),o.setArgumentTransformer("msetnx",l),o.setArgumentTransformer("hset",d),o.setArgumentTransformer("hmset",d),o.setReplyTransformer("hgetall",function(e){if(Array.isArray(e)){let t={};for(let r=0;r<e.length;r+=2){let n=e[r],i=e[r+1];n in t?Object.defineProperty(t,n,{value:i,configurable:!0,enumerable:!0,writable:!0}):t[n]=i}return t}return e});class c{constructor(){this.length=0,this.items=[]}push(e){this.length+=Buffer.byteLength(e),this.items.push(e)}toBuffer(){let e=Buffer.allocUnsafe(this.length),t=0;for(let r of this.items){let n=Buffer.byteLength(r);Buffer.isBuffer(r)?r.copy(e,t):e.write(r,t,n),t+=n}return e}}},17798,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(63227);class i extends n.RedisError{constructor(e,t){super(e),this.lastNodeError=t,Error.captureStackTrace(this,this.constructor)}get name(){return this.constructor.name}}r.default=i,i.defaultMessage="Failed to refresh slots cache."},12749,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(88947);class i extends n.Readable{constructor(e){super(e),this.opt=e,this._redisCursor="0",this._redisDrained=!1}_read(){if(this._redisDrained)return void this.push(null);let e=[this._redisCursor];this.opt.key&&e.unshift(this.opt.key),this.opt.match&&e.push("MATCH",this.opt.match),this.opt.type&&e.push("TYPE",this.opt.type),this.opt.count&&e.push("COUNT",String(this.opt.count)),this.opt.noValues&&e.push("NOVALUES"),this.opt.redis[this.opt.command](e,(e,t)=>{if(e)return void this.emit("error",e);this._redisCursor=t[0]instanceof Buffer?t[0].toString():t[0],"0"===this._redisCursor&&(this._redisDrained=!0),this.push(t[1])})}close(){this._redisDrained=!0}}r.default=i},33700,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.executeWithAutoPipelining=r.getFirstValueInFlattenedArray=r.shouldUseAutoPipelining=r.notAllowedAutoPipelineCommands=r.kCallbacks=r.kExec=void 0;let n=e.r(57517),i=e.r(9068),a=e.r(19335);function s(e){for(let t=0;t<e.length;t++){let r=e[t];if("string"==typeof r)return r;if(Array.isArray(r)||(0,n.isArguments)(r)){if(0===r.length)continue;return r[0]}let i=[r].flat();if(i.length>0)return i[0]}}r.kExec=Symbol("exec"),r.kCallbacks=Symbol("callbacks"),r.notAllowedAutoPipelineCommands=["auth","info","script","quit","cluster","pipeline","multi","subscribe","psubscribe","unsubscribe","unpsubscribe","select"],r.shouldUseAutoPipelining=function(e,t,n){return t&&e.options.enableAutoPipelining&&!e.isPipeline&&!r.notAllowedAutoPipelineCommands.includes(n)&&!e.options.autoPipeliningIgnoredCommands.includes(n)},r.getFirstValueInFlattenedArray=s,r.executeWithAutoPipelining=function e(t,o,l,d,c){if(t.isCluster&&!t.slots.length)return"wait"===t.status&&t.connect().catch(n.noop),(0,a.default)(new Promise(function(r,n){t.delayUntilReady(i=>{if(i)return void n(i);e(t,o,l,d,null).then(r,n)})}),c);let u=t.options.keyPrefix||"",p=t.isCluster?t.slots[i(`${u}${s(d)}`)].join(","):"main";if(!t._autoPipelines.has(p)){let e=t.pipeline();e[r.kExec]=!1,e[r.kCallbacks]=[],t._autoPipelines.set(p,e)}let h=t._autoPipelines.get(p);h[r.kExec]||(h[r.kExec]=!0,setImmediate(function e(t,n){if(t._runningAutoPipelines.has(n)||!t._autoPipelines.has(n))return;t._runningAutoPipelines.add(n);let i=t._autoPipelines.get(n);t._autoPipelines.delete(n);let a=i[r.kCallbacks];i[r.kCallbacks]=null,i.exec(function(r,i){if(t._runningAutoPipelines.delete(n),r)for(let e=0;e<a.length;e++)process.nextTick(a[e],r);else for(let e=0;e<a.length;e++)process.nextTick(a[e],...i[e]);t._autoPipelines.has(n)&&e(t,n)})},t,p));let y=new Promise(function(e,t){h[r.kCallbacks].push(function(r,n){if(r)return void t(r);e(n)}),"call"===o&&d.unshift(l),h[o](...d)});return(0,a.default)(y,c)}},40162,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(54799),i=e.r(30846),a=e.r(19335);r.default=class{constructor(e,t=null,r="",a=!1){this.lua=e,this.numberOfKeys=t,this.keyPrefix=r,this.readOnly=a,this.sha=(0,n.createHash)("sha1").update(e).digest("hex");let s=this.sha,o=new WeakSet;this.Command=class extends i.default{toWritable(t){let r=this.reject;return this.reject=e=>{-1!==e.message.indexOf("NOSCRIPT")&&o.delete(t),r.call(this,e)},o.has(t)?"eval"===this.name&&(this.name="evalsha",this.args[0]=s):(o.add(t),this.name="eval",this.args[0]=e),super.toWritable(t)}}}execute(e,t,r,n){"number"==typeof this.numberOfKeys&&t.unshift(this.numberOfKeys),this.keyPrefix&&(r.keyPrefix=this.keyPrefix),this.readOnly&&(r.readOnly=!0);let i=new this.Command("evalsha",[this.sha,...t],r);return i.promise=i.promise.catch(n=>{if(-1===n.message.indexOf("NOSCRIPT"))throw n;let i=new this.Command("evalsha",[this.sha,...t],r);return(e.isPipeline?e.redis:e).sendCommand(i)}),(0,a.default)(i.promise,n),e.sendCommand(i)}}},67061,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(12522),i=e.r(33700),a=e.r(30846),s=e.r(40162);class o{constructor(){this.options={},this.scriptsSet={},this.addedBuiltinSet=new Set}getBuiltinCommands(){return l.slice(0)}createBuiltinCommand(e){return{string:d(null,e,"utf8"),buffer:d(null,e,null)}}addBuiltinCommand(e){this.addedBuiltinSet.add(e),this[e]=d(e,e,"utf8"),this[e+"Buffer"]=d(e+"Buffer",e,null)}defineCommand(e,t){let r=new s.default(t.lua,t.numberOfKeys,this.options.keyPrefix,t.readOnly);this.scriptsSet[e]=r,this[e]=c(e,e,r,"utf8"),this[e+"Buffer"]=c(e+"Buffer",e,r,null)}sendCommand(e,t,r){throw Error('"sendCommand" is not implemented')}}let l=n.list.filter(e=>"monitor"!==e);function d(e,t,r){return void 0===r&&(r=t,t=null),function(...n){let s=t||n.shift(),o=n[n.length-1];"function"==typeof o?n.pop():o=void 0;let l={errorStack:this.options.showFriendlyErrorStack?Error():void 0,keyPrefix:this.options.keyPrefix,replyEncoding:r};return(0,i.shouldUseAutoPipelining)(this,e,s)?(0,i.executeWithAutoPipelining)(this,e,s,n,o):this.sendCommand(new a.default(s,n,l,o))}}function c(e,t,r,n){return function(...a){let s="function"==typeof a[a.length-1]?a.pop():void 0,o={replyEncoding:n};return(this.options.showFriendlyErrorStack&&(o.errorStack=Error()),(0,i.shouldUseAutoPipelining)(this,e,t))?(0,i.executeWithAutoPipelining)(this,e,t,a,s):r.execute(this,a,o,s)}}l.push("sentinel"),l.forEach(function(e){o.prototype[e]=d(e,e,"utf8"),o.prototype[e+"Buffer"]=d(e+"Buffer",e,null)}),o.prototype.call=d("call","utf8"),o.prototype.callBuffer=d("callBuffer",null),o.prototype.send_command=o.prototype.call,r.default=o},6135,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(9068),i=e.r(12522),a=e.r(19335),s=e.r(24361),o=e.r(30846),l=e.r(26898),d=e.r(67061);class c extends d.default{constructor(e){super(),this.redis=e,this.isPipeline=!0,this.replyPending=0,this._queue=[],this._result=[],this._transactions=0,this._shaToScript={},this.isCluster="Cluster"===this.redis.constructor.name||this.redis.isCluster,this.options=e.options,Object.keys(e.scriptsSet).forEach(t=>{let r=e.scriptsSet[t];this._shaToScript[r.sha]=r,this[t]=e[t],this[t+"Buffer"]=e[t+"Buffer"]}),e.addedBuiltinSet.forEach(t=>{this[t]=e[t],this[t+"Buffer"]=e[t+"Buffer"]}),this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t});let t=this;Object.defineProperty(this,"length",{get:function(){return t._queue.length}})}fillResult(e,t){if("exec"===this._queue[t].name&&Array.isArray(e[1])){let r=e[1].length;for(let n=0;n<r;n++){if(e[1][n]instanceof Error)continue;let i=this._queue[t-(r-n)];try{e[1][n]=i.transformReply(e[1][n])}catch(t){e[1][n]=t}}}if(this._result[t]=e,--this.replyPending)return;if(this.isCluster){let e,t=!0;for(let r=0;r<this._result.length;++r){let n=this._result[r][0],a=this._queue[r];if(n){if("exec"===a.name&&"EXECABORT Transaction discarded because of previous errors."===n.message)continue;if(e){if(e.name!==n.name||e.message!==n.message){t=!1;break}}else e={name:n.name,message:n.message}}else if(!a.inTransaction&&!((0,i.exists)(a.name)&&(0,i.hasFlag)(a.name,"readonly"))){t=!1;break}}if(e&&t){let t=this,r=e.message.split(" "),n=this._queue,i=!1;this._queue=[];for(let e=0;e<n.length;++e){if("ASK"===r[0]&&!i&&"asking"!==n[e].name&&(!n[e-1]||"asking"!==n[e-1].name)){let e=new o.default("asking");e.ignore=!0,this.sendCommand(e)}n[e].initPromise(),this.sendCommand(n[e]),i=n[e].inTransaction}let a=!0;void 0===this.leftRedirections&&(this.leftRedirections={});let s=function(){t.exec()},l=this.redis;if(l.handleError(e,this.leftRedirections,{moved:function(e,n){t.preferKey=n,l.slots[r[1]]=[n],l._groupsBySlot[r[1]]=l._groupsIds[l.slots[r[1]].join(";")],l.refreshSlotsCache(),t.exec()},ask:function(e,r){t.preferKey=r,t.exec()},tryagain:s,clusterDown:s,connectionClosed:s,maxRedirections:()=>{a=!1},defaults:()=>{a=!1}}),a)return}}let r=0;for(let e=0;e<this._queue.length-r;++e)this._queue[e+r].ignore&&(r+=1),this._result[e]=this._result[e+r];this.resolve(this._result.slice(0,this._result.length-r))}sendCommand(e){this._transactions>0&&(e.inTransaction=!0);let t=this._queue.length;return e.pipelineIndex=t,e.promise.then(e=>{this.fillResult([null,e],t)}).catch(e=>{this.fillResult([e],t)}),this._queue.push(e),this}addBatch(e){let t,r,n;for(let i=0;i<e.length;++i)r=(t=e[i])[0],n=t.slice(1),this[r].apply(this,n);return this}}r.default=c;let u=c.prototype.multi;c.prototype.multi=function(){return this._transactions+=1,u.apply(this,arguments)};let p=c.prototype.execBuffer;c.prototype.execBuffer=(0,s.deprecate)(function(){return this._transactions>0&&(this._transactions-=1),p.apply(this,arguments)},"Pipeline#execBuffer: Use Pipeline#exec instead"),c.prototype.exec=function(e){let t;if(this.isCluster&&!this.redis.slots.length)return"wait"===this.redis.status&&this.redis.connect().catch(l.noop),e&&!this.nodeifiedPromise&&(this.nodeifiedPromise=!0,(0,a.default)(this.promise,e)),this.redis.delayUntilReady(t=>{if(t)return void this.reject(t);this.exec(e)}),this.promise;if(this._transactions>0)return this._transactions-=1,p.apply(this,arguments);if(this.nodeifiedPromise||(this.nodeifiedPromise=!0,(0,a.default)(this.promise,e)),this._queue.length||this.resolve([]),this.isCluster){let e=[];for(let t=0;t<this._queue.length;t++){let r=this._queue[t].getKeys();if(r.length&&e.push(r[0]),r.length&&0>n.generateMulti(r))return this.reject(Error("All the keys in a pipeline command should belong to the same slot")),this.promise}if(e.length){if((t=function(e,t){let r=n(t[0]),i=e._groupsBySlot[r];for(let r=1;r<t.length;r++)if(e._groupsBySlot[n(t[r])]!==i)return -1;return r}(this.redis,e))<0)return this.reject(Error("All keys in the pipeline should belong to the same slots allocation group")),this.promise}else t=16384*Math.random()|0}let r=this;return function(){let e,n,i=r.replyPending=r._queue.length;r.isCluster&&(e={slot:t,redis:r.redis.connectionPool.nodes.all[r.preferKey]});let a="",s={isPipeline:!0,destination:r.isCluster?e:{redis:r.redis},write(e){"string"!=typeof e?(n||(n=[]),a&&(n.push(Buffer.from(a,"utf8")),a=""),n.push(e)):a+=e,--i||(n?(a&&n.push(Buffer.from(a,"utf8")),s.destination.redis.stream.write(Buffer.concat(n))):s.destination.redis.stream.write(a),i=r._queue.length,a="",n=void 0)}};for(let t=0;t<r._queue.length;++t)r.redis.sendCommand(r._queue[t],s,e);r.promise}(),this.promise}},3422,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.addTransactionSupport=void 0;let n=e.r(26898),i=e.r(19335),a=e.r(6135);r.addTransactionSupport=function(e){e.pipeline=function(e){let t=new a.default(this);return Array.isArray(e)&&t.addBatch(e),t};let{multi:t}=e;e.multi=function(e,r){if(void 0!==r||Array.isArray(e)||(r=e,e=null),r&&!1===r.pipeline)return t.call(this);let s=new a.default(this);s.multi(),Array.isArray(e)&&s.addBatch(e);let o=s.exec;s.exec=function(e){if(this.isCluster&&!this.redis.slots.length)return"wait"===this.redis.status&&this.redis.connect().catch(n.noop),(0,i.default)(new Promise((e,t)=>{this.redis.delayUntilReady(r=>{if(r)return void t(r);this.exec(s).then(e,t)})}),e);if(this._transactions>0&&o.call(s),this.nodeifiedPromise)return o.call(s);let t=o.call(s);return(0,i.default)(t.then(function(e){let t=e[e.length-1];if(void 0===t)throw Error("Pipeline cannot be used to send any commands when the `exec()` has been called on it.");if(t[0]){t[0].previousErrors=[];for(let r=0;r<e.length-1;++r)e[r][0]&&t[0].previousErrors.push(e[r][0]);throw t[0]}return(0,n.wrapMultiResult)(t[1])}),e)};let{execBuffer:l}=s;return s.execBuffer=function(e){return this._transactions>0&&l.call(s),s.exec(e)},s};let{exec:r}=e;e.exec=function(e){return(0,i.default)(r.call(this).then(function(e){return Array.isArray(e)&&(e=(0,n.wrapMultiResult)(e)),e}),e)}}},57674,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){Object.getOwnPropertyNames(t.prototype).forEach(r=>{Object.defineProperty(e.prototype,r,Object.getOwnPropertyDescriptor(t.prototype,r))})}},23086,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.DEFAULT_CLUSTER_OPTIONS=void 0;let n=e.r(79594);r.DEFAULT_CLUSTER_OPTIONS={clusterRetryStrategy:e=>Math.min(100+2*e,2e3),enableOfflineQueue:!0,enableReadyCheck:!0,scaleReads:"master",maxRedirections:16,retryDelayOnMoved:0,retryDelayOnFailover:100,retryDelayOnClusterDown:100,retryDelayOnTryAgain:100,slotsRefreshTimeout:1e3,useSRVRecords:!1,resolveSrv:n.resolveSrv,dnsLookup:n.lookup,enableAutoPipelining:!1,autoPipeliningIgnoredCommands:[],shardedSubscribers:!1}},78695,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getConnectionName=r.weightSrvRecords=r.groupSrvRecords=r.getUniqueHostnamesFromOptions=r.normalizeNodeOptions=r.nodeKeyToRedisOptions=r.getNodeKey=void 0;let n=e.r(26898),i=e.r(4446);r.getNodeKey=function(e){return e.port=e.port||6379,e.host=e.host||"127.0.0.1",e.host+":"+e.port},r.nodeKeyToRedisOptions=function(e){let t=e.lastIndexOf(":");if(-1===t)throw Error(`Invalid node key ${e}`);return{host:e.slice(0,t),port:Number(e.slice(t+1))}},r.normalizeNodeOptions=function(e){return e.map(e=>{let t={};if("object"==typeof e)Object.assign(t,e);else if("string"==typeof e)Object.assign(t,(0,n.parseURL)(e));else if("number"==typeof e)t.port=e;else throw Error("Invalid argument "+e);return"string"==typeof t.port&&(t.port=parseInt(t.port,10)),delete t.db,t.port||(t.port=6379),t.host||(t.host="127.0.0.1"),(0,n.resolveTLSProfile)(t)})},r.getUniqueHostnamesFromOptions=function(e){let t={};return e.forEach(e=>{t[e.host]=!0}),Object.keys(t).filter(e=>!(0,i.isIP)(e))},r.groupSrvRecords=function(e){let t={};for(let r of e)t.hasOwnProperty(r.priority)?(t[r.priority].totalWeight+=r.weight,t[r.priority].records.push(r)):t[r.priority]={totalWeight:r.weight,records:[r]};return t},r.weightSrvRecords=function(e){if(1===e.records.length)return e.totalWeight=0,e.records.shift();let t=Math.floor(Math.random()*(e.totalWeight+e.records.length)),r=0;for(let[n,i]of e.records.entries())if((r+=1+i.weight)>t)return e.totalWeight-=i.weight,e.records.splice(n,1),i},r.getConnectionName=function(e,t){let r=`ioredis-cluster(${e})`;return t?`${r}:${t}`:r}},55925,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(78695),i=e.r(26898),a=e.r(66735),s=(0,i.Debug)("cluster:subscriber");r.default=class{constructor(e,t,r=!1){this.connectionPool=e,this.emitter=t,this.isSharded=r,this.started=!1,this.subscriber=null,this.slotRange=[],this.onSubscriberEnd=()=>{if(!this.started)return void s("subscriber has disconnected, but ClusterSubscriber is not started, so not reconnecting.");s("subscriber has disconnected, selecting a new one..."),this.selectSubscriber()},this.connectionPool.on("-node",(e,t)=>{this.started&&this.subscriber&&(0,n.getNodeKey)(this.subscriber.options)===t&&(s("subscriber has left, selecting a new one..."),this.selectSubscriber())}),this.connectionPool.on("+node",()=>{this.started&&!this.subscriber&&(s("a new node is discovered and there is no subscriber, selecting a new one..."),this.selectSubscriber())})}getInstance(){return this.subscriber}associateSlotRange(e){return this.isSharded&&(this.slotRange=e),this.slotRange}start(){this.started=!0,this.selectSubscriber(),s("started")}stop(){this.started=!1,this.subscriber&&(this.subscriber.disconnect(),this.subscriber=null)}isStarted(){return this.started}selectSubscriber(){let e=this.lastActiveSubscriber;e&&(e.off("end",this.onSubscriberEnd),e.disconnect()),this.subscriber&&(this.subscriber.off("end",this.onSubscriberEnd),this.subscriber.disconnect());let t=(0,i.sample)(this.connectionPool.getNodes());if(!t){s("selecting subscriber failed since there is no node discovered in the cluster yet"),this.subscriber=null;return}let{options:r}=t;s("selected a subscriber %s:%s",r.host,r.port);let o="subscriber";this.isSharded&&(o="ssubscriber"),this.subscriber=new a.default({port:r.port,host:r.host,username:r.username,password:r.password,enableReadyCheck:!0,connectionName:(0,n.getConnectionName)(o,r.connectionName),lazyConnect:!0,tls:r.tls,retryStrategy:null}),this.subscriber.on("error",i.noop),this.subscriber.once("end",this.onSubscriberEnd);let l={subscribe:[],psubscribe:[],ssubscribe:[]};if(e){let t=e.condition||e.prevCondition;t&&t.subscriber&&(l.subscribe=t.subscriber.channels("subscribe"),l.psubscribe=t.subscriber.channels("psubscribe"),l.ssubscribe=t.subscriber.channels("ssubscribe"))}if(l.subscribe.length||l.psubscribe.length||l.ssubscribe.length){let e=0;for(let t of["subscribe","psubscribe","ssubscribe"]){let r=l[t];r.length&&(e+=1,s("%s %d channels",t,r.length),this.subscriber[t](r).then(()=>{--e||(this.lastActiveSubscriber=this.subscriber)}).catch(()=>{s("failed to %s %d channels",t,r.length)}))}}else this.lastActiveSubscriber=this.subscriber;for(let e of["message","messageBuffer"])this.subscriber.on(e,(t,r)=>{this.emitter.emit(e,t,r)});for(let e of["pmessage","pmessageBuffer"])this.subscriber.on(e,(t,r,n)=>{this.emitter.emit(e,t,r,n)});if(!0==this.isSharded)for(let e of["smessage","smessageBuffer"])this.subscriber.on(e,(t,r)=>{this.emitter.emit(e,t,r)})}}},77825,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(27699),i=e.r(26898),a=e.r(78695),s=e.r(66735),o=(0,i.Debug)("cluster:connectionPool");class l extends n.EventEmitter{constructor(e){super(),this.redisOptions=e,this.nodes={all:{},master:{},slave:{}},this.specifiedOptions={}}getNodes(e="all"){let t=this.nodes[e];return Object.keys(t).map(e=>t[e])}getInstanceByKey(e){return this.nodes.all[e]}getSampleInstance(e){let t=Object.keys(this.nodes[e]),r=(0,i.sample)(t);return this.nodes[e][r]}addMasterNode(e){let t=(0,a.getNodeKey)(e.options),r=this.createRedisFromOptions(e,e.options.readOnly);return!e.options.readOnly&&(this.nodes.all[t]=r,this.nodes.master[t]=r,!0)}createRedisFromOptions(e,t){return new s.default((0,i.defaults)({retryStrategy:null,enableOfflineQueue:!0,readOnly:t},e,this.redisOptions,{lazyConnect:!0}))}findOrCreate(e,t=!1){let r,n=(0,a.getNodeKey)(e);return t=!!t,this.specifiedOptions[n]?Object.assign(e,this.specifiedOptions[n]):this.specifiedOptions[n]=e,this.nodes.all[n]?(r=this.nodes.all[n]).options.readOnly!==t&&(r.options.readOnly=t,o("Change role of %s to %s",n,t?"slave":"master"),r[t?"readonly":"readwrite"]().catch(i.noop),t?(delete this.nodes.master[n],this.nodes.slave[n]=r):(delete this.nodes.slave[n],this.nodes.master[n]=r)):(o("Connecting to %s as %s",n,t?"slave":"master"),r=this.createRedisFromOptions(e,t),this.nodes.all[n]=r,this.nodes[t?"slave":"master"][n]=r,r.once("end",()=>{this.removeNode(n),this.emit("-node",r,n),Object.keys(this.nodes.all).length||this.emit("drain")}),this.emit("+node",r,n),r.on("error",function(e){this.emit("nodeError",e,n)})),r}reset(e){o("Reset with %O",e);let t={};e.forEach(e=>{let r=(0,a.getNodeKey)(e);e.readOnly&&t[r]||(t[r]=e)}),Object.keys(this.nodes.all).forEach(e=>{t[e]||(o("Disconnect %s because the node does not hold any slot",e),this.nodes.all[e].disconnect(),this.removeNode(e))}),Object.keys(t).forEach(e=>{let r=t[e];this.findOrCreate(r,r.readOnly)})}removeNode(e){let{nodes:t}=this;t.all[e]&&(o("Remove %s from the pool",e),delete t.all[e]),delete t.master[e],delete t.slave[e]}}r.default=l},89977,(e,t,r)=>{"use strict";function n(e,t){var t=t||{};this._capacity=t.capacity,this._head=0,this._tail=0,Array.isArray(e)?this._fromArray(e):(this._capacityMask=3,this._list=[,,,,])}n.prototype.peekAt=function(e){var t=e;if(t===(0|t)){var r=this.size();if(!(t>=r)&&!(t<-r))return t<0&&(t+=r),t=this._head+t&this._capacityMask,this._list[t]}},n.prototype.get=function(e){return this.peekAt(e)},n.prototype.peek=function(){if(this._head!==this._tail)return this._list[this._head]},n.prototype.peekFront=function(){return this.peek()},n.prototype.peekBack=function(){return this.peekAt(-1)},Object.defineProperty(n.prototype,"length",{get:function(){return this.size()}}),n.prototype.size=function(){return this._head===this._tail?0:this._head<this._tail?this._tail-this._head:this._capacityMask+1-(this._head-this._tail)},n.prototype.unshift=function(e){if(0==arguments.length)return this.size();var t=this._list.length;return(this._head=this._head-1+t&this._capacityMask,this._list[this._head]=e,this._tail===this._head&&this._growArray(),this._capacity&&this.size()>this._capacity&&this.pop(),this._head<this._tail)?this._tail-this._head:this._capacityMask+1-(this._head-this._tail)},n.prototype.shift=function(){var e=this._head;if(e!==this._tail){var t=this._list[e];return this._list[e]=void 0,this._head=e+1&this._capacityMask,e<2&&this._tail>1e4&&this._tail<=this._list.length>>>2&&this._shrinkArray(),t}},n.prototype.push=function(e){if(0==arguments.length)return this.size();var t=this._tail;return(this._list[t]=e,this._tail=t+1&this._capacityMask,this._tail===this._head&&this._growArray(),this._capacity&&this.size()>this._capacity&&this.shift(),this._head<this._tail)?this._tail-this._head:this._capacityMask+1-(this._head-this._tail)},n.prototype.pop=function(){var e=this._tail;if(e!==this._head){var t=this._list.length;this._tail=e-1+t&this._capacityMask;var r=this._list[this._tail];return this._list[this._tail]=void 0,this._head<2&&e>1e4&&e<=t>>>2&&this._shrinkArray(),r}},n.prototype.removeOne=function(e){var t,r=e;if(r===(0|r)&&this._head!==this._tail){var n=this.size(),i=this._list.length;if(!(r>=n)&&!(r<-n)){r<0&&(r+=n),r=this._head+r&this._capacityMask;var a=this._list[r];if(e<n/2){for(t=e;t>0;t--)this._list[r]=this._list[r=r-1+i&this._capacityMask];this._list[r]=void 0,this._head=this._head+1+i&this._capacityMask}else{for(t=n-1-e;t>0;t--)this._list[r]=this._list[r=r+1+i&this._capacityMask];this._list[r]=void 0,this._tail=this._tail-1+i&this._capacityMask}return a}}},n.prototype.remove=function(e,t){var r,n,i=e,a=t;if(i===(0|i)&&this._head!==this._tail){var s=this.size(),o=this._list.length;if(!(i>=s)&&!(i<-s)&&!(t<1)){if(i<0&&(i+=s),1===t||!t)return(r=[,])[0]=this.removeOne(i),r;if(0===i&&i+t>=s)return r=this.toArray(),this.clear(),r;for(i+t>s&&(t=s-i),r=Array(t),n=0;n<t;n++)r[n]=this._list[this._head+i+n&this._capacityMask];if(i=this._head+i&this._capacityMask,e+t===s){for(this._tail=this._tail-t+o&this._capacityMask,n=t;n>0;n--)this._list[i=i+1+o&this._capacityMask]=void 0;return r}if(0===e){for(this._head=this._head+t+o&this._capacityMask,n=t-1;n>0;n--)this._list[i=i+1+o&this._capacityMask]=void 0;return r}if(i<s/2){for(this._head=this._head+e+t+o&this._capacityMask,n=e;n>0;n--)this.unshift(this._list[i=i-1+o&this._capacityMask]);for(i=this._head-1+o&this._capacityMask;a>0;)this._list[i=i-1+o&this._capacityMask]=void 0,a--;e<0&&(this._tail=i)}else{for(this._tail=i,i=i+t+o&this._capacityMask,n=s-(t+e);n>0;n--)this.push(this._list[i++]);for(i=this._tail;a>0;)this._list[i=i+1+o&this._capacityMask]=void 0,a--}return this._head<2&&this._tail>1e4&&this._tail<=o>>>2&&this._shrinkArray(),r}}},n.prototype.splice=function(e,t){var r=e;if(r===(0|r)){var n=this.size();if(r<0&&(r+=n),!(r>n))if(!(arguments.length>2))return this.remove(r,t);else{var i,a,s,o=arguments.length,l=this._list.length,d=2;if(!n||r<n/2){for(i=0,a=Array(r);i<r;i++)a[i]=this._list[this._head+i&this._capacityMask];for(0===t?(s=[],r>0&&(this._head=this._head+r+l&this._capacityMask)):(s=this.remove(r,t),this._head=this._head+r+l&this._capacityMask);o>d;)this.unshift(arguments[--o]);for(i=r;i>0;i--)this.unshift(a[i-1])}else{var c=(a=Array(n-(r+t))).length;for(i=0;i<c;i++)a[i]=this._list[this._head+r+t+i&this._capacityMask];for(0===t?(s=[],r!=n&&(this._tail=this._head+r+l&this._capacityMask)):(s=this.remove(r,t),this._tail=this._tail-c+l&this._capacityMask);d<o;)this.push(arguments[d++]);for(i=0;i<c;i++)this.push(a[i])}return s}}},n.prototype.clear=function(){this._list=Array(this._list.length),this._head=0,this._tail=0},n.prototype.isEmpty=function(){return this._head===this._tail},n.prototype.toArray=function(){return this._copyArray(!1)},n.prototype._fromArray=function(e){var t=e.length,r=this._nextPowerOf2(t);this._list=Array(r),this._capacityMask=r-1,this._tail=t;for(var n=0;n<t;n++)this._list[n]=e[n]},n.prototype._copyArray=function(e,t){var r,n=this._list,i=n.length,a=this.length;if((t|=a)==a&&this._head<this._tail)return this._list.slice(this._head,this._tail);var s=Array(t),o=0;if(e||this._head>this._tail){for(r=this._head;r<i;r++)s[o++]=n[r];for(r=0;r<this._tail;r++)s[o++]=n[r]}else for(r=this._head;r<this._tail;r++)s[o++]=n[r];return s},n.prototype._growArray=function(){if(0!=this._head){var e=this._copyArray(!0,this._list.length<<1);this._tail=this._list.length,this._head=0,this._list=e}else this._tail=this._list.length,this._list.length<<=1;this._capacityMask=this._capacityMask<<1|1},n.prototype._shrinkArray=function(){this._list.length>>>=1,this._capacityMask>>>=1},n.prototype._nextPowerOf2=function(e){return Math.max(1<<Math.log(e)/Math.log(2)+1,4)},t.exports=n},66392,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(26898),i=e.r(89977),a=(0,n.Debug)("delayqueue");r.default=class{constructor(){this.queues={},this.timeouts={}}push(e,t,r){let n=r.callback||process.nextTick;this.queues[e]||(this.queues[e]=new i),this.queues[e].push(t),this.timeouts[e]||(this.timeouts[e]=setTimeout(()=>{n(()=>{this.timeouts[e]=null,this.execute(e)})},r.timeout))}execute(e){let t=this.queues[e];if(!t)return;let{length:r}=t;if(r)for(a("send %d commands in %s queue",r,e),this.queues[e]=null;t.length>0;)t.shift()()}}},58432,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(26898),i=e.r(55925),a=e.r(77825),s=e.r(78695),o=e.r(9068),l=(0,n.Debug)("cluster:subscriberGroup");r.default=class{constructor(e){this.cluster=e,this.shardedSubscribers=new Map,this.clusterSlots=[],this.subscriberToSlotsIndex=new Map,this.channels=new Map,e.on("+node",e=>{this._addSubscriber(e)}),e.on("-node",e=>{this._removeSubscriber(e)}),e.on("refresh",()=>{this._refreshSlots(e)})}getResponsibleSubscriber(e){let t=this.clusterSlots[e][0];return this.shardedSubscribers.get(t)}addChannels(e){let t=o(e[0]);e.forEach(e=>{if(o(e)!=t)return -1});let r=this.channels.get(t);return r?this.channels.set(t,r.concat(e)):this.channels.set(t,e),[...this.channels.values()].flatMap(e=>e).length}removeChannels(e){let t=o(e[0]);e.forEach(e=>{if(o(e)!=t)return -1});let r=this.channels.get(t);if(r){let n=r.filter(t=>!e.includes(t));this.channels.set(t,n)}return[...this.channels.values()].flatMap(e=>e).length}stop(){for(let e of this.shardedSubscribers.values())e.stop()}start(){for(let e of this.shardedSubscribers.values())e.isStarted()||e.start()}_addSubscriber(e){let t=new a.default(e.options);if(t.addMasterNode(e)){let r=new i.default(t,this.cluster,!0),n=(0,s.getNodeKey)(e.options);return this.shardedSubscribers.set(n,r),r.start(),this._resubscribe(),this.cluster.emit("+subscriber"),r}return null}_removeSubscriber(e){let t=(0,s.getNodeKey)(e.options),r=this.shardedSubscribers.get(t);return r&&(r.stop(),this.shardedSubscribers.delete(t),this._resubscribe(),this.cluster.emit("-subscriber")),this.shardedSubscribers}_refreshSlots(e){if(this._slotsAreEqual(e.slots))l("Nothing to refresh because the new cluster map is equal to the previous one.");else{l("Refreshing the slots of the subscriber group."),this.subscriberToSlotsIndex=new Map;for(let t=0;t<e.slots.length;t++){let r=e.slots[t][0];this.subscriberToSlotsIndex.has(r)||this.subscriberToSlotsIndex.set(r,[]),this.subscriberToSlotsIndex.get(r).push(Number(t))}return this._resubscribe(),this.clusterSlots=JSON.parse(JSON.stringify(e.slots)),this.cluster.emit("subscribersReady"),!0}return!1}_resubscribe(){this.shardedSubscribers&&this.shardedSubscribers.forEach((e,t)=>{let r=this.subscriberToSlotsIndex.get(t);r&&(e.associateSlotRange(r),r.forEach(t=>{let r=e.getInstance(),n=this.channels.get(t);n&&n.length>0&&r&&(r.ssubscribe(n),r.on("ready",()=>{r.ssubscribe(n)}))}))})}_slotsAreEqual(e){return void 0!==this.clusterSlots&&JSON.stringify(this.clusterSlots)===JSON.stringify(e)}}},83252,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(12522),i=e.r(27699),a=e.r(63227),s=e.r(19335),o=e.r(30846),l=e.r(17798),d=e.r(66735),c=e.r(12749),u=e.r(3422),p=e.r(26898),h=e.r(57674),y=e.r(67061),m=e.r(23086),f=e.r(55925),b=e.r(77825),g=e.r(66392),K=e.r(78695),v=e.r(89977),S=e.r(58432),E=(0,p.Debug)("cluster"),k=new WeakSet;class I extends y.default{constructor(e,t={}){if(super(),this.slots=[],this._groupsIds={},this._groupsBySlot=Array(16384),this.isCluster=!0,this.retryAttempts=0,this.delayQueue=new g.default,this.offlineQueue=new v,this.isRefreshing=!1,this._refreshSlotsCacheCallbacks=[],this._autoPipelines=new Map,this._runningAutoPipelines=new Set,this._readyDelayedCallbacks=[],this.connectionEpoch=0,i.EventEmitter.call(this),this.startupNodes=e,this.options=(0,p.defaults)({},t,m.DEFAULT_CLUSTER_OPTIONS,this.options),!0==this.options.shardedSubscribers&&(this.shardedSubscribers=new S.default(this)),this.options.redisOptions&&this.options.redisOptions.keyPrefix&&!this.options.keyPrefix&&(this.options.keyPrefix=this.options.redisOptions.keyPrefix),"function"!=typeof this.options.scaleReads&&-1===["all","master","slave"].indexOf(this.options.scaleReads))throw Error('Invalid option scaleReads "'+this.options.scaleReads+'". Expected "all", "master", "slave" or a custom function');this.connectionPool=new b.default(this.options.redisOptions),this.connectionPool.on("-node",(e,t)=>{this.emit("-node",e)}),this.connectionPool.on("+node",e=>{this.emit("+node",e)}),this.connectionPool.on("drain",()=>{this.setStatus("close")}),this.connectionPool.on("nodeError",(e,t)=>{this.emit("node error",e,t)}),this.subscriber=new f.default(this.connectionPool,this),this.options.scripts&&Object.entries(this.options.scripts).forEach(([e,t])=>{this.defineCommand(e,t)}),this.options.lazyConnect?this.setStatus("wait"):this.connect().catch(e=>{E("connecting failed: %s",e)})}connect(){return new Promise((e,t)=>{if("connecting"===this.status||"connect"===this.status||"ready"===this.status)return void t(Error("Redis is already connecting/connected"));let r=++this.connectionEpoch;this.setStatus("connecting"),this.resolveStartupNodeHostnames().then(n=>{let i;if(this.connectionEpoch!==r){E("discard connecting after resolving startup nodes because epoch not match: %d != %d",r,this.connectionEpoch),t(new a.RedisError("Connection is discarded because a new connection is made"));return}if("connecting"!==this.status){E("discard connecting after resolving startup nodes because the status changed to %s",this.status),t(new a.RedisError("Connection is aborted"));return}this.connectionPool.reset(n);let s=()=>{this.setStatus("ready"),this.retryAttempts=0,this.executeOfflineCommands(),this.resetNodesRefreshInterval(),e()},o=()=>{this.invokeReadyDelayedCallbacks(void 0),this.removeListener("close",i),this.manuallyClosing=!1,this.setStatus("connect"),this.options.enableReadyCheck?this.readyCheck((e,t)=>{e||t?(E("Ready check failed (%s). Reconnecting...",e||t),"connect"===this.status&&this.disconnect(!0)):s()}):s()};i=()=>{let e=Error("None of startup nodes is available");this.removeListener("refresh",o),this.invokeReadyDelayedCallbacks(e),t(e)},this.once("refresh",o),this.once("close",i),this.once("close",this.handleCloseEvent.bind(this)),this.refreshSlotsCache(e=>{e&&e.message===l.default.defaultMessage&&(d.default.prototype.silentEmit.call(this,"error",e),this.connectionPool.reset([]))}),this.subscriber.start(),this.options.shardedSubscribers&&this.shardedSubscribers.start()}).catch(e=>{this.setStatus("close"),this.handleCloseEvent(e),this.invokeReadyDelayedCallbacks(e),t(e)})})}disconnect(e=!1){let t=this.status;this.setStatus("disconnecting"),e||(this.manuallyClosing=!0),this.reconnectTimeout&&!e&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null,E("Canceled reconnecting attempts")),this.clearNodesRefreshInterval(),this.subscriber.stop(),this.options.shardedSubscribers&&this.shardedSubscribers.stop(),"wait"===t?(this.setStatus("close"),this.handleCloseEvent()):this.connectionPool.reset([])}quit(e){let t=this.status;if(this.setStatus("disconnecting"),this.manuallyClosing=!0,this.reconnectTimeout&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),this.clearNodesRefreshInterval(),this.subscriber.stop(),this.options.shardedSubscribers&&this.shardedSubscribers.stop(),"wait"===t){let t=(0,s.default)(Promise.resolve("OK"),e);return setImmediate((function(){this.setStatus("close"),this.handleCloseEvent()}).bind(this)),t}return(0,s.default)(Promise.all(this.nodes().map(e=>e.quit().catch(e=>{if(e.message===p.CONNECTION_CLOSED_ERROR_MSG)return"OK";throw e}))).then(()=>"OK"),e)}duplicate(e=[],t={}){return new I(e.length>0?e:this.startupNodes.slice(0),Object.assign({},this.options,t))}nodes(e="all"){if("all"!==e&&"master"!==e&&"slave"!==e)throw Error('Invalid role "'+e+'". Expected "all", "master" or "slave"');return this.connectionPool.getNodes(e)}delayUntilReady(e){this._readyDelayedCallbacks.push(e)}get autoPipelineQueueSize(){let e=0;for(let t of this._autoPipelines.values())e+=t.length;return e}refreshSlotsCache(e){if(e&&this._refreshSlotsCacheCallbacks.push(e),this.isRefreshing)return;this.isRefreshing=!0;let t=this,r=e=>{for(let t of(this.isRefreshing=!1,this._refreshSlotsCacheCallbacks))t(e);this._refreshSlotsCacheCallbacks=[]},n=(0,p.shuffle)(this.connectionPool.getNodes()),i=null;!function e(a){if(a===n.length)return r(new l.default(l.default.defaultMessage,i));let s=n[a],o=`${s.options.host}:${s.options.port}`;E("getting slot cache from %s",o),t.getInfoFromNode(s,function(n){switch(t.status){case"close":case"end":return r(Error("Cluster is disconnected."));case"disconnecting":return r(Error("Cluster is disconnecting."))}n?(t.emit("node error",n,o),i=n,e(a+1)):(t.emit("refresh"),r())})}(0)}sendCommand(e,t,r){if("wait"===this.status&&this.connect().catch(p.noop),"end"===this.status)return e.reject(Error(p.CONNECTION_CLOSED_ERROR_MSG)),e.promise;let i=this.options.scaleReads;"master"!==i&&(e.isReadOnly||(0,n.exists)(e.name)&&(0,n.hasFlag)(e.name,"readonly")||(i="master"));let s=r?r.slot:e.getSlot(),l={},d=this;if(!r&&!k.has(e)){k.add(e);let t=e.reject;e.reject=function(r){let n=c.bind(null,!0);d.handleError(r,l,{moved:function(t,r){E("command %s is moved to %s",e.name,r),s=Number(t),d.slots[t]?d.slots[t][0]=r:d.slots[t]=[r],d._groupsBySlot[t]=d._groupsIds[d.slots[t].join(";")],d.connectionPool.findOrCreate(d.natMapper(r)),c(),E("refreshing slot caches... (triggered by MOVED error)"),d.refreshSlotsCache()},ask:function(t,r){E("command %s is required to ask %s:%s",e.name,r);let n=d.natMapper(r);d.connectionPool.findOrCreate(n),c(!1,`${n.host}:${n.port}`)},tryagain:n,clusterDown:n,connectionClosed:n,maxRedirections:function(r){t.call(e,r)},defaults:function(){t.call(e,r)}})}}function c(n,l){let c;if("end"===d.status)return void e.reject(new a.AbortError("Cluster is ended."));if("ready"===d.status||"cluster"===e.name){if(r&&r.redis)c=r.redis;else if(o.default.checkFlag("ENTER_SUBSCRIBER_MODE",e.name)||o.default.checkFlag("EXIT_SUBSCRIBER_MODE",e.name)){if(!0==d.options.shardedSubscribers&&("ssubscribe"==e.name||"sunsubscribe"==e.name)){let t=d.shardedSubscribers.getResponsibleSubscriber(s),r=-1;"ssubscribe"==e.name&&(r=d.shardedSubscribers.addChannels(e.getKeys())),"sunsubscribe"==e.name&&(r=d.shardedSubscribers.removeChannels(e.getKeys())),-1!==r?c=t.getInstance():e.reject(new a.AbortError("Can't add or remove the given channels. Are they in the same slot?"))}else c=d.subscriber.getInstance();if(!c)return void e.reject(new a.AbortError("No subscriber for the cluster"))}else{if(!n){if("number"==typeof s&&d.slots[s]){let t=d.slots[s];if("function"==typeof i){let r=t.map(function(e){return d.connectionPool.getInstanceByKey(e)});Array.isArray(c=i(r,e))&&(c=(0,p.sample)(c)),c||(c=r[0])}else{let e;e="all"===i?(0,p.sample)(t):"slave"===i&&t.length>1?(0,p.sample)(t,1):t[0],c=d.connectionPool.getInstanceByKey(e)}}l&&(c=d.connectionPool.getInstanceByKey(l)).asking()}c||(c=("function"==typeof i?null:d.connectionPool.getSampleInstance(i))||d.connectionPool.getSampleInstance("all"))}r&&!r.redis&&(r.redis=c)}c?c.sendCommand(e,t):d.options.enableOfflineQueue?d.offlineQueue.push({command:e,stream:t,node:r}):e.reject(Error("Cluster isn't ready and enableOfflineQueue options is false"))}return c(),e.promise}sscanStream(e,t){return this.createScanStream("sscan",{key:e,options:t})}sscanBufferStream(e,t){return this.createScanStream("sscanBuffer",{key:e,options:t})}hscanStream(e,t){return this.createScanStream("hscan",{key:e,options:t})}hscanBufferStream(e,t){return this.createScanStream("hscanBuffer",{key:e,options:t})}zscanStream(e,t){return this.createScanStream("zscan",{key:e,options:t})}zscanBufferStream(e,t){return this.createScanStream("zscanBuffer",{key:e,options:t})}handleError(e,t,r){if(void 0===t.value?t.value=this.options.maxRedirections:t.value-=1,t.value<=0)return void r.maxRedirections(Error("Too many Cluster redirections. Last error: "+e));let n=e.message.split(" ");if("MOVED"===n[0]){let e=this.options.retryDelayOnMoved;e&&"number"==typeof e?this.delayQueue.push("moved",r.moved.bind(null,n[1],n[2]),{timeout:e}):r.moved(n[1],n[2])}else"ASK"===n[0]?r.ask(n[1],n[2]):"TRYAGAIN"===n[0]?this.delayQueue.push("tryagain",r.tryagain,{timeout:this.options.retryDelayOnTryAgain}):"CLUSTERDOWN"===n[0]&&this.options.retryDelayOnClusterDown>0?this.delayQueue.push("clusterdown",r.connectionClosed,{timeout:this.options.retryDelayOnClusterDown,callback:this.refreshSlotsCache.bind(this)}):e.message===p.CONNECTION_CLOSED_ERROR_MSG&&this.options.retryDelayOnFailover>0&&"ready"===this.status?this.delayQueue.push("failover",r.connectionClosed,{timeout:this.options.retryDelayOnFailover,callback:this.refreshSlotsCache.bind(this)}):r.defaults()}resetOfflineQueue(){this.offlineQueue=new v}clearNodesRefreshInterval(){this.slotsTimer&&(clearTimeout(this.slotsTimer),this.slotsTimer=null)}resetNodesRefreshInterval(){if(this.slotsTimer||!this.options.slotsRefreshInterval)return;let e=()=>{this.slotsTimer=setTimeout(()=>{E('refreshing slot caches... (triggered by "slotsRefreshInterval" option)'),this.refreshSlotsCache(()=>{e()})},this.options.slotsRefreshInterval)};e()}setStatus(e){E("status: %s -> %s",this.status||"[empty]",e),this.status=e,process.nextTick(()=>{this.emit(e)})}handleCloseEvent(e){let t;e&&E("closed because %s",e),this.manuallyClosing||"function"!=typeof this.options.clusterRetryStrategy||(t=this.options.clusterRetryStrategy.call(this,++this.retryAttempts,e)),"number"==typeof t?(this.setStatus("reconnecting"),this.reconnectTimeout=setTimeout(()=>{this.reconnectTimeout=null,E("Cluster is disconnected. Retrying after %dms",t),this.connect().catch(function(e){E("Got error %s when reconnecting. Ignoring...",e)})},t)):(this.setStatus("end"),this.flushQueue(Error("None of startup nodes is available")))}flushQueue(e){let t;for(;t=this.offlineQueue.shift();)t.command.reject(e)}executeOfflineCommands(){if(this.offlineQueue.length){let e;E("send %d commands in offline queue",this.offlineQueue.length);let t=this.offlineQueue;for(this.resetOfflineQueue();e=t.shift();)this.sendCommand(e.command,e.stream,e.node)}}natMapper(e){let t="string"==typeof e?e:`${e.host}:${e.port}`,r=null;return(this.options.natMap&&"function"==typeof this.options.natMap?r=this.options.natMap(t):this.options.natMap&&"object"==typeof this.options.natMap&&(r=this.options.natMap[t]),r)?(E("NAT mapping %s -> %O",t,r),Object.assign({},r)):"string"==typeof e?(0,K.nodeKeyToRedisOptions)(e):e}getInfoFromNode(e,t){if(!e)return t(Error("Node is disconnected"));let r=e.duplicate({enableOfflineQueue:!0,enableReadyCheck:!1,retryStrategy:null,connectionName:(0,K.getConnectionName)("refresher",this.options.redisOptions&&this.options.redisOptions.connectionName)});r.on("error",p.noop),r.cluster("SLOTS",(0,p.timeout)((e,n)=>{if(r.disconnect(),e)return E("error encountered running CLUSTER.SLOTS: %s",e),t(e);if("disconnecting"===this.status||"close"===this.status||"end"===this.status){E("ignore CLUSTER.SLOTS results (count: %d) since cluster status is %s",n.length,this.status),t();return}let i=[];E("cluster slots result count: %d",n.length);for(let e=0;e<n.length;++e){let t=n[e],r=t[0],a=t[1],s=[];for(let e=2;e<t.length;e++){if(!t[e][0])continue;let r=this.natMapper({host:t[e][0],port:t[e][1]});r.readOnly=2!==e,i.push(r),s.push(r.host+":"+r.port)}E("cluster slots result [%d]: slots %d~%d served by %s",e,r,a,s);for(let e=r;e<=a;e++)this.slots[e]=s}this._groupsIds=Object.create(null);let a=0;for(let e=0;e<16384;e++){let t=(this.slots[e]||[]).join(";");if(!t.length){this._groupsBySlot[e]=void 0;continue}this._groupsIds[t]||(this._groupsIds[t]=++a),this._groupsBySlot[e]=this._groupsIds[t]}this.connectionPool.reset(i),t()},this.options.slotsRefreshTimeout))}invokeReadyDelayedCallbacks(e){for(let t of this._readyDelayedCallbacks)process.nextTick(t,e);this._readyDelayedCallbacks=[]}readyCheck(e){this.cluster("INFO",(t,r)=>{let n;if(t)return e(t);if("string"!=typeof r)return e();let i=r.split("\r\n");for(let e=0;e<i.length;++e){let t=i[e].split(":");if("cluster_state"===t[0]){n=t[1];break}}"fail"===n?(E("cluster state not ok (%s)",n),e(null,n)):e()})}resolveSrv(e){return new Promise((t,r)=>{this.options.resolveSrv(e,(e,n)=>{if(e)return r(e);let i=this,a=(0,K.groupSrvRecords)(n),s=Object.keys(a).sort((e,t)=>parseInt(e)-parseInt(t));!function e(n){if(!s.length)return r(n);let o=a[s[0]],l=(0,K.weightSrvRecords)(o);o.records.length||s.shift(),i.dnsLookup(l.name).then(e=>t({host:e,port:l.port}),e)}()})})}dnsLookup(e){return new Promise((t,r)=>{this.options.dnsLookup(e,(n,i)=>{n?(E("failed to resolve hostname %s to IP: %s",e,n.message),r(n)):(E("resolved hostname %s to IP %s",e,i),t(i))})})}async resolveStartupNodeHostnames(){if(!Array.isArray(this.startupNodes)||0===this.startupNodes.length)throw Error("`startupNodes` should contain at least one node.");let e=(0,K.normalizeNodeOptions)(this.startupNodes),t=(0,K.getUniqueHostnamesFromOptions)(e);if(0===t.length)return e;let r=await Promise.all(t.map((this.options.useSRVRecords?this.resolveSrv:this.dnsLookup).bind(this))),n=(0,p.zipMap)(t,r);return e.map(e=>{let t=n.get(e.host);return t?this.options.useSRVRecords?Object.assign({},e,t):Object.assign({},e,{host:t}):e})}createScanStream(e,{key:t,options:r={}}){return new c.default({objectMode:!0,key:t,redis:this,command:e,...r})}}(0,h.default)(I,i.EventEmitter),(0,u.addTransactionSupport)(I.prototype),r.default=I},58451,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=(0,e.r(26898).Debug)("AbstractConnector");r.default=class{constructor(e){this.connecting=!1,this.disconnectTimeout=e}check(e){return!0}disconnect(){if(this.connecting=!1,this.stream){let e=this.stream,t=setTimeout(()=>{n("stream %s:%s still open, destroying it",e.remoteAddress,e.remotePort),e.destroy()},this.disconnectTimeout);e.on("close",()=>clearTimeout(t)),e.end()}}}},90851,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(4446),i=e.r(55004),a=e.r(26898),s=e.r(58451);class o extends s.default{constructor(e){super(e.disconnectTimeout),this.options=e}connect(e){let t,{options:r}=this;return this.connecting=!0,"path"in r&&r.path?t={path:r.path}:(t={},"port"in r&&null!=r.port&&(t.port=r.port),"host"in r&&null!=r.host&&(t.host=r.host),"family"in r&&null!=r.family&&(t.family=r.family)),r.tls&&Object.assign(t,r.tls),new Promise((e,s)=>{process.nextTick(()=>{if(!this.connecting)return void s(Error(a.CONNECTION_CLOSED_ERROR_MSG));try{r.tls?this.stream=(0,i.connect)(t):this.stream=(0,n.createConnection)(t)}catch(e){s(e);return}this.stream.once("error",e=>{this.firstError=e}),e(this.stream)})})}}r.default=o},85649,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=class{constructor(e){this.cursor=0,this.sentinels=e.slice(0)}next(){let e=this.cursor>=this.sentinels.length;return{done:e,value:e?void 0:this.sentinels[this.cursor++]}}reset(e){e&&this.sentinels.length>1&&1!==this.cursor&&this.sentinels.unshift(...this.sentinels.splice(this.cursor-1)),this.cursor=0}add(e){for(let r=0;r<this.sentinels.length;r++){var t;if(t=this.sentinels[r],(e.host||"127.0.0.1")===(t.host||"127.0.0.1")&&(e.port||26379)===(t.port||26379))return!1}return this.sentinels.push(e),!0}toString(){return`${JSON.stringify(this.sentinels)} @${this.cursor}`}}},87575,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.FailoverDetector=void 0;let n=(0,e.r(26898).Debug)("FailoverDetector"),i="+switch-master";r.FailoverDetector=class{constructor(e,t){this.isDisconnected=!1,this.connector=e,this.sentinels=t}cleanup(){for(let e of(this.isDisconnected=!0,this.sentinels))e.client.disconnect()}async subscribe(){n("Starting FailoverDetector");let e=[];for(let t of this.sentinels){let r=t.client.subscribe(i).catch(e=>{n("Failed to subscribe to failover messages on sentinel %s:%s (%s)",t.address.host||"127.0.0.1",t.address.port||26739,e.message)});e.push(r),t.client.on("message",e=>{this.isDisconnected||e!==i||this.disconnect()})}await Promise.all(e)}disconnect(){this.isDisconnected=!0,n("Failover detected, disconnecting"),this.connector.disconnect()}}},77420,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.SentinelIterator=void 0;let n=e.r(4446),i=e.r(26898),a=e.r(55004),s=e.r(85649);r.SentinelIterator=s.default;let o=e.r(58451),l=e.r(66735),d=e.r(87575),c=(0,i.Debug)("SentinelConnector");class u extends o.default{constructor(e){if(super(e.disconnectTimeout),this.options=e,this.emitter=null,this.failoverDetector=null,!this.options.sentinels.length)throw Error("Requires at least one sentinel to connect to.");if(!this.options.name)throw Error("Requires the name of master.");this.sentinelIterator=new s.default(this.options.sentinels)}check(e){let t=!e.role||this.options.role===e.role;return t||(c("role invalid, expected %s, but got %s",this.options.role,e.role),this.sentinelIterator.next(),this.sentinelIterator.next(),this.sentinelIterator.reset(!0)),t}disconnect(){super.disconnect(),this.failoverDetector&&this.failoverDetector.cleanup()}connect(e){let t;this.connecting=!0,this.retryAttempts=0;let r=async()=>{let s=this.sentinelIterator.next();if(s.done){this.sentinelIterator.reset(!1);let n="function"==typeof this.options.sentinelRetryStrategy?this.options.sentinelRetryStrategy(++this.retryAttempts):null,i="number"!=typeof n?"All sentinels are unreachable and retry is disabled.":`All sentinels are unreachable. Retrying from scratch after ${n}ms.`;t&&(i+=` Last error: ${t.message}`),c(i);let a=Error(i);if("number"==typeof n)return e("error",a),await new Promise(e=>setTimeout(e,n)),r();throw a}let o=null,l=null;try{o=await this.resolve(s.value)}catch(e){l=e}if(!this.connecting)throw Error(i.CONNECTION_CLOSED_ERROR_MSG);let d=s.value.host+":"+s.value.port;if(o)return c("resolved: %s:%s from sentinel %s",o.host,o.port,d),this.options.enableTLSForSentinelMode&&this.options.tls?(Object.assign(o,this.options.tls),this.stream=(0,a.connect)(o),this.stream.once("secureConnect",this.initFailoverDetector.bind(this))):(this.stream=(0,n.createConnection)(o),this.stream.once("connect",this.initFailoverDetector.bind(this))),this.stream.once("error",e=>{this.firstError=e}),this.stream;{let n=l?"failed to connect to sentinel "+d+" because "+l.message:"connected to sentinel "+d+" successfully, but got an invalid reply: "+o;return c(n),e("sentinelError",Error(n)),l&&(t=l),r()}};return r()}async updateSentinels(e){if(!this.options.updateSentinels)return;let t=await e.sentinel("sentinels",this.options.name);Array.isArray(t)&&(t.map(i.packObject).forEach(e=>{if(-1===(e.flags?e.flags.split(","):[]).indexOf("disconnected")&&e.ip&&e.port){let t=this.sentinelNatResolve(p(e));this.sentinelIterator.add(t)&&c("adding sentinel %s:%s",t.host,t.port)}}),c("Updated internal sentinels: %s",this.sentinelIterator))}async resolveMaster(e){let t=await e.sentinel("get-master-addr-by-name",this.options.name);return await this.updateSentinels(e),this.sentinelNatResolve(Array.isArray(t)?{host:t[0],port:Number(t[1])}:null)}async resolveSlave(e){let t=await e.sentinel("slaves",this.options.name);if(!Array.isArray(t))return null;let r=t.map(i.packObject).filter(e=>e.flags&&!e.flags.match(/(disconnected|s_down|o_down)/));return this.sentinelNatResolve(function(e,t){let r;if(0===e.length)return null;if("function"==typeof t)r=t(e);else if(null!==t&&"object"==typeof t){let n=Array.isArray(t)?t:[t];n.sort((e,t)=>(e.prio||(e.prio=1),t.prio||(t.prio=1),e.prio<t.prio)?-1:+(e.prio>t.prio));for(let t=0;t<n.length;t++){for(let i=0;i<e.length;i++){let a=e[i];if(a.ip===n[t].ip&&a.port===n[t].port){r=a;break}}if(r)break}}return r||(r=(0,i.sample)(e)),p(r)}(r,this.options.preferredSlaves))}sentinelNatResolve(e){if(!e||!this.options.natMap)return e;let t=`${e.host}:${e.port}`,r=e;return"function"==typeof this.options.natMap?r=this.options.natMap(t)||e:"object"==typeof this.options.natMap&&(r=this.options.natMap[t]||e),r}connectToSentinel(e,t){return new l.default({port:e.port||26379,host:e.host,username:this.options.sentinelUsername||null,password:this.options.sentinelPassword||null,family:e.family||("path"in this.options&&this.options.path?void 0:this.options.family),tls:this.options.sentinelTLS,retryStrategy:null,enableReadyCheck:!1,connectTimeout:this.options.connectTimeout,commandTimeout:this.options.sentinelCommandTimeout,...t})}async resolve(e){let t=this.connectToSentinel(e);t.on("error",h);try{if("slave"===this.options.role)return await this.resolveSlave(t);return await this.resolveMaster(t)}finally{t.disconnect()}}async initFailoverDetector(){var e;if(!this.options.failoverDetector)return;this.sentinelIterator.reset(!0);let t=[];for(;t.length<this.options.sentinelMaxConnections;){let{done:e,value:r}=this.sentinelIterator.next();if(e)break;let n=this.connectToSentinel(r,{lazyConnect:!0,retryStrategy:this.options.sentinelReconnectStrategy});n.on("reconnecting",()=>{var e;null==(e=this.emitter)||e.emit("sentinelReconnecting")}),t.push({address:r,client:n})}this.sentinelIterator.reset(!1),this.failoverDetector&&this.failoverDetector.cleanup(),this.failoverDetector=new d.FailoverDetector(this,t),await this.failoverDetector.subscribe(),null==(e=this.emitter)||e.emit("failoverSubscribed")}}function p(e){return{host:e.ip,port:Number(e.port)}}function h(){}r.default=u},18652,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.SentinelConnector=r.StandaloneConnector=void 0,r.StandaloneConnector=e.r(90851).default,r.SentinelConnector=e.r(77420).default},53757,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(63227);class i extends n.AbortError{constructor(e){super(`Reached the max retries per request limit (which is ${e}). Refer to "maxRetriesPerRequest" option for details.`),Error.captureStackTrace(this,this.constructor)}get name(){return this.constructor.name}}r.default=i},88060,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.MaxRetriesPerRequestError=void 0,r.MaxRetriesPerRequestError=e.r(53757).default},29082,(e,t,r)=>{"use strict";let n=e.r(874).Buffer,i=new(e.r(99348)).StringDecoder,a=e.r(63227),s=a.ReplyError,o=a.ParserError;var l=n.allocUnsafe(32768),d=0,c=null,u=0,p=0;function h(e){let t=e.offset,r=e.buffer,n=r.length-1;for(var i=t;i<n;)if(13===r[i++]){if(e.offset=i+1,!0===e.optionReturnBuffers)return e.buffer.slice(t,i-1);return e.buffer.toString("utf8",t,i-1)}}function y(e){let t=e.buffer.length-1;for(var r=e.offset,n=0;r<t;){let t=e.buffer[r++];if(13===t)return e.offset=r+1,n;n=10*n+(t-48)}}function m(e,t,r){e.arrayCache.push(t),e.arrayPos.push(r)}function f(e){let t=e.arrayCache.pop();var r=e.arrayPos.pop();if(e.arrayCache.length){let n=f(e);if(void 0===n)return void m(e,t,r);t[r++]=n}return b(e,t,r)}function b(e,t,r){let n=e.buffer.length;for(;r<t.length;){let i=e.offset;if(e.offset>=n)return void m(e,t,r);let a=g(e,e.buffer[e.offset++]);if(void 0===a){e.arrayCache.length||e.bufferCache.length||(e.offset=i),m(e,t,r);return}t[r]=a,r++}return t}function g(e,t){switch(t){case 36:let r=y(e);if(void 0===r)return;if(r<0)return null;let n=e.offset+r;if(n+2>e.buffer.length){e.bigStrSize=n+2,e.totalChunkSize=e.buffer.length,e.bufferCache.push(e.buffer);return}let i=e.offset;return(e.offset=n+2,!0===e.optionReturnBuffers)?e.buffer.slice(i,n):e.buffer.toString("utf8",i,n);case 43:return h(e);case 42:let a=y(e);return void 0===a?void 0:a<0?null:b(e,Array(a),0);case 58:return!0===e.optionStringNumbers?function(e){let t=e.buffer.length-1;var r=e.offset,n=0,i="";for(45===e.buffer[r]&&(i+="-",r++);r<t;){var a=e.buffer[r++];if(13===a)return e.offset=r+1,0!==n&&(i+=n),i;n>0x19999998?(i+=10*n+(a-48),n=0):48===a&&0===n?i+=0:n=10*n+(a-48)}}(e):function(e){let t=e.buffer.length-1;var r=e.offset,n=0,i=1;for(45===e.buffer[r]&&(i=-1,r++);r<t;){let t=e.buffer[r++];if(13===t)return e.offset=r+1,i*n;n=10*n+(t-48)}}(e);case 45:var l=h(e);if(void 0!==l)return!0===e.optionReturnBuffers&&(l=l.toString()),new s(l);return;default:let d=new o("Protocol error, got "+JSON.stringify(String.fromCharCode(t))+" as reply type byte",JSON.stringify(e.buffer),e.offset);e.buffer=null,e.returnFatalError(d);return}}function K(){if(l.length>51200)if(1===u||p>2*u){let e=Math.floor(l.length/10),t=e<d?d:e;d=0,l=l.slice(t,l.length)}else p++,u--;else clearInterval(c),u=0,p=0,c=null}t.exports=class{constructor(e){if(!e)throw TypeError("Options are mandatory.");if("function"!=typeof e.returnError||"function"!=typeof e.returnReply)throw TypeError("The returnReply and returnError options have to be functions.");this.setReturnBuffers(!!e.returnBuffers),this.setStringNumbers(!!e.stringNumbers),this.returnError=e.returnError,this.returnFatalError=e.returnFatalError||e.returnError,this.returnReply=e.returnReply,this.reset()}reset(){this.offset=0,this.buffer=null,this.bigStrSize=0,this.totalChunkSize=0,this.bufferCache=[],this.arrayCache=[],this.arrayPos=[]}setReturnBuffers(e){if("boolean"!=typeof e)throw TypeError("The returnBuffers argument has to be a boolean");this.optionReturnBuffers=e}setStringNumbers(e){if("boolean"!=typeof e)throw TypeError("The stringNumbers argument has to be a boolean");this.optionStringNumbers=e}execute(e){if(null===this.buffer)this.buffer=e,this.offset=0;else if(0===this.bigStrSize){let t=this.buffer.length,r=t-this.offset,i=n.allocUnsafe(r+e.length);if(this.buffer.copy(i,0,this.offset,t),e.copy(i,r,0,e.length),this.buffer=i,this.offset=0,this.arrayCache.length){let e=f(this);if(void 0===e)return;this.returnReply(e)}}else if(this.totalChunkSize+e.length>=this.bigStrSize){this.bufferCache.push(e);var t=this.optionReturnBuffers?function(e){let t=e.bufferCache,r=e.offset,i=e.bigStrSize-r-2;var a=t.length,s=e.bigStrSize-e.totalChunkSize;if(e.offset=s,s<=2){if(2===a)return t[0].slice(r,t[0].length+s-2);a--,s=t[t.length-2].length+s}l.length<i+d&&(d>0x6f00000&&(d=0x3200000),l=n.allocUnsafe(i*(i>0x4b00000?2:3)+d),d=0,u++,null===c&&(c=setInterval(K,50)));let o=d;t[0].copy(l,o,r,t[0].length),d+=t[0].length-r;for(var p=1;p<a-1;p++)t[p].copy(l,d),d+=t[p].length;return t[p].copy(l,d,0,s-2),d+=s-2,l.slice(o,d)}(this):function(e){let t=e.bufferCache,r=e.offset;var n=t.length,a=e.bigStrSize-e.totalChunkSize;if(e.offset=a,a<=2){if(2===n)return t[0].toString("utf8",r,t[0].length+a-2);n--,a=t[t.length-2].length+a}for(var s=i.write(t[0].slice(r)),o=1;o<n-1;o++)s+=i.write(t[o]);return s+i.end(t[o].slice(0,a-2))}(this);if(this.bigStrSize=0,this.bufferCache=[],this.buffer=e,this.arrayCache.length&&(this.arrayCache[0][this.arrayPos[0]++]=t,void 0===(t=f(this))))return;this.returnReply(t)}else{this.bufferCache.push(e),this.totalChunkSize+=e.length;return}for(;this.offset<this.buffer.length;){let e=this.offset,t=this.buffer[this.offset++],r=g(this,t);if(void 0===r){this.arrayCache.length||this.bufferCache.length||(this.offset=e);return}45===t?this.returnError(r):this.returnReply(r)}this.buffer=null}}},43906,(e,t,r)=>{"use strict";t.exports=e.r(29082)},89611,(e,t,r)=>{"use strict";function n(e){return"unsubscribe"===e?"subscribe":"punsubscribe"===e?"psubscribe":"sunsubscribe"===e?"ssubscribe":e}Object.defineProperty(r,"__esModule",{value:!0}),r.default=class{constructor(){this.set={subscribe:{},psubscribe:{},ssubscribe:{}}}add(e,t){this.set[n(e)][t]=!0}del(e,t){delete this.set[n(e)][t]}channels(e){return Object.keys(this.set[n(e)])}isEmpty(){return 0===this.channels("subscribe").length&&0===this.channels("psubscribe").length&&0===this.channels("ssubscribe").length}}},73052,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(30846),i=e.r(26898),a=e.r(43906),s=e.r(89611),o=(0,i.Debug)("dataHandler");r.default=class{constructor(e,t){this.redis=e;let r=new a({stringNumbers:t.stringNumbers,returnBuffers:!0,returnError:e=>{this.returnError(e)},returnFatalError:e=>{this.returnFatalError(e)},returnReply:e=>{this.returnReply(e)}});e.stream.prependListener("data",e=>{r.execute(e)}),e.stream.resume()}returnFatalError(e){e.message+=". Please report this.",this.redis.recoverFromFatalError(e,e,{offlineQueue:!1})}returnError(e){let t=this.shiftCommand(e);t&&(e.command={name:t.command.name,args:t.command.args},this.redis.handleReconnection(e,t))}returnReply(e){if(this.handleMonitorReply(e)||this.handleSubscriberReply(e))return;let t=this.shiftCommand(e);t&&(n.default.checkFlag("ENTER_SUBSCRIBER_MODE",t.command.name)?(this.redis.condition.subscriber=new s.default,this.redis.condition.subscriber.add(t.command.name,e[1].toString()),d(t.command,e[2])||this.redis.commandQueue.unshift(t)):n.default.checkFlag("EXIT_SUBSCRIBER_MODE",t.command.name)?c(t.command,e[2])||this.redis.commandQueue.unshift(t):t.command.resolve(e))}handleSubscriberReply(e){if(!this.redis.condition.subscriber)return!1;let t=Array.isArray(e)?e[0].toString():null;switch(o('receive reply "%s" in subscriber mode',t),t){case"message":this.redis.listeners("message").length>0&&this.redis.emit("message",e[1].toString(),e[2]?e[2].toString():""),this.redis.emit("messageBuffer",e[1],e[2]);break;case"pmessage":{let t=e[1].toString();this.redis.listeners("pmessage").length>0&&this.redis.emit("pmessage",t,e[2].toString(),e[3].toString()),this.redis.emit("pmessageBuffer",t,e[2],e[3]);break}case"smessage":this.redis.listeners("smessage").length>0&&this.redis.emit("smessage",e[1].toString(),e[2]?e[2].toString():""),this.redis.emit("smessageBuffer",e[1],e[2]);break;case"ssubscribe":case"subscribe":case"psubscribe":{let r=e[1].toString();this.redis.condition.subscriber.add(t,r);let n=this.shiftCommand(e);if(!n)return;d(n.command,e[2])||this.redis.commandQueue.unshift(n);break}case"sunsubscribe":case"unsubscribe":case"punsubscribe":{let r=e[1]?e[1].toString():null;r&&this.redis.condition.subscriber.del(t,r);let n=e[2];0===Number(n)&&(this.redis.condition.subscriber=!1);let i=this.shiftCommand(e);if(!i)return;c(i.command,n)||this.redis.commandQueue.unshift(i);break}default:{let t=this.shiftCommand(e);if(!t)return;t.command.resolve(e)}}return!0}handleMonitorReply(e){if("monitoring"!==this.redis.status)return!1;let t=e.toString();if("OK"===t)return!1;let r=t.indexOf(" "),n=t.slice(0,r),i=t.indexOf('"'),a=t.slice(i+1,-1).split('" "').map(e=>e.replace(/\\"/g,'"')),s=t.slice(r+2,i-2).split(" ");return this.redis.emit("monitor",n,a,s[1],s[0]),!0}shiftCommand(e){let t=this.redis.commandQueue.shift();if(!t){let t=Error("Command queue state error. If you can reproduce this, please report it."+(e instanceof Error?` Last error: ${e.message}`:` Last reply: ${e.toString()}`));return this.redis.emit("error",t),null}return t}};let l=new WeakMap;function d(e,t){let r=l.has(e)?l.get(e):e.args.length;return(r-=1)<=0?(e.resolve(t),l.delete(e),!0):(l.set(e,r),!1)}function c(e,t){let r=l.has(e)?l.get(e):e.args.length;return 0===r?0===Number(t)&&(l.delete(e),e.resolve(t),!0):(r-=1)<=0?(e.resolve(t),!0):(l.set(e,r),!1)}},45247,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.readyHandler=r.errorHandler=r.closeHandler=r.connectHandler=void 0;let n=e.r(63227),i=e.r(30846),a=e.r(88060),s=e.r(26898),o=e.r(73052),l=(0,s.Debug)("connection");function d(e){let t=new n.AbortError("Command aborted due to connection close");return t.command={name:e.name,args:e.args},t}r.connectHandler=function(e){return function(){e.setStatus("connect"),e.resetCommandQueue();let t=!1,{connectionEpoch:n}=e;e.condition.auth&&e.auth(e.condition.auth,function(r){n===e.connectionEpoch&&r&&(-1!==r.message.indexOf("no password is set")?console.warn("[WARN] Redis server does not require a password, but a password was supplied."):-1!==r.message.indexOf("without any password configured for the default user")?console.warn("[WARN] This Redis server's `default` user does not require a password, but a password was supplied"):-1!==r.message.indexOf("wrong number of arguments for 'auth' command")?console.warn("[ERROR] The server returned \"wrong number of arguments for 'auth' command\". You are probably passing both username and password to Redis version 5 or below. You should only pass the 'password' option for Redis version 5 and under."):(t=!0,e.recoverFromFatalError(r,r)))}),e.condition.select&&e.select(e.condition.select).catch(t=>{e.silentEmit("error",t)}),e.options.enableReadyCheck||r.readyHandler(e)(),new o.default(e,{stringNumbers:e.options.stringNumbers}),e.options.enableReadyCheck&&e._readyCheck(function(i,a){n===e.connectionEpoch&&(i?t||e.recoverFromFatalError(Error("Ready check failed: "+i.message),i):e.connector.check(a)?r.readyHandler(e)():e.disconnect(!0))})}},r.closeHandler=function(e){return function(){let r=e.status;if(e.setStatus("close"),e.commandQueue.length&&function(e){var t;let r=0;for(let n=0;n<e.length;){let i=null==(t=e.peekAt(n))?void 0:t.command,a=i.pipelineIndex;if((void 0===a||0===a)&&(r=0),void 0!==a&&a!==r++){e.remove(n,1),i.reject(d(i));continue}n++}}(e.commandQueue),e.offlineQueue.length&&function(e){var t;for(let r=0;r<e.length;){let n=null==(t=e.peekAt(r))?void 0:t.command;if("multi"===n.name)break;if("exec"===n.name){e.remove(r,1),n.reject(d(n));break}n.inTransaction?(e.remove(r,1),n.reject(d(n))):r++}}(e.offlineQueue),"ready"===r&&(e.prevCondition||(e.prevCondition=e.condition),e.commandQueue.length&&(e.prevCommandQueue=e.commandQueue)),e.manuallyClosing)return e.manuallyClosing=!1,l("skip reconnecting since the connection is manually closed."),t();if("function"!=typeof e.options.retryStrategy)return l("skip reconnecting because `retryStrategy` is not a function"),t();let n=e.options.retryStrategy(++e.retryAttempts);if("number"!=typeof n)return l("skip reconnecting because `retryStrategy` doesn't return a number"),t();l("reconnect in %sms",n),e.setStatus("reconnecting",n),e.reconnectTimeout=setTimeout(function(){e.reconnectTimeout=null,e.connect().catch(s.noop)},n);let{maxRetriesPerRequest:i}=e.options;"number"==typeof i&&(i<0?l("maxRetriesPerRequest is negative, ignoring..."):0==e.retryAttempts%(i+1)&&(l("reach maxRetriesPerRequest limitation, flushing command queue..."),e.flushQueue(new a.MaxRetriesPerRequestError(i))))};function t(){e.setStatus("end"),e.flushQueue(Error(s.CONNECTION_CLOSED_ERROR_MSG))}},r.errorHandler=function(e){return function(t){l("error: %s",t),e.silentEmit("error",t)}},r.readyHandler=function(e){return function(){if(e.setStatus("ready"),e.retryAttempts=0,e.options.monitor){e.call("monitor").then(()=>e.setStatus("monitoring"),t=>e.emit("error",t));let{sendCommand:t}=e;e.sendCommand=function(r){return i.default.checkFlag("VALID_IN_MONITOR_MODE",r.name)?t.call(e,r):(r.reject(Error("Connection is in monitoring mode, can't process commands.")),r.promise)},e.once("close",function(){delete e.sendCommand});return}let t=e.prevCondition?e.prevCondition.select:e.condition.select;if(e.options.connectionName&&(l("set the connection name [%s]",e.options.connectionName),e.client("setname",e.options.connectionName).catch(s.noop)),e.options.readOnly&&(l("set the connection to readonly mode"),e.readonly().catch(s.noop)),e.prevCondition){let r=e.prevCondition;if(e.prevCondition=null,r.subscriber&&e.options.autoResubscribe){e.condition.select!==t&&(l("connect to db [%d]",t),e.select(t));let n=r.subscriber.channels("subscribe");n.length&&(l("subscribe %d channels",n.length),e.subscribe(n));let i=r.subscriber.channels("psubscribe");i.length&&(l("psubscribe %d channels",i.length),e.psubscribe(i));let a=r.subscriber.channels("ssubscribe");a.length&&(l("ssubscribe %d channels",a.length),e.ssubscribe(a))}}if(e.prevCommandQueue)if(e.options.autoResendUnfulfilledCommands)for(l("resend %d unfulfilled commands",e.prevCommandQueue.length);e.prevCommandQueue.length>0;){let t=e.prevCommandQueue.shift();t.select!==e.condition.select&&"select"!==t.command.name&&e.select(t.select),e.sendCommand(t.command,t.stream)}else e.prevCommandQueue=null;if(e.offlineQueue.length){l("send %d commands in offline queue",e.offlineQueue.length);let t=e.offlineQueue;for(e.resetOfflineQueue();t.length>0;){let r=t.shift();r.select!==e.condition.select&&"select"!==r.command.name&&e.select(r.select),e.sendCommand(r.command,r.stream)}}e.condition.select!==t&&(l("connect to db [%d]",t),e.select(t))}}},77143,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.DEFAULT_REDIS_OPTIONS=void 0,r.DEFAULT_REDIS_OPTIONS={port:6379,host:"localhost",family:4,connectTimeout:1e4,disconnectTimeout:2e3,retryStrategy:function(e){return Math.min(50*e,2e3)},keepAlive:0,noDelay:!0,connectionName:null,sentinels:null,name:null,role:"master",sentinelRetryStrategy:function(e){return Math.min(10*e,1e3)},sentinelReconnectStrategy:function(){return 6e4},natMap:null,enableTLSForSentinelMode:!1,updateSentinels:!0,failoverDetector:!1,username:null,password:null,db:0,enableOfflineQueue:!0,enableReadyCheck:!0,autoResubscribe:!0,autoResendUnfulfilledCommands:!0,lazyConnect:!1,keyPrefix:"",reconnectOnError:null,readOnly:!1,stringNumbers:!1,maxRetriesPerRequest:20,maxLoadingRetryTime:1e4,enableAutoPipelining:!1,autoPipeliningIgnoredCommands:[],sentinelMaxConnections:10}},66735,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let n=e.r(12522),i=e.r(27699),a=e.r(19335),s=e.r(83252),o=e.r(30846),l=e.r(18652),d=e.r(77420),c=e.r(45247),u=e.r(77143),p=e.r(12749),h=e.r(3422),y=e.r(26898),m=e.r(57674),f=e.r(67061),b=e.r(57517),g=e.r(89977),K=(0,y.Debug)("redis");class v extends f.default{constructor(e,t,r){if(super(),this.status="wait",this.isCluster=!1,this.reconnectTimeout=null,this.connectionEpoch=0,this.retryAttempts=0,this.manuallyClosing=!1,this._autoPipelines=new Map,this._runningAutoPipelines=new Set,this.parseOptions(e,t,r),i.EventEmitter.call(this),this.resetCommandQueue(),this.resetOfflineQueue(),this.options.Connector)this.connector=new this.options.Connector(this.options);else if(this.options.sentinels){let e=new d.default(this.options);e.emitter=this,this.connector=e}else this.connector=new l.StandaloneConnector(this.options);this.options.scripts&&Object.entries(this.options.scripts).forEach(([e,t])=>{this.defineCommand(e,t)}),this.options.lazyConnect?this.setStatus("wait"):this.connect().catch(b.noop)}static createClient(...e){return new v(...e)}get autoPipelineQueueSize(){let e=0;for(let t of this._autoPipelines.values())e+=t.length;return e}connect(e){let t=new Promise((e,t)=>{if("connecting"===this.status||"connect"===this.status||"ready"===this.status)return void t(Error("Redis is already connecting/connected"));this.connectionEpoch+=1,this.setStatus("connecting");let{options:r}=this;this.condition={select:r.db,auth:r.username?[r.username,r.password]:r.password,subscriber:!1};let n=this;(0,a.default)(this.connector.connect(function(e,t){n.silentEmit(e,t)}),function(i,a){if(i){n.flushQueue(i),n.silentEmit("error",i),t(i),n.setStatus("end");return}let s=r.tls?"secureConnect":"connect";if("sentinels"in r&&r.sentinels&&!r.enableTLSForSentinelMode&&(s="connect"),n.stream=a,r.noDelay&&a.setNoDelay(!0),"number"==typeof r.keepAlive&&(a.connecting?a.once(s,()=>{a.setKeepAlive(!0,r.keepAlive)}):a.setKeepAlive(!0,r.keepAlive)),a.connecting){if(a.once(s,c.connectHandler(n)),r.connectTimeout){let e=!1;a.setTimeout(r.connectTimeout,function(){if(e)return;a.setTimeout(0),a.destroy();let t=Error("connect ETIMEDOUT");t.errorno="ETIMEDOUT",t.code="ETIMEDOUT",t.syscall="connect",c.errorHandler(n)(t)}),a.once(s,function(){e=!0,a.setTimeout(0)})}}else if(a.destroyed){let e=n.connector.firstError;e&&process.nextTick(()=>{c.errorHandler(n)(e)}),process.nextTick(c.closeHandler(n))}else process.nextTick(c.connectHandler(n));a.destroyed||(a.once("error",c.errorHandler(n)),a.once("close",c.closeHandler(n)));let o=function(){n.removeListener("close",l),e()};var l=function(){n.removeListener("ready",o),t(Error(y.CONNECTION_CLOSED_ERROR_MSG))};n.once("ready",o),n.once("close",l)})});return(0,a.default)(t,e)}disconnect(e=!1){e||(this.manuallyClosing=!0),this.reconnectTimeout&&!e&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),"wait"===this.status?c.closeHandler(this)():this.connector.disconnect()}end(){this.disconnect()}duplicate(e){return new v({...this.options,...e})}get mode(){var e;return this.options.monitor?"monitor":(null==(e=this.condition)?void 0:e.subscriber)?"subscriber":"normal"}monitor(e){let t=this.duplicate({monitor:!0,lazyConnect:!1});return(0,a.default)(new Promise(function(e,r){t.once("error",r),t.once("monitoring",function(){e(t)})}),e)}sendCommand(e,t){var r,i;if("wait"===this.status&&this.connect().catch(b.noop),"end"===this.status)return e.reject(Error(y.CONNECTION_CLOSED_ERROR_MSG)),e.promise;if((null==(r=this.condition)?void 0:r.subscriber)&&!o.default.checkFlag("VALID_IN_SUBSCRIBER_MODE",e.name))return e.reject(Error("Connection in subscriber mode, only subscriber commands may be used")),e.promise;"number"==typeof this.options.commandTimeout&&e.setTimeout(this.options.commandTimeout);let a="ready"===this.status||!t&&"connect"===this.status&&(0,n.exists)(e.name)&&(0,n.hasFlag)(e.name,"loading");if(this.stream&&this.stream.writable?this.stream._writableState&&this.stream._writableState.ended&&(a=!1):a=!1,a)K.enabled&&K("write command[%s]: %d -> %s(%o)",this._getDescription(),null==(i=this.condition)?void 0:i.select,e.name,e.args),t?"isPipeline"in t&&t.isPipeline?t.write(e.toWritable(t.destination.redis.stream)):t.write(e.toWritable(t)):this.stream.write(e.toWritable(this.stream)),this.commandQueue.push({command:e,stream:t,select:this.condition.select}),o.default.checkFlag("WILL_DISCONNECT",e.name)&&(this.manuallyClosing=!0),void 0!==this.options.socketTimeout&&void 0===this.socketTimeoutTimer&&this.setSocketTimeout();else{if(!this.options.enableOfflineQueue)return e.reject(Error("Stream isn't writeable and enableOfflineQueue options is false")),e.promise;if("quit"===e.name&&0===this.offlineQueue.length)return this.disconnect(),e.resolve(Buffer.from("OK")),e.promise;K.enabled&&K("queue command[%s]: %d -> %s(%o)",this._getDescription(),this.condition.select,e.name,e.args),this.offlineQueue.push({command:e,stream:t,select:this.condition.select})}if("select"===e.name&&(0,y.isInt)(e.args[0])){let t=parseInt(e.args[0],10);this.condition.select!==t&&(this.condition.select=t,this.emit("select",t),K("switch to db [%d]",this.condition.select))}return e.promise}setSocketTimeout(){this.socketTimeoutTimer=setTimeout(()=>{this.stream.destroy(Error(`Socket timeout. Expecting data, but didn't receive any in ${this.options.socketTimeout}ms.`)),this.socketTimeoutTimer=void 0},this.options.socketTimeout),this.stream.once("data",()=>{clearTimeout(this.socketTimeoutTimer),this.socketTimeoutTimer=void 0,0!==this.commandQueue.length&&this.setSocketTimeout()})}scanStream(e){return this.createScanStream("scan",{options:e})}scanBufferStream(e){return this.createScanStream("scanBuffer",{options:e})}sscanStream(e,t){return this.createScanStream("sscan",{key:e,options:t})}sscanBufferStream(e,t){return this.createScanStream("sscanBuffer",{key:e,options:t})}hscanStream(e,t){return this.createScanStream("hscan",{key:e,options:t})}hscanBufferStream(e,t){return this.createScanStream("hscanBuffer",{key:e,options:t})}zscanStream(e,t){return this.createScanStream("zscan",{key:e,options:t})}zscanBufferStream(e,t){return this.createScanStream("zscanBuffer",{key:e,options:t})}silentEmit(e,t){let r;if("error"!==e||(r=t,"end"!==this.status&&(!this.manuallyClosing||!(r instanceof Error)||r.message!==y.CONNECTION_CLOSED_ERROR_MSG&&"connect"!==r.syscall&&"read"!==r.syscall)))return this.listeners(e).length>0?this.emit.apply(this,arguments):(r&&r instanceof Error&&console.error("[ioredis] Unhandled error event:",r.stack),!1)}recoverFromFatalError(e,t,r){this.flushQueue(t,r),this.silentEmit("error",t),this.disconnect(!0)}handleReconnection(e,t){var r;let n=!1;switch(this.options.reconnectOnError&&(n=this.options.reconnectOnError(e)),n){case 1:case!0:"reconnecting"!==this.status&&this.disconnect(!0),t.command.reject(e);break;case 2:"reconnecting"!==this.status&&this.disconnect(!0),(null==(r=this.condition)?void 0:r.select)!==t.select&&"select"!==t.command.name&&this.select(t.select),this.sendCommand(t.command);break;default:t.command.reject(e)}}_getDescription(){let e;return e="path"in this.options&&this.options.path?this.options.path:this.stream&&this.stream.remoteAddress&&this.stream.remotePort?this.stream.remoteAddress+":"+this.stream.remotePort:"host"in this.options&&this.options.host?this.options.host+":"+this.options.port:"",this.options.connectionName&&(e+=` (${this.options.connectionName})`),e}resetCommandQueue(){this.commandQueue=new g}resetOfflineQueue(){this.offlineQueue=new g}parseOptions(...e){let t={},r=!1;for(let n=0;n<e.length;++n){let i=e[n];if(null!=i)if("object"==typeof i)(0,b.defaults)(t,i);else if("string"==typeof i)(0,b.defaults)(t,(0,y.parseURL)(i)),i.startsWith("rediss://")&&(r=!0);else if("number"==typeof i)t.port=i;else throw Error("Invalid argument "+i)}r&&(0,b.defaults)(t,{tls:!0}),(0,b.defaults)(t,v.defaultOptions),"string"==typeof t.port&&(t.port=parseInt(t.port,10)),"string"==typeof t.db&&(t.db=parseInt(t.db,10)),this.options=(0,y.resolveTLSProfile)(t)}setStatus(e,t){K.enabled&&K("status[%s]: %s -> %s",this._getDescription(),this.status||"[empty]",e),this.status=e,process.nextTick(this.emit.bind(this,e,t))}createScanStream(e,{key:t,options:r={}}){return new p.default({objectMode:!0,key:t,redis:this,command:e,...r})}flushQueue(e,t){let r;if((t=(0,b.defaults)({},t,{offlineQueue:!0,commandQueue:!0})).offlineQueue)for(;r=this.offlineQueue.shift();)r.command.reject(e);if(t.commandQueue&&this.commandQueue.length>0)for(this.stream&&this.stream.removeAllListeners("data");r=this.commandQueue.shift();)r.command.reject(e)}_readyCheck(e){let t=this;this.info(function(r,n){if(r)return r.message&&r.message.includes("NOPERM")?(console.warn(`Skipping the ready check because INFO command fails: "${r.message}". You can disable ready check with "enableReadyCheck". More: https://github.com/luin/ioredis/wiki/Disable-ready-check.`),e(null,{})):e(r);if("string"!=typeof n)return e(null,n);let i={},a=n.split("\r\n");for(let e=0;e<a.length;++e){let[t,...r]=a[e].split(":"),n=r.join(":");n&&(i[t]=n)}if(i.loading&&"0"!==i.loading){let r=1e3*(i.loading_eta_seconds||1),n=t.options.maxLoadingRetryTime&&t.options.maxLoadingRetryTime<r?t.options.maxLoadingRetryTime:r;K("Redis server still loading, trying again in "+n+"ms"),setTimeout(function(){t._readyCheck(e)},n)}else e(null,i)}).catch(b.noop)}}v.Cluster=s.default,v.Command=o.default,v.defaultOptions=u.DEFAULT_REDIS_OPTIONS,(0,m.default)(v,i.EventEmitter),(0,h.addTransactionSupport)(v.prototype),r.default=v},42512,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.print=r.ReplyError=r.SentinelIterator=r.SentinelConnector=r.AbstractConnector=r.Pipeline=r.ScanStream=r.Command=r.Cluster=r.Redis=r.default=void 0,r=t.exports=e.r(66735).default;var n=e.r(66735);Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n.default}});var i=e.r(66735);Object.defineProperty(r,"Redis",{enumerable:!0,get:function(){return i.default}});var a=e.r(83252);Object.defineProperty(r,"Cluster",{enumerable:!0,get:function(){return a.default}});var s=e.r(30846);Object.defineProperty(r,"Command",{enumerable:!0,get:function(){return s.default}});var o=e.r(12749);Object.defineProperty(r,"ScanStream",{enumerable:!0,get:function(){return o.default}});var l=e.r(6135);Object.defineProperty(r,"Pipeline",{enumerable:!0,get:function(){return l.default}});var d=e.r(58451);Object.defineProperty(r,"AbstractConnector",{enumerable:!0,get:function(){return d.default}});var c=e.r(77420);Object.defineProperty(r,"SentinelConnector",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(r,"SentinelIterator",{enumerable:!0,get:function(){return c.SentinelIterator}}),r.ReplyError=e.r(63227).ReplyError,Object.defineProperty(r,"Promise",{get:()=>(console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used."),Promise),set(e){console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used.")}}),r.print=function(e,t){e?console.log("Error: "+e):console.log("Reply: "+t)}},38703,(e,t,r)=>{"use strict";t.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||0x1fffffffffffff,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},91130,(e,t,r)=>{"use strict";t.exports="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{}},70547,(e,t,r)=>{"use strict";let{MAX_SAFE_COMPONENT_LENGTH:n,MAX_SAFE_BUILD_LENGTH:i,MAX_LENGTH:a}=e.r(38703),s=e.r(91130),o=(r=t.exports={}).re=[],l=r.safeRe=[],d=r.src=[],c=r.safeSrc=[],u=r.t={},p=0,h="[a-zA-Z0-9-]",y=[["\\s",1],["\\d",a],[h,i]],m=(e,t,r)=>{let n=(e=>{for(let[t,r]of y)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e})(t),i=p++;s(e,i,t),u[e]=i,d[i]=t,c[i]=n,o[i]=new RegExp(t,r?"g":void 0),l[i]=new RegExp(n,r?"g":void 0)};m("NUMERICIDENTIFIER","0|[1-9]\\d*"),m("NUMERICIDENTIFIERLOOSE","\\d+"),m("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${h}*`),m("MAINVERSION",`(${d[u.NUMERICIDENTIFIER]})\\.(${d[u.NUMERICIDENTIFIER]})\\.(${d[u.NUMERICIDENTIFIER]})`),m("MAINVERSIONLOOSE",`(${d[u.NUMERICIDENTIFIERLOOSE]})\\.(${d[u.NUMERICIDENTIFIERLOOSE]})\\.(${d[u.NUMERICIDENTIFIERLOOSE]})`),m("PRERELEASEIDENTIFIER",`(?:${d[u.NONNUMERICIDENTIFIER]}|${d[u.NUMERICIDENTIFIER]})`),m("PRERELEASEIDENTIFIERLOOSE",`(?:${d[u.NONNUMERICIDENTIFIER]}|${d[u.NUMERICIDENTIFIERLOOSE]})`),m("PRERELEASE",`(?:-(${d[u.PRERELEASEIDENTIFIER]}(?:\\.${d[u.PRERELEASEIDENTIFIER]})*))`),m("PRERELEASELOOSE",`(?:-?(${d[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[u.PRERELEASEIDENTIFIERLOOSE]})*))`),m("BUILDIDENTIFIER",`${h}+`),m("BUILD",`(?:\\+(${d[u.BUILDIDENTIFIER]}(?:\\.${d[u.BUILDIDENTIFIER]})*))`),m("FULLPLAIN",`v?${d[u.MAINVERSION]}${d[u.PRERELEASE]}?${d[u.BUILD]}?`),m("FULL",`^${d[u.FULLPLAIN]}$`),m("LOOSEPLAIN",`[v=\\s]*${d[u.MAINVERSIONLOOSE]}${d[u.PRERELEASELOOSE]}?${d[u.BUILD]}?`),m("LOOSE",`^${d[u.LOOSEPLAIN]}$`),m("GTLT","((?:<|>)?=?)"),m("XRANGEIDENTIFIERLOOSE",`${d[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),m("XRANGEIDENTIFIER",`${d[u.NUMERICIDENTIFIER]}|x|X|\\*`),m("XRANGEPLAIN",`[v=\\s]*(${d[u.XRANGEIDENTIFIER]})(?:\\.(${d[u.XRANGEIDENTIFIER]})(?:\\.(${d[u.XRANGEIDENTIFIER]})(?:${d[u.PRERELEASE]})?${d[u.BUILD]}?)?)?`),m("XRANGEPLAINLOOSE",`[v=\\s]*(${d[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[u.XRANGEIDENTIFIERLOOSE]})(?:${d[u.PRERELEASELOOSE]})?${d[u.BUILD]}?)?)?`),m("XRANGE",`^${d[u.GTLT]}\\s*${d[u.XRANGEPLAIN]}$`),m("XRANGELOOSE",`^${d[u.GTLT]}\\s*${d[u.XRANGEPLAINLOOSE]}$`),m("COERCEPLAIN",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`),m("COERCE",`${d[u.COERCEPLAIN]}(?:$|[^\\d])`),m("COERCEFULL",d[u.COERCEPLAIN]+`(?:${d[u.PRERELEASE]})?`+`(?:${d[u.BUILD]})?`+"(?:$|[^\\d])"),m("COERCERTL",d[u.COERCE],!0),m("COERCERTLFULL",d[u.COERCEFULL],!0),m("LONETILDE","(?:~>?)"),m("TILDETRIM",`(\\s*)${d[u.LONETILDE]}\\s+`,!0),r.tildeTrimReplace="$1~",m("TILDE",`^${d[u.LONETILDE]}${d[u.XRANGEPLAIN]}$`),m("TILDELOOSE",`^${d[u.LONETILDE]}${d[u.XRANGEPLAINLOOSE]}$`),m("LONECARET","(?:\\^)"),m("CARETTRIM",`(\\s*)${d[u.LONECARET]}\\s+`,!0),r.caretTrimReplace="$1^",m("CARET",`^${d[u.LONECARET]}${d[u.XRANGEPLAIN]}$`),m("CARETLOOSE",`^${d[u.LONECARET]}${d[u.XRANGEPLAINLOOSE]}$`),m("COMPARATORLOOSE",`^${d[u.GTLT]}\\s*(${d[u.LOOSEPLAIN]})$|^$`),m("COMPARATOR",`^${d[u.GTLT]}\\s*(${d[u.FULLPLAIN]})$|^$`),m("COMPARATORTRIM",`(\\s*)${d[u.GTLT]}\\s*(${d[u.LOOSEPLAIN]}|${d[u.XRANGEPLAIN]})`,!0),r.comparatorTrimReplace="$1$2$3",m("HYPHENRANGE",`^\\s*(${d[u.XRANGEPLAIN]})\\s+-\\s+(${d[u.XRANGEPLAIN]})\\s*$`),m("HYPHENRANGELOOSE",`^\\s*(${d[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[u.XRANGEPLAINLOOSE]})\\s*$`),m("STAR","(<|>)?=?\\s*\\*"),m("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),m("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},82789,(e,t,r)=>{"use strict";let n=Object.freeze({loose:!0}),i=Object.freeze({});t.exports=e=>e?"object"!=typeof e?n:e:i},18429,(e,t,r)=>{"use strict";let n=/^[0-9]+$/,i=(e,t)=>{let r=n.test(e),i=n.test(t);return r&&i&&(e*=1,t*=1),e===t?0:r&&!i?-1:i&&!r?1:e<t?-1:1};t.exports={compareIdentifiers:i,rcompareIdentifiers:(e,t)=>i(t,e)}},20326,(e,t,r)=>{"use strict";let n=e.r(91130),{MAX_LENGTH:i,MAX_SAFE_INTEGER:a}=e.r(38703),{safeRe:s,t:o}=e.r(70547),l=e.r(82789),{compareIdentifiers:d}=e.r(18429);class c{constructor(e,t){if(t=l(t),e instanceof c)if(!!t.loose===e.loose&&!!t.includePrerelease===e.includePrerelease)return e;else e=e.version;else if("string"!=typeof e)throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>i)throw TypeError(`version is longer than ${i} characters`);n("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;let r=e.trim().match(t.loose?s[o.LOOSE]:s[o.FULL]);if(!r)throw TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>a||this.major<0)throw TypeError("Invalid major version");if(this.minor>a||this.minor<0)throw TypeError("Invalid minor version");if(this.patch>a||this.patch<0)throw TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(e=>{if(/^[0-9]+$/.test(e)){let t=+e;if(t>=0&&t<a)return t}return e}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(n("SemVer.compare",this.version,this.options,e),!(e instanceof c)){if("string"==typeof e&&e===this.version)return 0;e=new c(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof c||(e=new c(e,this.options)),d(this.major,e.major)||d(this.minor,e.minor)||d(this.patch,e.patch)}comparePre(e){if(e instanceof c||(e=new c(e,this.options)),this.prerelease.length&&!e.prerelease.length)return -1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{let r=this.prerelease[t],i=e.prerelease[t];if(n("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return -1;else if(r===i)continue;else return d(r,i)}while(++t)}compareBuild(e){e instanceof c||(e=new c(e,this.options));let t=0;do{let r=this.build[t],i=e.build[t];if(n("build compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return -1;else if(r===i)continue;else return d(r,i)}while(++t)}inc(e,t,r){if(e.startsWith("pre")){if(!t&&!1===r)throw Error("invalid increment argument: identifier is empty");if(t){let e=`-${t}`.match(this.options.loose?s[o.PRERELEASELOOSE]:s[o.PRERELEASE]);if(!e||e[1]!==t)throw Error(`invalid identifier: ${t}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,r),this.inc("pre",t,r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t,r),this.inc("pre",t,r);break;case"release":if(0===this.prerelease.length)throw Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(0!==this.minor||0!==this.patch||0===this.prerelease.length)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(0!==this.patch||0===this.prerelease.length)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":{let e=+!!Number(r);if(0===this.prerelease.length)this.prerelease=[e];else{let n=this.prerelease.length;for(;--n>=0;)"number"==typeof this.prerelease[n]&&(this.prerelease[n]++,n=-2);if(-1===n){if(t===this.prerelease.join(".")&&!1===r)throw Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(t){let n=[t,e];!1===r&&(n=[t]),0===d(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=n):this.prerelease=n}break}default:throw Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}t.exports=c},35759,(e,t,r)=>{"use strict";let n=e.r(20326);t.exports=(e,t,r=!1)=>{if(e instanceof n)return e;try{return new n(e,t)}catch(e){if(!r)return null;throw e}}},32,(e,t,r)=>{"use strict";let n=e.r(35759);t.exports=(e,t)=>{let r=n(e,t);return r?r.version:null}},76730,(e,t,r)=>{"use strict";let n=e.r(35759);t.exports=(e,t)=>{let r=n(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}},96161,(e,t,r)=>{"use strict";let n=e.r(20326);t.exports=(e,t,r,i,a)=>{"string"==typeof r&&(a=i,i=r,r=void 0);try{return new n(e instanceof n?e.version:e,r).inc(t,i,a).version}catch(e){return null}}},16022,(e,t,r)=>{"use strict";let n=e.r(35759);t.exports=(e,t)=>{let r=n(e,null,!0),i=n(t,null,!0),a=r.compare(i);if(0===a)return null;let s=a>0,o=s?r:i,l=s?i:r,d=!!o.prerelease.length;if(l.prerelease.length&&!d){if(!l.patch&&!l.minor)return"major";if(0===l.compareMain(o))return l.minor&&!l.patch?"minor":"patch"}let c=d?"pre":"";return r.major!==i.major?c+"major":r.minor!==i.minor?c+"minor":r.patch!==i.patch?c+"patch":"prerelease"}},8645,(e,t,r)=>{"use strict";let n=e.r(20326);t.exports=(e,t)=>new n(e,t).major},62196,(e,t,r)=>{"use strict";let n=e.r(20326);t.exports=(e,t)=>new n(e,t).minor},52686,(e,t,r)=>{"use strict";let n=e.r(20326);t.exports=(e,t)=>new n(e,t).patch},13523,(e,t,r)=>{"use strict";let n=e.r(35759);t.exports=(e,t)=>{let r=n(e,t);return r&&r.prerelease.length?r.prerelease:null}},4668,(e,t,r)=>{"use strict";let n=e.r(20326);t.exports=(e,t,r)=>new n(e,r).compare(new n(t,r))},60808,(e,t,r)=>{"use strict";let n=e.r(4668);t.exports=(e,t,r)=>n(t,e,r)},98480,(e,t,r)=>{"use strict";let n=e.r(4668);t.exports=(e,t)=>n(e,t,!0)},79552,(e,t,r)=>{"use strict";let n=e.r(20326);t.exports=(e,t,r)=>{let i=new n(e,r),a=new n(t,r);return i.compare(a)||i.compareBuild(a)}},18817,(e,t,r)=>{"use strict";let n=e.r(79552);t.exports=(e,t)=>e.sort((e,r)=>n(e,r,t))},43007,(e,t,r)=>{"use strict";let n=e.r(79552);t.exports=(e,t)=>e.sort((e,r)=>n(r,e,t))},56381,(e,t,r)=>{"use strict";let n=e.r(4668);t.exports=(e,t,r)=>n(e,t,r)>0},99583,(e,t,r)=>{"use strict";let n=e.r(4668);t.exports=(e,t,r)=>0>n(e,t,r)},66010,(e,t,r)=>{"use strict";let n=e.r(4668);t.exports=(e,t,r)=>0===n(e,t,r)},9282,(e,t,r)=>{"use strict";let n=e.r(4668);t.exports=(e,t,r)=>0!==n(e,t,r)},87709,(e,t,r)=>{"use strict";let n=e.r(4668);t.exports=(e,t,r)=>n(e,t,r)>=0},48467,(e,t,r)=>{"use strict";let n=e.r(4668);t.exports=(e,t,r)=>0>=n(e,t,r)},36269,(e,t,r)=>{"use strict";let n=e.r(66010),i=e.r(9282),a=e.r(56381),s=e.r(87709),o=e.r(99583),l=e.r(48467);t.exports=(e,t,r,d)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return n(e,r,d);case"!=":return i(e,r,d);case">":return a(e,r,d);case">=":return s(e,r,d);case"<":return o(e,r,d);case"<=":return l(e,r,d);default:throw TypeError(`Invalid operator: ${t}`)}}},64166,(e,t,r)=>{"use strict";let n=e.r(20326),i=e.r(35759),{safeRe:a,t:s}=e.r(70547);t.exports=(e,t)=>{if(e instanceof n)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let r=null;if((t=t||{}).rtl){let n,i=t.includePrerelease?a[s.COERCERTLFULL]:a[s.COERCERTL];for(;(n=i.exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&n.index+n[0].length===r.index+r[0].length||(r=n),i.lastIndex=n.index+n[1].length+n[2].length;i.lastIndex=-1}else r=e.match(t.includePrerelease?a[s.COERCEFULL]:a[s.COERCE]);if(null===r)return null;let o=r[2],l=r[3]||"0",d=r[4]||"0",c=t.includePrerelease&&r[5]?`-${r[5]}`:"",u=t.includePrerelease&&r[6]?`+${r[6]}`:"";return i(`${o}.${l}.${d}${c}${u}`,t)}},80661,(e,t,r)=>{"use strict";t.exports=class{constructor(){this.max=1e3,this.map=new Map}get(e){let t=this.map.get(e);if(void 0!==t)return this.map.delete(e),this.map.set(e,t),t}delete(e){return this.map.delete(e)}set(e,t){if(!this.delete(e)&&void 0!==t){if(this.map.size>=this.max){let e=this.map.keys().next().value;this.delete(e)}this.map.set(e,t)}return this}}},93006,(e,t,r)=>{"use strict";let n=/\s+/g;class i{constructor(e,t){if(t=s(t),e instanceof i)if(!!t.loose===e.loose&&!!t.includePrerelease===e.includePrerelease)return e;else return new i(e.raw,t);if(e instanceof o)return this.raw=e.value,this.set=[[e]],this.formatted=void 0,this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e.trim().replace(n," "),this.set=this.raw.split("||").map(e=>this.parseRange(e.trim())).filter(e=>e.length),!this.set.length)throw TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let e=this.set[0];if(this.set=this.set.filter(e=>!b(e[0])),0===this.set.length)this.set=[e];else if(this.set.length>1){for(let e of this.set)if(1===e.length&&g(e[0])){this.set=[e];break}}}this.formatted=void 0}get range(){if(void 0===this.formatted){this.formatted="";for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+="||");let t=this.set[e];for(let e=0;e<t.length;e++)e>0&&(this.formatted+=" "),this.formatted+=t[e].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){let t=((this.options.includePrerelease&&m)|(this.options.loose&&f))+":"+e,r=a.get(t);if(r)return r;let n=this.options.loose,i=n?c[u.HYPHENRANGELOOSE]:c[u.HYPHENRANGE];l("hyphen replace",e=e.replace(i,C(this.options.includePrerelease))),l("comparator trim",e=e.replace(c[u.COMPARATORTRIM],p)),l("tilde trim",e=e.replace(c[u.TILDETRIM],h)),l("caret trim",e=e.replace(c[u.CARETTRIM],y));let s=e.split(" ").map(e=>v(e,this.options)).join(" ").split(/\s+/).map(e=>T(e,this.options));n&&(s=s.filter(e=>(l("loose invalid filter",e,this.options),!!e.match(c[u.COMPARATORLOOSE])))),l("range list",s);let d=new Map;for(let e of s.map(e=>new o(e,this.options))){if(b(e))return[e];d.set(e.value,e)}d.size>1&&d.has("")&&d.delete("");let g=[...d.values()];return a.set(t,g),g}intersects(e,t){if(!(e instanceof i))throw TypeError("a Range is required");return this.set.some(r=>K(r,t)&&e.set.some(e=>K(e,t)&&r.every(r=>e.every(e=>r.intersects(e,t)))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new d(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(D(this.set[t],e,this.options))return!0;return!1}}t.exports=i;let a=new(e.r(80661)),s=e.r(82789),o=e.r(21984),l=e.r(91130),d=e.r(20326),{safeRe:c,t:u,comparatorTrimReplace:p,tildeTrimReplace:h,caretTrimReplace:y}=e.r(70547),{FLAG_INCLUDE_PRERELEASE:m,FLAG_LOOSE:f}=e.r(38703),b=e=>"<0.0.0-0"===e.value,g=e=>""===e.value,K=(e,t)=>{let r=!0,n=e.slice(),i=n.pop();for(;r&&n.length;)r=n.every(e=>i.intersects(e,t)),i=n.pop();return r},v=(e,t)=>(l("comp",e,t),l("caret",e=I(e,t)),l("tildes",e=E(e,t)),l("xrange",e=j(e,t)),l("stars",e=A(e,t)),e),S=e=>!e||"x"===e.toLowerCase()||"*"===e,E=(e,t)=>e.trim().split(/\s+/).map(e=>k(e,t)).join(" "),k=(e,t)=>{let r=t.loose?c[u.TILDELOOSE]:c[u.TILDE];return e.replace(r,(t,r,n,i,a)=>{let s;return l("tilde",e,t,r,n,i,a),S(r)?s="":S(n)?s=`>=${r}.0.0 <${+r+1}.0.0-0`:S(i)?s=`>=${r}.${n}.0 <${r}.${+n+1}.0-0`:a?(l("replaceTilde pr",a),s=`>=${r}.${n}.${i}-${a} <${r}.${+n+1}.0-0`):s=`>=${r}.${n}.${i} <${r}.${+n+1}.0-0`,l("tilde return",s),s})},I=(e,t)=>e.trim().split(/\s+/).map(e=>w(e,t)).join(" "),w=(e,t)=>{l("caret",e,t);let r=t.loose?c[u.CARETLOOSE]:c[u.CARET],n=t.includePrerelease?"-0":"";return e.replace(r,(t,r,i,a,s)=>{let o;return l("caret",e,t,r,i,a,s),S(r)?o="":S(i)?o=`>=${r}.0.0${n} <${+r+1}.0.0-0`:S(a)?o="0"===r?`>=${r}.${i}.0${n} <${r}.${+i+1}.0-0`:`>=${r}.${i}.0${n} <${+r+1}.0.0-0`:s?(l("replaceCaret pr",s),o="0"===r?"0"===i?`>=${r}.${i}.${a}-${s} <${r}.${i}.${+a+1}-0`:`>=${r}.${i}.${a}-${s} <${r}.${+i+1}.0-0`:`>=${r}.${i}.${a}-${s} <${+r+1}.0.0-0`):(l("no pr"),o="0"===r?"0"===i?`>=${r}.${i}.${a}${n} <${r}.${i}.${+a+1}-0`:`>=${r}.${i}.${a}${n} <${r}.${+i+1}.0-0`:`>=${r}.${i}.${a} <${+r+1}.0.0-0`),l("caret return",o),o})},j=(e,t)=>(l("replaceXRanges",e,t),e.split(/\s+/).map(e=>x(e,t)).join(" ")),x=(e,t)=>{e=e.trim();let r=t.loose?c[u.XRANGELOOSE]:c[u.XRANGE];return e.replace(r,(r,n,i,a,s,o)=>{l("xRange",e,r,n,i,a,s,o);let d=S(i),c=d||S(a),u=c||S(s);return"="===n&&u&&(n=""),o=t.includePrerelease?"-0":"",d?r=">"===n||"<"===n?"<0.0.0-0":"*":n&&u?(c&&(a=0),s=0,">"===n?(n=">=",c?(i=+i+1,a=0):a=+a+1,s=0):"<="===n&&(n="<",c?i=+i+1:a=+a+1),"<"===n&&(o="-0"),r=`${n+i}.${a}.${s}${o}`):c?r=`>=${i}.0.0${o} <${+i+1}.0.0-0`:u&&(r=`>=${i}.${a}.0${o} <${i}.${+a+1}.0-0`),l("xRange return",r),r})},A=(e,t)=>(l("replaceStars",e,t),e.trim().replace(c[u.STAR],"")),T=(e,t)=>(l("replaceGTE0",e,t),e.trim().replace(c[t.includePrerelease?u.GTE0PRE:u.GTE0],"")),C=e=>(t,r,n,i,a,s,o,l,d,c,u,p)=>(r=S(n)?"":S(i)?`>=${n}.0.0${e?"-0":""}`:S(a)?`>=${n}.${i}.0${e?"-0":""}`:s?`>=${r}`:`>=${r}${e?"-0":""}`,l=S(d)?"":S(c)?`<${+d+1}.0.0-0`:S(u)?`<${d}.${+c+1}.0-0`:p?`<=${d}.${c}.${u}-${p}`:e?`<${d}.${c}.${+u+1}-0`:`<=${l}`,`${r} ${l}`.trim()),D=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(l(e[r].semver),e[r].semver!==o.ANY&&e[r].semver.prerelease.length>0){let n=e[r].semver;if(n.major===t.major&&n.minor===t.minor&&n.patch===t.patch)return!0}return!1}return!0}},21984,(e,t,r)=>{"use strict";let n=Symbol("SemVer ANY");class i{static get ANY(){return n}constructor(e,t){if(t=a(t),e instanceof i)if(!!t.loose===e.loose)return e;else e=e.value;d("comparator",e=e.trim().split(/\s+/).join(" "),t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===n?this.value="":this.value=this.operator+this.semver.version,d("comp",this)}parse(e){let t=this.options.loose?s[o.COMPARATORLOOSE]:s[o.COMPARATOR],r=e.match(t);if(!r)throw TypeError(`Invalid comparator: ${e}`);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new c(r[2],this.options.loose):this.semver=n}toString(){return this.value}test(e){if(d("Comparator.test",e,this.options.loose),this.semver===n||e===n)return!0;if("string"==typeof e)try{e=new c(e,this.options)}catch(e){return!1}return l(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof i))throw TypeError("a Comparator is required");return""===this.operator?""===this.value||new u(e.value,t).test(this.value):""===e.operator?""===e.value||new u(this.value,t).test(e.semver):!((t=a(t)).includePrerelease&&("<0.0.0-0"===this.value||"<0.0.0-0"===e.value)||!t.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0")))&&!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||l(this.semver,"<",e.semver,t)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||l(this.semver,">",e.semver,t)&&this.operator.startsWith("<")&&e.operator.startsWith(">"))}}t.exports=i;let a=e.r(82789),{safeRe:s,t:o}=e.r(70547),l=e.r(36269),d=e.r(91130),c=e.r(20326),u=e.r(93006)},70482,(e,t,r)=>{"use strict";let n=e.r(93006);t.exports=(e,t,r)=>{try{t=new n(t,r)}catch(e){return!1}return t.test(e)}},87095,(e,t,r)=>{"use strict";let n=e.r(93006);t.exports=(e,t)=>new n(e,t).set.map(e=>e.map(e=>e.value).join(" ").trim().split(" "))},92685,(e,t,r)=>{"use strict";let n=e.r(20326),i=e.r(93006);t.exports=(e,t,r)=>{let a=null,s=null,o=null;try{o=new i(t,r)}catch(e){return null}return e.forEach(e=>{o.test(e)&&(!a||-1===s.compare(e))&&(s=new n(a=e,r))}),a}},92500,(e,t,r)=>{"use strict";let n=e.r(20326),i=e.r(93006);t.exports=(e,t,r)=>{let a=null,s=null,o=null;try{o=new i(t,r)}catch(e){return null}return e.forEach(e=>{o.test(e)&&(!a||1===s.compare(e))&&(s=new n(a=e,r))}),a}},56388,(e,t,r)=>{"use strict";let n=e.r(20326),i=e.r(93006),a=e.r(56381);t.exports=(e,t)=>{e=new i(e,t);let r=new n("0.0.0");if(e.test(r)||(r=new n("0.0.0-0"),e.test(r)))return r;r=null;for(let t=0;t<e.set.length;++t){let i=e.set[t],s=null;i.forEach(e=>{let t=new n(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":(!s||a(t,s))&&(s=t);break;case"<":case"<=":break;default:throw Error(`Unexpected operation: ${e.operator}`)}}),s&&(!r||a(r,s))&&(r=s)}return r&&e.test(r)?r:null}},4934,(e,t,r)=>{"use strict";let n=e.r(93006);t.exports=(e,t)=>{try{return new n(e,t).range||"*"}catch(e){return null}}},66294,(e,t,r)=>{"use strict";let n=e.r(20326),i=e.r(21984),{ANY:a}=i,s=e.r(93006),o=e.r(70482),l=e.r(56381),d=e.r(99583),c=e.r(48467),u=e.r(87709);t.exports=(e,t,r,p)=>{let h,y,m,f,b;switch(e=new n(e,p),t=new s(t,p),r){case">":h=l,y=c,m=d,f=">",b=">=";break;case"<":h=d,y=u,m=l,f="<",b="<=";break;default:throw TypeError('Must provide a hilo val of "<" or ">"')}if(o(e,t,p))return!1;for(let r=0;r<t.set.length;++r){let n=t.set[r],s=null,o=null;if(n.forEach(e=>{e.semver===a&&(e=new i(">=0.0.0")),s=s||e,o=o||e,h(e.semver,s.semver,p)?s=e:m(e.semver,o.semver,p)&&(o=e)}),s.operator===f||s.operator===b||(!o.operator||o.operator===f)&&y(e,o.semver)||o.operator===b&&m(e,o.semver))return!1}return!0}},78757,(e,t,r)=>{"use strict";let n=e.r(66294);t.exports=(e,t,r)=>n(e,t,">",r)},56605,(e,t,r)=>{"use strict";let n=e.r(66294);t.exports=(e,t,r)=>n(e,t,"<",r)},15029,(e,t,r)=>{"use strict";let n=e.r(93006);t.exports=(e,t,r)=>(e=new n(e,r),t=new n(t,r),e.intersects(t,r))},87138,(e,t,r)=>{"use strict";let n=e.r(70482),i=e.r(4668);t.exports=(e,t,r)=>{let a=[],s=null,o=null,l=e.sort((e,t)=>i(e,t,r));for(let e of l)n(e,t,r)?(o=e,s||(s=e)):(o&&a.push([s,o]),o=null,s=null);s&&a.push([s,null]);let d=[];for(let[e,t]of a)e===t?d.push(e):t||e!==l[0]?t?e===l[0]?d.push(`<=${t}`):d.push(`${e} - ${t}`):d.push(`>=${e}`):d.push("*");let c=d.join(" || "),u="string"==typeof t.raw?t.raw:String(t);return c.length<u.length?c:t}},70414,(e,t,r)=>{"use strict";let n=e.r(93006),i=e.r(21984),{ANY:a}=i,s=e.r(70482),o=e.r(4668),l=[new i(">=0.0.0-0")],d=[new i(">=0.0.0")],c=(e,t,r)=>{let n,i,c,h,y,m,f;if(e===t)return!0;if(1===e.length&&e[0].semver===a)if(1===t.length&&t[0].semver===a)return!0;else e=r.includePrerelease?l:d;if(1===t.length&&t[0].semver===a)if(r.includePrerelease)return!0;else t=d;let b=new Set;for(let t of e)">"===t.operator||">="===t.operator?n=u(n,t,r):"<"===t.operator||"<="===t.operator?i=p(i,t,r):b.add(t.semver);if(b.size>1)return null;if(n&&i&&((c=o(n.semver,i.semver,r))>0||0===c&&(">="!==n.operator||"<="!==i.operator)))return null;for(let e of b){if(n&&!s(e,String(n),r)||i&&!s(e,String(i),r))return null;for(let n of t)if(!s(e,String(n),r))return!1;return!0}let g=!!i&&!r.includePrerelease&&!!i.semver.prerelease.length&&i.semver,K=!!n&&!r.includePrerelease&&!!n.semver.prerelease.length&&n.semver;for(let e of(g&&1===g.prerelease.length&&"<"===i.operator&&0===g.prerelease[0]&&(g=!1),t)){if(f=f||">"===e.operator||">="===e.operator,m=m||"<"===e.operator||"<="===e.operator,n){if(K&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===K.major&&e.semver.minor===K.minor&&e.semver.patch===K.patch&&(K=!1),">"===e.operator||">="===e.operator){if((h=u(n,e,r))===e&&h!==n)return!1}else if(">="===n.operator&&!s(n.semver,String(e),r))return!1}if(i){if(g&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===g.major&&e.semver.minor===g.minor&&e.semver.patch===g.patch&&(g=!1),"<"===e.operator||"<="===e.operator){if((y=p(i,e,r))===e&&y!==i)return!1}else if("<="===i.operator&&!s(i.semver,String(e),r))return!1}if(!e.operator&&(i||n)&&0!==c)return!1}return(!n||!m||!!i||0===c)&&(!i||!f||!!n||0===c)&&!K&&!g&&!0},u=(e,t,r)=>{if(!e)return t;let n=o(e.semver,t.semver,r);return n>0?e:n<0||">"===t.operator&&">="===e.operator?t:e},p=(e,t,r)=>{if(!e)return t;let n=o(e.semver,t.semver,r);return n<0?e:n>0||"<"===t.operator&&"<="===e.operator?t:e};t.exports=(e,t,r={})=>{if(e===t)return!0;e=new n(e,r),t=new n(t,r);let i=!1;e:for(let n of e.set){for(let e of t.set){let t=c(n,e,r);if(i=i||null!==t,t)continue e}if(i)return!1}return!0}},48680,(e,t,r)=>{"use strict";let n=e.r(70547),i=e.r(38703),a=e.r(20326),s=e.r(18429),o=e.r(35759),l=e.r(32),d=e.r(76730),c=e.r(96161),u=e.r(16022),p=e.r(8645),h=e.r(62196),y=e.r(52686),m=e.r(13523),f=e.r(4668),b=e.r(60808),g=e.r(98480),K=e.r(79552),v=e.r(18817),S=e.r(43007),E=e.r(56381),k=e.r(99583),I=e.r(66010),w=e.r(9282),j=e.r(87709),x=e.r(48467),A=e.r(36269),T=e.r(64166),C=e.r(21984),D=e.r(93006),O=e.r(70482),R=e.r(87095),M=e.r(92685),P=e.r(92500),N=e.r(56388),J=e.r(4934),L=e.r(66294),_=e.r(78757),F=e.r(56605),V=e.r(15029);t.exports={parse:o,valid:l,clean:d,inc:c,diff:u,major:p,minor:h,patch:y,prerelease:m,compare:f,rcompare:b,compareLoose:g,compareBuild:K,sort:v,rsort:S,gt:E,lt:k,eq:I,neq:w,gte:j,lte:x,cmp:A,coerce:T,Comparator:C,Range:D,satisfies:O,toComparators:R,maxSatisfying:M,minSatisfying:P,minVersion:N,validRange:J,outside:L,gtr:_,ltr:F,intersects:V,simplifyRange:e.r(87138),subset:e.r(70414),SemVer:a,re:n.re,src:n.src,tokens:n.t,SEMVER_SPEC_VERSION:i.SEMVER_SPEC_VERSION,RELEASE_TYPES:i.RELEASE_TYPES,compareIdentifiers:s.compareIdentifiers,rcompareIdentifiers:s.rcompareIdentifiers}},62562,(e,t,r)=>{t.exports=e.x("module",()=>require("module"))},49772,(e,t,r)=>{"use strict";let n=()=>"linux"===process.platform,i=null;t.exports={isLinux:n,getReport:()=>(!i&&(n()&&process.report||(i={})),i)}},48150,(e,t,r)=>{"use strict";let n=e.r(22734);t.exports={LDD_PATH:"/usr/bin/ldd",SELF_PATH:"/proc/self/exe",readFileSync:e=>{let t=n.openSync(e,"r"),r=Buffer.alloc(2048),i=n.readSync(t,r,0,2048,0);return n.close(t),r.subarray(0,i)},readFile:e=>new Promise((t,r)=>{n.open(e,"r",(e,i)=>{if(e)r(e);else{let e=Buffer.alloc(2048);n.read(i,e,0,2048,0,(r,a)=>{t(e.subarray(0,a)),n.close(i)})}})})}},14496,(e,t,r)=>{"use strict";t.exports={interpreterPath:e=>{if(e.length<64||0x7f454c46!==e.readUInt32BE(0)||2!==e.readUInt8(4)||1!==e.readUInt8(5))return null;let t=e.readUInt32LE(32),r=e.readUInt16LE(54),n=e.readUInt16LE(56);for(let i=0;i<n;i++){let n=t+i*r;if(3===e.readUInt32LE(n)){let t=e.readUInt32LE(n+8),r=e.readUInt32LE(n+32);return e.subarray(t,t+r).toString().replace(/\0.*$/g,"")}}return null}}},55146,(e,t,r)=>{"use strict";let n,i,a,s=e.r(33405),{isLinux:o,getReport:l}=e.r(49772),{LDD_PATH:d,SELF_PATH:c,readFile:u,readFileSync:p}=e.r(48150),{interpreterPath:h}=e.r(14496),y="getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true",m="",f=()=>m||new Promise(e=>{s.exec(y,(t,r)=>{e(m=t?" ":r)})}),b=()=>{if(!m)try{m=s.execSync(y,{encoding:"utf8"})}catch(e){m=" "}return m},g="glibc",K=/LIBC[a-z0-9 \-).]*?(\d+\.\d+)/i,v="musl",S=e=>e.includes("libc.musl-")||e.includes("ld-musl-"),E=()=>{let e=l();return e.header&&e.header.glibcVersionRuntime?g:Array.isArray(e.sharedObjects)&&e.sharedObjects.some(S)?v:null},k=e=>{let[t,r]=e.split(/[\r\n]+/);return t&&t.includes(g)?g:r&&r.includes(v)?v:null},I=e=>{if(e){if(e.includes("/ld-musl-"))return v;else if(e.includes("/ld-linux-"))return g}return null},w=e=>(e=e.toString()).includes("musl")?v:e.includes("GNU C Library")?g:null,j=async()=>{if(void 0!==i)return i;i=null;try{let e=await u(d);i=w(e)}catch(e){}return i},x=async()=>{if(void 0!==n)return n;n=null;try{let e=await u(c),t=h(e);n=I(t)}catch(e){}return n},A=async()=>{let e=null;return o()&&((e=await x())||((e=await j())||(e=E()),e||(e=k(await f())))),e},T=()=>{let e=null;return o()&&((e=(()=>{if(void 0!==n)return n;n=null;try{let e=p(c),t=h(e);n=I(t)}catch(e){}return n})())||((e=(()=>{if(void 0!==i)return i;i=null;try{let e=p(d);i=w(e)}catch(e){}return i})())||(e=E()),e||(e=k(b())))),e},C=async()=>o()&&await A()!==g,D=async()=>{if(void 0!==a)return a;a=null;try{let e=(await u(d)).match(K);e&&(a=e[1])}catch(e){}return a},O=()=>{let e=l();return e.header&&e.header.glibcVersionRuntime?e.header.glibcVersionRuntime:null},R=e=>e.trim().split(/\s+/)[1],M=e=>{let[t,r,n]=e.split(/[\r\n]+/);return t&&t.includes(g)?R(t):r&&n&&r.includes(v)?R(n):null};t.exports={GLIBC:g,MUSL:v,family:A,familySync:T,isNonGlibcLinux:C,isNonGlibcLinuxSync:()=>o()&&T()!==g,version:async()=>{let e=null;return o()&&((e=await D())||(e=O()),e||(e=M(await f()))),e},versionSync:()=>{let e=null;return o()&&((e=(()=>{if(void 0!==a)return a;a=null;try{let e=p(d).match(K);e&&(a=e[1])}catch(e){}return a})())||(e=O()),e||(e=M(b()))),e}}},56943,(e,t,r)=>{var n=e.r(22734),i=e.r(14747),a=e.r(92509),s=e.r(46786),o="function"==typeof __webpack_require__?__non_webpack_require__:e.t,l=process.config&&process.config.variables||{},d=!!process.env.PREBUILDS_ONLY,c=process.versions,u=c.modules;(c.deno||process.isBun)&&(u="unsupported");var p=process.versions&&process.versions.electron||process.env.ELECTRON_RUN_AS_NODE?"electron":process.versions&&process.versions.nw?"node-webkit":"node",h=process.env.npm_config_arch||s.arch(),y=process.env.npm_config_platform||s.platform(),m=process.env.LIBC||(!function(t){if("linux"!==t)return!1;let{familySync:r,MUSL:n}=e.r(55146);return r()===n}(y)?"glibc":"musl"),f=process.env.ARM_VERSION||("arm64"===h?"8":l.arm_version)||"",b=(c.uv||"").split(".")[0];function g(e){return o(g.resolve(e))}function K(e){try{return n.readdirSync(e)}catch(e){return[]}}function v(e,t){var r=K(e).filter(t);return r[0]&&i.join(e,r[0])}function S(e){return/\.node$/.test(e)}function E(e){var t=e.split("-");if(2===t.length){var r=t[0],n=t[1].split("+");if(r&&n.length&&n.every(Boolean))return{name:e,platform:r,architectures:n}}}function k(e,t){return function(r){return null!=r&&r.platform===e&&r.architectures.includes(t)}}function I(e,t){return e.architectures.length-t.architectures.length}function w(e){var t=e.split("."),r=t.pop(),n={file:e,specificity:0};if("node"===r){for(var i=0;i<t.length;i++){var a=t[i];if("node"===a||"electron"===a||"node-webkit"===a)n.runtime=a;else if("napi"===a)n.napi=!0;else if("abi"===a.slice(0,3))n.abi=a.slice(3);else if("uv"===a.slice(0,2))n.uv=a.slice(2);else if("armv"===a.slice(0,4))n.armv=a.slice(4);else{if("glibc"!==a&&"musl"!==a)continue;n.libc=a}n.specificity++}return n}}function j(e,t){return function(r){var n;return null!=r&&(r.runtime===e||!!("node"===(n=r).runtime&&n.napi))&&(r.abi===t||!!r.napi)&&(!r.uv||r.uv===b)&&(!r.armv||r.armv===f)&&(!r.libc||r.libc===m)&&!0}}function x(e){return function(t,r){return t.runtime!==r.runtime?t.runtime===e?-1:1:t.abi!==r.abi?t.abi?-1:1:t.specificity!==r.specificity?t.specificity>r.specificity?-1:1:0}}t.exports=g,g.resolve=g.path=function(t){t=i.resolve(t||".");var r,n,s="";try{var l=(s=o(i.join(t,"package.json")).name).toUpperCase().replace(/-/g,"_");process.env[l+"_PREBUILD"]&&(t=process.env[l+"_PREBUILD"])}catch(e){r=e}if(!d){var c=v(i.join(t,"build/Release"),S);if(c)return c;var g=v(i.join(t,"build/Debug"),S);if(g)return g}var A=R(t);if(A)return A;var T=R(i.dirname(process.execPath));if(T)return T;var C=("@"==s[0]?"":"@"+s+"/")+s+"-"+y+"-"+h;try{var D=i.dirname(e.r(62562).createRequire(a.pathToFileURL(i.join(t,"package.json"))).resolve(C));return M(D)}catch(e){n=e}let O="No native build was found for "+["platform="+y,"arch="+h,"runtime="+p,"abi="+u,"uv="+b,f?"armv="+f:"","libc="+m,"node="+process.versions.node,process.versions.electron?"electron="+process.versions.electron:"","function"==typeof __webpack_require__?"webpack=true":""].filter(Boolean).join(" ")+"\n    attempted loading from: "+t+" and package: "+C+"\n";throw r&&(O+="Error finding package.json: "+r.message+"\n"),n&&(O+="Error resolving package: "+n.message+"\n"),Error(O);function R(e){var t=K(i.join(e,"prebuilds")).map(E).filter(k(y,h)).sort(I)[0];if(t)return M(i.join(e,"prebuilds",t.name))}function M(e){var t=K(e).map(w).filter(j(p,u)).sort(x(p))[0];if(t)return i.join(e,t.file)}},g.parseTags=w,g.matchTags=j,g.compareTags=x,g.parseTuple=E,g.matchTuple=k,g.compareTuples=I},80583,(e,t,r)=>{let n="function"==typeof __webpack_require__?__non_webpack_require__:e.t;"function"==typeof n.addon?t.exports=n.addon.bind(n):t.exports=e.r(56943)},70156,(e,t,r)=>{t.exports=e.r(80583)("/ROOT/node_modules/msgpackr-extract")},95057,(e,t,r)=>{"use strict";let n;Object.defineProperty(r,"__esModule",{value:!0});class i extends Error{}class a extends i{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class s extends i{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class o extends i{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class l extends i{}class d extends i{constructor(e){super(`Invalid unit ${e}`)}}class c extends i{}class u extends i{constructor(){super("Zone is an abstract class")}}let p="numeric",h="short",y="long",m={year:p,month:p,day:p},f={year:p,month:h,day:p},b={year:p,month:h,day:p,weekday:h},g={year:p,month:y,day:p},K={year:p,month:y,day:p,weekday:y},v={hour:p,minute:p},S={hour:p,minute:p,second:p},E={hour:p,minute:p,second:p,timeZoneName:h},k={hour:p,minute:p,second:p,timeZoneName:y},I={hour:p,minute:p,hourCycle:"h23"},w={hour:p,minute:p,second:p,hourCycle:"h23"},j={hour:p,minute:p,second:p,hourCycle:"h23",timeZoneName:h},x={hour:p,minute:p,second:p,hourCycle:"h23",timeZoneName:y},A={year:p,month:p,day:p,hour:p,minute:p},T={year:p,month:p,day:p,hour:p,minute:p,second:p},C={year:p,month:h,day:p,hour:p,minute:p},D={year:p,month:h,day:p,hour:p,minute:p,second:p},O={year:p,month:h,day:p,weekday:h,hour:p,minute:p},R={year:p,month:y,day:p,hour:p,minute:p,timeZoneName:h},M={year:p,month:y,day:p,hour:p,minute:p,second:p,timeZoneName:h},P={year:p,month:y,day:p,weekday:y,hour:p,minute:p,timeZoneName:y},N={year:p,month:y,day:p,weekday:y,hour:p,minute:p,second:p,timeZoneName:y};class J{get type(){throw new u}get name(){throw new u}get ianaName(){return this.name}get isUniversal(){throw new u}offsetName(e,t){throw new u}formatOffset(e,t){throw new u}offset(e){throw new u}equals(e){throw new u}get isValid(){throw new u}}let L=null;class _ extends J{static get instance(){return null===L&&(L=new _),L}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:t,locale:r}){return e6(e,t,r)}formatOffset(e,t){return e9(this.offset(e),t)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return"system"===e.type}get isValid(){return!0}}let F=new Map,V={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6},G=new Map;class q extends J{static create(e){let t=G.get(e);return void 0===t&&G.set(e,t=new q(e)),t}static resetCache(){G.clear(),F.clear()}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(e){return!1}}constructor(e){super(),this.zoneName=e,this.valid=q.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:t,locale:r}){return e6(e,t,r,this.name)}formatOffset(e,t){return e9(this.offset(e),t)}offset(e){var t;let r;if(!this.valid)return NaN;let n=new Date(e);if(isNaN(n))return NaN;let i=(t=this.name,void 0===(r=F.get(t))&&(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),F.set(t,r)),r),[a,s,o,l,d,c,u]=i.formatToParts?function(e,t){let r=e.formatToParts(t),n=[];for(let e=0;e<r.length;e++){let{type:t,value:i}=r[e],a=V[t];"era"===t?n[a]=i:eJ(a)||(n[a]=parseInt(i,10))}return n}(i,n):function(e,t){let r=e.format(t).replace(/\u200E/g,""),[,n,i,a,s,o,l,d]=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r);return[a,n,i,s,o,l,d]}(i,n);"BC"===l&&(a=-Math.abs(a)+1);let p=e0({year:a,month:s,day:o,hour:24===d?0:d,minute:c,second:u,millisecond:0}),h=+n,y=h%1e3;return(p-(h-=y>=0?y:1e3+y))/6e4}equals(e){return"iana"===e.type&&e.name===this.name}get isValid(){return this.valid}}let Y={},z=new Map;function B(e,t={}){let r=JSON.stringify([e,t]),n=z.get(r);return void 0===n&&(n=new Intl.DateTimeFormat(e,t),z.set(r,n)),n}let W=new Map,U=new Map,$=null,Q=new Map;function H(e){let t=Q.get(e);return void 0===t&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Q.set(e,t)),t}let Z=new Map;function X(e,t,r,n){let i=e.listingMode();return"error"===i?null:"en"===i?r(t):n(t)}class ee{constructor(e,t,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;let{padTo:n,floor:i,...a}=r;if(!t||Object.keys(a).length>0){let t={useGrouping:!1,...r};r.padTo>0&&(t.minimumIntegerDigits=r.padTo),this.inf=function(e,t={}){let r=JSON.stringify([e,t]),n=W.get(r);return void 0===n&&(n=new Intl.NumberFormat(e,t),W.set(r,n)),n}(e,t)}}format(e){if(!this.inf)return eB(this.floor?Math.floor(e):eQ(e,3),this.padTo);{let t=this.floor?Math.floor(e):e;return this.inf.format(t)}}}class et{constructor(e,t,r){let n;if(this.opts=r,this.originalZone=void 0,this.opts.timeZone)this.dt=e;else if("fixed"===e.zone.type){let t=-1*(e.offset/60),r=t>=0?`Etc/GMT+${t}`:`Etc/GMT${t}`;0!==e.offset&&q.create(r).valid?(n=r,this.dt=e):(n="UTC",this.dt=0===e.offset?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else"system"===e.zone.type?this.dt=e:"iana"===e.zone.type?(this.dt=e,n=e.zone.name):(n="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);let i={...this.opts};i.timeZone=i.timeZone||n,this.dtf=B(t,i)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(e=>{if("timeZoneName"!==e.type)return e;{let t=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...e,value:t}}}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class er{constructor(e,t,r){this.opts={style:"long",...r},!t&&eF()&&(this.rtf=function(e,t={}){let{base:r,...n}=t,i=JSON.stringify([e,n]),a=U.get(i);return void 0===a&&(a=new Intl.RelativeTimeFormat(e,t),U.set(i,a)),a}(e,r))}format(e,t){return this.rtf?this.rtf.format(e,t):function(e,t,r="always",n=!1){let i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},a=-1===["hours","minutes","seconds"].indexOf(e);if("auto"===r&&a){let r="days"===e;switch(t){case 1:return r?"tomorrow":`next ${i[e][0]}`;case -1:return r?"yesterday":`last ${i[e][0]}`;case 0:return r?"today":`this ${i[e][0]}`}}let s=Object.is(t,-0)||t<0,o=Math.abs(t),l=1===o,d=i[e],c=n?l?d[1]:d[2]||d[1]:l?i[e][0]:e;return s?`${o} ${c} ago`:`in ${o} ${c}`}(t,e,this.opts.numeric,"long"!==this.opts.style)}formatToParts(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]}}let en={firstDay:1,minimalDays:4,weekend:[6,7]};class ei{static fromOpts(e){return ei.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,t,r,n,i=!1){let a=e||eE.defaultLocale,s=a||(i?"en-US":$||($=new Intl.DateTimeFormat().resolvedOptions().locale)),o=t||eE.defaultNumberingSystem;return new ei(s,o,r||eE.defaultOutputCalendar,eY(n)||eE.defaultWeekSettings,a)}static resetCache(){$=null,z.clear(),W.clear(),U.clear(),Q.clear(),Z.clear()}static fromObject({locale:e,numberingSystem:t,outputCalendar:r,weekSettings:n}={}){return ei.create(e,t,r,n)}constructor(e,t,r,n,i){let[a,s,o]=function(e){let t=e.indexOf("-x-");-1!==t&&(e=e.substring(0,t));let r=e.indexOf("-u-");if(-1===r)return[e];{let t,n;try{t=B(e).resolvedOptions(),n=e}catch(a){let i=e.substring(0,r);t=B(i).resolvedOptions(),n=i}let{numberingSystem:i,calendar:a}=t;return[n,i,a]}}(e);this.locale=a,this.numberingSystem=t||s||null,this.outputCalendar=r||o||null,this.weekSettings=n,this.intl=function(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return null==this.fastNumbersCached&&(this.fastNumbersCached=(!this.numberingSystem||"latn"===this.numberingSystem)&&("latn"===this.numberingSystem||!this.locale||this.locale.startsWith("en")||"latn"===H(this.locale).numberingSystem)),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),t=(null===this.numberingSystem||"latn"===this.numberingSystem)&&(null===this.outputCalendar||"gregory"===this.outputCalendar);return e&&t?"en":"intl"}clone(e){return e&&0!==Object.getOwnPropertyNames(e).length?ei.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,eY(e.weekSettings)||this.weekSettings,e.defaultToEN||!1):this}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,t=!1){return X(this,e,tn,()=>{let r="ja"===this.intl||this.intl.startsWith("ja-"),n=(t&=!r)?{month:e,day:"numeric"}:{month:e},i=t?"format":"standalone";if(!this.monthsCache[i][e]){let t=r?e=>this.dtFormatter(e,n).format():e=>this.extract(e,n,"month");this.monthsCache[i][e]=function(e){let t=[];for(let r=1;r<=12;r++){let n=rU.utc(2009,r,1);t.push(e(n))}return t}(t)}return this.monthsCache[i][e]})}weekdays(e,t=!1){return X(this,e,to,()=>{let r=t?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},n=t?"format":"standalone";return this.weekdaysCache[n][e]||(this.weekdaysCache[n][e]=function(e){let t=[];for(let r=1;r<=7;r++){let n=rU.utc(2016,11,13+r);t.push(e(n))}return t}(e=>this.extract(e,r,"weekday"))),this.weekdaysCache[n][e]})}meridiems(){return X(this,void 0,()=>tl,()=>{if(!this.meridiemCache){let e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[rU.utc(2016,11,13,9),rU.utc(2016,11,13,19)].map(t=>this.extract(t,e,"dayperiod"))}return this.meridiemCache})}eras(e){return X(this,e,tp,()=>{let t={era:e};return this.eraCache[e]||(this.eraCache[e]=[rU.utc(-40,1,1),rU.utc(2017,1,1)].map(e=>this.extract(e,t,"era"))),this.eraCache[e]})}extract(e,t,r){let n=this.dtFormatter(e,t).formatToParts().find(e=>e.type.toLowerCase()===r);return n?n.value:null}numberFormatter(e={}){return new ee(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,t={}){return new et(e,this.intl,t)}relFormatter(e={}){return new er(this.intl,this.isEnglish(),e)}listFormatter(e={}){return function(e,t={}){let r=JSON.stringify([e,t]),n=Y[r];return n||(n=new Intl.ListFormat(e,t),Y[r]=n),n}(this.intl,e)}isEnglish(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||H(this.intl).locale.startsWith("en-us")}getWeekSettings(){if(this.weekSettings)return this.weekSettings;if(!eV())return en;var e=this.locale;let t=Z.get(e);if(!t){let r=new Intl.Locale(e);"minimalDays"in(t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo)||(t={...en,...t}),Z.set(e,t)}return t}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let ea=null;class es extends J{static get utcInstance(){return null===ea&&(ea=new es(0)),ea}static instance(e){return 0===e?es.utcInstance:new es(e)}static parseSpecifier(e){if(e){let t=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(t)return new es(e4(t[1],t[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return 0===this.fixed?"UTC":`UTC${e9(this.fixed,"narrow")}`}get ianaName(){return 0===this.fixed?"Etc/UTC":`Etc/GMT${e9(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,t){return e9(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return"fixed"===e.type&&e.fixed===this.fixed}get isValid(){return!0}}class eo extends J{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function el(e,t){if(eJ(e)||null===e)return t;if(e instanceof J)return e;if("string"==typeof e){let r=e.toLowerCase();return"default"===r?t:"local"===r||"system"===r?_.instance:"utc"===r||"gmt"===r?es.utcInstance:es.parseSpecifier(r)||q.create(e)}if(eL(e))return es.instance(e);if("object"==typeof e&&"offset"in e&&"function"==typeof e.offset)return e;else return new eo(e)}let ed={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},ec={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},eu=ed.hanidec.replace(/[\[|\]]/g,"").split(""),ep=new Map;function eh({numberingSystem:e},t=""){let r=e||"latn",n=ep.get(r);void 0===n&&(n=new Map,ep.set(r,n));let i=n.get(t);return void 0===i&&(i=RegExp(`${ed[r]}${t}`),n.set(t,i)),i}let ey=()=>Date.now(),em="system",ef=null,eb=null,eg=null,eK=60,ev,eS=null;class eE{static get now(){return ey}static set now(e){ey=e}static set defaultZone(e){em=e}static get defaultZone(){return el(em,_.instance)}static get defaultLocale(){return ef}static set defaultLocale(e){ef=e}static get defaultNumberingSystem(){return eb}static set defaultNumberingSystem(e){eb=e}static get defaultOutputCalendar(){return eg}static set defaultOutputCalendar(e){eg=e}static get defaultWeekSettings(){return eS}static set defaultWeekSettings(e){eS=eY(e)}static get twoDigitCutoffYear(){return eK}static set twoDigitCutoffYear(e){eK=e%100}static get throwOnInvalid(){return ev}static set throwOnInvalid(e){ev=e}static resetCaches(){ei.resetCache(),q.resetCache(),rU.resetCache(),ep.clear()}}class ek{constructor(e,t){this.reason=e,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}let eI=[0,31,59,90,120,151,181,212,243,273,304,334],ew=[0,31,60,91,121,152,182,213,244,274,305,335];function ej(e,t){return new ek("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function ex(e,t,r){let n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);let i=n.getUTCDay();return 0===i?7:i}function eA(e,t){let r=eH(e)?ew:eI,n=r.findIndex(e=>e<t),i=t-r[n];return{month:n+1,day:i}}function eT(e,t){return(e-t+7)%7+1}function eC(e,t=4,r=1){let{year:n,month:i,day:a}=e,s=a+(eH(n)?ew:eI)[i-1],o=eT(ex(n,i,a),r),l=Math.floor((s-o+14-t)/7),d;return l<1?l=e2(d=n-1,t,r):l>e2(n,t,r)?(d=n+1,l=1):d=n,{weekYear:d,weekNumber:l,weekday:o,...e7(e)}}function eD(e,t=4,r=1){let{weekYear:n,weekNumber:i,weekday:a}=e,s=eT(ex(n,1,t),r),o=eZ(n),l=7*i+a-s-7+t,d;l<1?l+=eZ(d=n-1):l>o?(d=n+1,l-=eZ(n)):d=n;let{month:c,day:u}=eA(d,l);return{year:d,month:c,day:u,...e7(e)}}function eO(e){let{year:t,month:r,day:n}=e,i=n+(eH(t)?ew:eI)[r-1];return{year:t,ordinal:i,...e7(e)}}function eR(e){let{year:t,ordinal:r}=e,{month:n,day:i}=eA(t,r);return{year:t,month:n,day:i,...e7(e)}}function eM(e,t){if(!(!eJ(e.localWeekday)||!eJ(e.localWeekNumber)||!eJ(e.localWeekYear)))return{minDaysInFirstWeek:4,startOfWeek:1};if(!eJ(e.weekday)||!eJ(e.weekNumber)||!eJ(e.weekYear))throw new l("Cannot mix locale-based week fields with ISO-based week fields");return eJ(e.localWeekday)||(e.weekday=e.localWeekday),eJ(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),eJ(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}function eP(e){let t=e_(e.year),r=ez(e.month,1,12),n=ez(e.day,1,eX(e.year,e.month));return t?r?!n&&ej("day",e.day):ej("month",e.month):ej("year",e.year)}function eN(e){let{hour:t,minute:r,second:n,millisecond:i}=e,a=ez(t,0,23)||24===t&&0===r&&0===n&&0===i,s=ez(r,0,59),o=ez(n,0,59),l=ez(i,0,999);return a?s?o?!l&&ej("millisecond",i):ej("second",n):ej("minute",r):ej("hour",t)}function eJ(e){return void 0===e}function eL(e){return"number"==typeof e}function e_(e){return"number"==typeof e&&e%1==0}function eF(){try{return"undefined"!=typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function eV(){try{return"undefined"!=typeof Intl&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch(e){return!1}}function eG(e,t,r){if(0!==e.length)return e.reduce((e,n)=>{let i=[t(n),n];return e&&r(e[0],i[0])===e[0]?e:i},null)[1]}function eq(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function eY(e){if(null==e)return null;if("object"!=typeof e)throw new c("Week settings must be an object");if(!ez(e.firstDay,1,7)||!ez(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(e=>!ez(e,1,7)))throw new c("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function ez(e,t,r){return e_(e)&&e>=t&&e<=r}function eB(e,t=2){return e<0?"-"+(""+-e).padStart(t,"0"):(""+e).padStart(t,"0")}function eW(e){if(!eJ(e)&&null!==e&&""!==e)return parseInt(e,10)}function eU(e){if(!eJ(e)&&null!==e&&""!==e)return parseFloat(e)}function e$(e){if(!eJ(e)&&null!==e&&""!==e)return Math.floor(1e3*parseFloat("0."+e))}function eQ(e,t,r="round"){let n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw RangeError(`Value rounding ${r} is out of range`)}}function eH(e){return e%4==0&&(e%100!=0||e%400==0)}function eZ(e){return eH(e)?366:365}function eX(e,t){var r;let n=(r=t-1)-12*Math.floor(r/12)+1;return 2===n?eH(e+(t-n)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function e0(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t)).setUTCFullYear(e.year,e.month-1,e.day),+t}function e1(e,t,r){return-eT(ex(e,1,t),r)+t-1}function e2(e,t=4,r=1){let n=e1(e,t,r),i=e1(e+1,t,r);return(eZ(e)-n+i)/7}function e3(e){return e>99?e:e>eE.twoDigitCutoffYear?1900+e:2e3+e}function e6(e,t,r,n=null){let i=new Date(e),a={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(a.timeZone=n);let s={timeZoneName:t,...a},o=new Intl.DateTimeFormat(r,s).formatToParts(i).find(e=>"timezonename"===e.type.toLowerCase());return o?o.value:null}function e4(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);let n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return 60*r+i}function e5(e){let t=Number(e);if("boolean"==typeof e||""===e||!Number.isFinite(t))throw new c(`Invalid unit value ${e}`);return t}function e8(e,t){let r={};for(let n in e)if(eq(e,n)){let i=e[n];if(null==i)continue;r[t(n)]=e5(i)}return r}function e9(e,t){let r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${eB(r,2)}:${eB(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${eB(r,2)}${eB(n,2)}`;default:throw RangeError(`Value format ${t} is out of range for property format`)}}function e7(e){return["hour","minute","second","millisecond"].reduce((t,r)=>(t[r]=e[r],t),{})}let te=["January","February","March","April","May","June","July","August","September","October","November","December"],tt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tr=["J","F","M","A","M","J","J","A","S","O","N","D"];function tn(e){switch(e){case"narrow":return[...tr];case"short":return[...tt];case"long":return[...te];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}let ti=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ta=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ts=["M","T","W","T","F","S","S"];function to(e){switch(e){case"narrow":return[...ts];case"short":return[...ta];case"long":return[...ti];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}let tl=["AM","PM"],td=["Before Christ","Anno Domini"],tc=["BC","AD"],tu=["B","A"];function tp(e){switch(e){case"narrow":return[...tu];case"short":return[...tc];case"long":return[...td];default:return null}}function th(e,t){let r="";for(let n of e)n.literal?r+=n.val:r+=t(n.val);return r}let ty={D:m,DD:f,DDD:g,DDDD:K,t:v,tt:S,ttt:E,tttt:k,T:I,TT:w,TTT:j,TTTT:x,f:A,ff:C,fff:R,ffff:P,F:T,FF:D,FFF:M,FFFF:N};class tm{static create(e,t={}){return new tm(e,t)}static parseFormat(e){let t=null,r="",n=!1,i=[];for(let a=0;a<e.length;a++){let s=e.charAt(a);"'"===s?((r.length>0||n)&&i.push({literal:n||/^\s+$/.test(r),val:""===r?"'":r}),t=null,r="",n=!n):n||s===t?r+=s:(r.length>0&&i.push({literal:/^\s+$/.test(r),val:r}),r=s,t=s)}return r.length>0&&i.push({literal:n||/^\s+$/.test(r),val:r}),i}static macroTokenToFormatOpts(e){return ty[e]}constructor(e,t){this.opts=t,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,t){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...t}).format()}dtFormatter(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t})}formatDateTime(e,t){return this.dtFormatter(e,t).format()}formatDateTimeParts(e,t){return this.dtFormatter(e,t).formatToParts()}formatInterval(e,t){return this.dtFormatter(e.start,t).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,t){return this.dtFormatter(e,t).resolvedOptions()}num(e,t=0,r){if(this.opts.forceSimple)return eB(e,t);let n={...this.opts};return t>0&&(n.padTo=t),r&&(n.signDisplay=r),this.loc.numberFormatter(n).format(e)}formatDateTimeFromString(e,t){let r="en"===this.loc.listingMode(),n=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,i=(t,r)=>this.loc.extract(e,t,r),a=t=>e.isOffsetFixed&&0===e.offset&&t.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,t.format):"",s=(t,n)=>r?tn(t)[e.month-1]:i(n?{month:t}:{month:t,day:"numeric"},"month"),o=(t,n)=>r?to(t)[e.weekday-1]:i(n?{weekday:t}:{weekday:t,month:"long",day:"numeric"},"weekday"),l=t=>{let r=tm.macroTokenToFormatOpts(t);return r?this.formatWithSystemDefault(e,r):t},d=t=>r?tp(t)[e.year<0?0:1]:i({era:t},"era"),c=t=>{switch(t){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12==0?12:e.hour%12);case"hh":return this.num(e.hour%12==0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return r?tl[e.hour<12?0:1]:i({hour:"numeric",hourCycle:"h12"},"dayperiod");case"d":return n?i({day:"numeric"},"day"):this.num(e.day);case"dd":return n?i({day:"2-digit"},"day"):this.num(e.day,2);case"c":case"E":return this.num(e.weekday);case"ccc":return o("short",!0);case"cccc":return o("long",!0);case"ccccc":return o("narrow",!0);case"EEE":return o("short",!1);case"EEEE":return o("long",!1);case"EEEEE":return o("narrow",!1);case"L":return n?i({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return n?i({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return s("short",!0);case"LLLL":return s("long",!0);case"LLLLL":return s("narrow",!0);case"M":return n?i({month:"numeric"},"month"):this.num(e.month);case"MM":return n?i({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return s("short",!1);case"MMMM":return s("long",!1);case"MMMMM":return s("narrow",!1);case"y":return n?i({year:"numeric"},"year"):this.num(e.year);case"yy":return n?i({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return n?i({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return n?i({year:"numeric"},"year"):this.num(e.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return l(t)}};return th(tm.parseFormat(t),c)}formatDurationFromString(e,t){let r="negativeLargestOnly"===this.opts.signMode?-1:1,n=e=>{switch(e[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},i=(e,t)=>i=>{let a=n(i);if(!a)return i;{let n,s=t.isNegativeDuration&&a!==t.largestUnit?r:1;return n="negativeLargestOnly"===this.opts.signMode&&a!==t.largestUnit?"never":"all"===this.opts.signMode?"always":"auto",this.num(e.get(a)*s,i.length,n)}},a=tm.parseFormat(t),s=a.reduce((e,{literal:t,val:r})=>t?e:e.concat(r),[]),o=e.shiftTo(...s.map(n).filter(e=>e)),l={isNegativeDuration:o<0,largestUnit:Object.keys(o.values)[0]};return th(a,i(o,l))}}let tf=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function tb(...e){let t=e.reduce((e,t)=>e+t.source,"");return RegExp(`^${t}$`)}function tg(...e){return t=>e.reduce(([e,r,n],i)=>{let[a,s,o]=i(t,n);return[{...e,...a},s||r,o]},[{},null,1]).slice(0,2)}function tK(e,...t){if(null==e)return[null,null];for(let[r,n]of t){let t=r.exec(e);if(t)return n(t)}return[null,null]}function tv(...e){return(t,r)=>{let n,i={};for(n=0;n<e.length;n++)i[e[n]]=eW(t[r+n]);return[i,null,r+n]}}let tS=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,tE=`(?:${tS.source}?(?:\\[(${tf.source})\\])?)?`,tk=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,tI=RegExp(`${tk.source}${tE}`),tw=RegExp(`(?:[Tt]${tI.source})?`),tj=tv("weekYear","weekNumber","weekDay"),tx=tv("year","ordinal"),tA=RegExp(`${tk.source} ?(?:${tS.source}|(${tf.source}))?`),tT=RegExp(`(?: ${tA.source})?`);function tC(e,t,r){let n=e[t];return eJ(n)?r:eW(n)}function tD(e,t){return[{hours:tC(e,t,0),minutes:tC(e,t+1,0),seconds:tC(e,t+2,0),milliseconds:e$(e[t+3])},null,t+4]}function tO(e,t){let r=!e[t]&&!e[t+1],n=e4(e[t+1],e[t+2]);return[{},r?null:es.instance(n),t+3]}function tR(e,t){return[{},e[t]?q.create(e[t]):null,t+1]}let tM=RegExp(`^T?${tk.source}$`),tP=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function tN(e){let[t,r,n,i,a,s,o,l,d]=e,c="-"===t[0],u=l&&"-"===l[0],p=(e,t=!1)=>void 0!==e&&(t||e&&c)?-e:e;return[{years:p(eU(r)),months:p(eU(n)),weeks:p(eU(i)),days:p(eU(a)),hours:p(eU(s)),minutes:p(eU(o)),seconds:p(eU(l),"-0"===l),milliseconds:p(e$(d),u)}]}let tJ={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function tL(e,t,r,n,i,a,s){let o={year:2===t.length?e3(eW(t)):eW(t),month:tt.indexOf(r)+1,day:eW(n),hour:eW(i),minute:eW(a)};return s&&(o.second=eW(s)),e&&(o.weekday=e.length>3?ti.indexOf(e)+1:ta.indexOf(e)+1),o}let t_=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function tF(e){let[,t,r,n,i,a,s,o,l,d,c,u]=e;return[tL(t,i,n,r,a,s,o),new es(l?tJ[l]:d?0:e4(c,u))]}let tV=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,tG=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,tq=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function tY(e){let[,t,r,n,i,a,s,o]=e;return[tL(t,i,n,r,a,s,o),es.utcInstance]}function tz(e){let[,t,r,n,i,a,s,o]=e;return[tL(t,o,r,n,i,a,s),es.utcInstance]}let tB=tb(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,tw),tW=tb(/(\d{4})-?W(\d\d)(?:-?(\d))?/,tw),tU=tb(/(\d{4})-?(\d{3})/,tw),t$=tb(tI),tQ=tg(function(e,t){return[{year:tC(e,t),month:tC(e,t+1,1),day:tC(e,t+2,1)},null,t+3]},tD,tO,tR),tH=tg(tj,tD,tO,tR),tZ=tg(tx,tD,tO,tR),tX=tg(tD,tO,tR),t0=tg(tD),t1=tb(/(\d{4})-(\d\d)-(\d\d)/,tT),t2=tb(tA),t3=tg(tD,tO,tR),t6="Invalid Duration",t4={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},t5={years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6},...t4},t8={years:{quarters:4,months:12,weeks:52.1775,days:365.2425,hours:8765.82,minutes:525949.2,seconds:0x1e18558,milliseconds:31556952e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:7889238,milliseconds:7889238e3},months:{weeks:30.436875/7,days:30.436875,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3},...t4},t9=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],t7=t9.slice(0).reverse();function re(e,t,r=!1){return new ri({values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix})}function rt(e,t){var r;let n=null!=(r=t.milliseconds)?r:0;for(let r of t7.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function rr(e,t){let r=0>rt(e,t)?-1:1;t9.reduceRight((n,i)=>{if(eJ(t[i]))return n;if(n){let a=t[n]*r,s=e[i][n],o=Math.floor(a/s);t[i]+=o*r,t[n]-=o*s*r}return i},null),t9.reduce((r,n)=>{if(eJ(t[n]))return r;if(r){let i=t[r]%1;t[r]-=i,t[n]+=i*e[r][n]}return n},null)}function rn(e){let t={};for(let[r,n]of Object.entries(e))0!==n&&(t[r]=n);return t}class ri{constructor(e){let t="longterm"===e.conversionAccuracy,r=t?t8:t5;e.matrix&&(r=e.matrix),this.values=e.values,this.loc=e.loc||ei.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(e,t){return ri.fromObject({milliseconds:e},t)}static fromObject(e,t={}){if(null==e||"object"!=typeof e)throw new c(`Duration.fromObject: argument expected to be an object, got ${null===e?"null":typeof e}`);return new ri({values:e8(e,ri.normalizeUnit),loc:ei.fromObject(t),conversionAccuracy:t.conversionAccuracy,matrix:t.matrix})}static fromDurationLike(e){if(eL(e))return ri.fromMillis(e);if(ri.isDuration(e))return e;if("object"==typeof e)return ri.fromObject(e);throw new c(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,t){let[r]=tK(e,[tP,tN]);return r?ri.fromObject(r,t):ri.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,t){let[r]=tK(e,[tM,t0]);return r?ri.fromObject(r,t):ri.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,t=null){if(!e)throw new c("need to specify a reason the Duration is invalid");let r=e instanceof ek?e:new ek(e,t);if(!eE.throwOnInvalid)return new ri({invalid:r});throw new o(r)}static normalizeUnit(e){let t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e?e.toLowerCase():e];if(!t)throw new d(e);return t}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,t={}){let r={...t,floor:!1!==t.round&&!1!==t.floor};return this.isValid?tm.create(this.loc,r).formatDurationFromString(this,e):t6}toHuman(e={}){if(!this.isValid)return t6;let t=!1!==e.showZeros,r=t9.map(r=>{let n=this.values[r];return eJ(n)||0===n&&!t?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:r.slice(0,-1)}).format(n)}).filter(e=>e);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return 0!==this.years&&(e+=this.years+"Y"),(0!==this.months||0!==this.quarters)&&(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),(0!==this.hours||0!==this.minutes||0!==this.seconds||0!==this.milliseconds)&&(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),(0!==this.seconds||0!==this.milliseconds)&&(e+=eQ(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;let t=this.toMillis();return t<0||t>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1},rU.fromMillis(t,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?rt(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let t=ri.fromDurationLike(e),r={};for(let e of t9)(eq(t.values,e)||eq(this.values,e))&&(r[e]=t.get(e)+this.get(e));return re(this,{values:r},!0)}minus(e){if(!this.isValid)return this;let t=ri.fromDurationLike(e);return this.plus(t.negate())}mapUnits(e){if(!this.isValid)return this;let t={};for(let r of Object.keys(this.values))t[r]=e5(e(this.values[r],r));return re(this,{values:t},!0)}get(e){return this[ri.normalizeUnit(e)]}set(e){return this.isValid?re(this,{values:{...this.values,...e8(e,ri.normalizeUnit)}}):this}reconfigure({locale:e,numberingSystem:t,conversionAccuracy:r,matrix:n}={}){return re(this,{loc:this.loc.clone({locale:e,numberingSystem:t}),matrix:n,conversionAccuracy:r})}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return rr(this.matrix,e),re(this,{values:e},!0)}rescale(){return this.isValid?re(this,{values:rn(this.normalize().shiftToAll().toObject())},!0):this}shiftTo(...e){let t;if(!this.isValid||0===e.length)return this;e=e.map(e=>ri.normalizeUnit(e));let r={},n={},i=this.toObject();for(let a of t9)if(e.indexOf(a)>=0){t=a;let e=0;for(let t in n)e+=this.matrix[t][a]*n[t],n[t]=0;eL(i[a])&&(e+=i[a]);let s=Math.trunc(e);r[a]=s,n[a]=(1e3*e-1e3*s)/1e3}else eL(i[a])&&(n[a]=i[a]);for(let e in n)0!==n[e]&&(r[t]+=e===t?n[e]:n[e]/this.matrix[t][e]);return rr(this.matrix,r),re(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let e={};for(let t of Object.keys(this.values))e[t]=0===this.values[t]?0:-this.values[t];return re(this,{values:e},!0)}removeZeros(){return this.isValid?re(this,{values:rn(this.values)},!0):this}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;for(let n of t9){var t,r;if(t=this.values[n],r=e.values[n],void 0===t||0===t?void 0!==r&&0!==r:t!==r)return!1}return!0}}let ra="Invalid Interval";class rs{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,t=null){if(!e)throw new c("need to specify a reason the Interval is invalid");let r=e instanceof ek?e:new ek(e,t);if(!eE.throwOnInvalid)return new rs({invalid:r});throw new s(r)}static fromDateTimes(e,t){var r,n;let i=r$(e),a=r$(t),s=(r=i,n=a,r&&r.isValid?n&&n.isValid?n<r?rs.invalid("end before start",`The end of an interval must be after its start, but you had start=${r.toISO()} and end=${n.toISO()}`):null:rs.invalid("missing or invalid end"):rs.invalid("missing or invalid start"));return null==s?new rs({start:i,end:a}):s}static after(e,t){let r=ri.fromDurationLike(t),n=r$(e);return rs.fromDateTimes(n,n.plus(r))}static before(e,t){let r=ri.fromDurationLike(t),n=r$(e);return rs.fromDateTimes(n.minus(r),n)}static fromISO(e,t){let[r,n]=(e||"").split("/",2);if(r&&n){let e,i,a,s;try{i=(e=rU.fromISO(r,t)).isValid}catch(e){i=!1}try{s=(a=rU.fromISO(n,t)).isValid}catch(e){s=!1}if(i&&s)return rs.fromDateTimes(e,a);if(i){let r=ri.fromISO(n,t);if(r.isValid)return rs.after(e,r)}else if(s){let e=ri.fromISO(r,t);if(e.isValid)return rs.before(a,e)}}return rs.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return null===this.invalidReason}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds",t){let r;if(!this.isValid)return NaN;let n=this.start.startOf(e,t);return Math.floor((r=(r=null!=t&&t.useLocaleWeeks?this.end.reconfigure({locale:n.locale}):this.end).startOf(e,t)).diff(n,e).get(e))+(r.valueOf()!==this.end.valueOf())}hasSame(e){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,e))}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return!!this.isValid&&this.s>e}isBefore(e){return!!this.isValid&&this.e<=e}contains(e){return!!this.isValid&&this.s<=e&&this.e>e}set({start:e,end:t}={}){return this.isValid?rs.fromDateTimes(e||this.s,t||this.e):this}splitAt(...e){if(!this.isValid)return[];let t=e.map(r$).filter(e=>this.contains(e)).sort((e,t)=>e.toMillis()-t.toMillis()),r=[],{s:n}=this,i=0;for(;n<this.e;){let e=t[i]||this.e,a=+e>+this.e?this.e:e;r.push(rs.fromDateTimes(n,a)),n=a,i+=1}return r}splitBy(e){let t=ri.fromDurationLike(e);if(!this.isValid||!t.isValid||0===t.as("milliseconds"))return[];let{s:r}=this,n=1,i,a=[];for(;r<this.e;){let e=this.start.plus(t.mapUnits(e=>e*n));i=+e>+this.e?this.e:e,a.push(rs.fromDateTimes(r,i)),r=i,n+=1}return a}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return!!this.isValid&&+this.e==+e.s}abutsEnd(e){return!!this.isValid&&+e.e==+this.s}engulfs(e){return!!this.isValid&&this.s<=e.s&&this.e>=e.e}equals(e){return!!this.isValid&&!!e.isValid&&this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;let t=this.s>e.s?this.s:e.s,r=this.e<e.e?this.e:e.e;return t>=r?null:rs.fromDateTimes(t,r)}union(e){if(!this.isValid)return this;let t=this.s<e.s?this.s:e.s,r=this.e>e.e?this.e:e.e;return rs.fromDateTimes(t,r)}static merge(e){let[t,r]=e.sort((e,t)=>e.s-t.s).reduce(([e,t],r)=>t?t.overlaps(r)||t.abutsStart(r)?[e,t.union(r)]:[e.concat([t]),r]:[e,r],[[],null]);return r&&t.push(r),t}static xor(e){let t=null,r=0,n=[],i=e.map(e=>[{time:e.s,type:"s"},{time:e.e,type:"e"}]);for(let e of Array.prototype.concat(...i).sort((e,t)=>e.time-t.time))1===(r+="s"===e.type?1:-1)?t=e.time:(t&&+t!=+e.time&&n.push(rs.fromDateTimes(t,e.time)),t=null);return rs.merge(n)}difference(...e){return rs.xor([this].concat(e)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:ra}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=m,t={}){return this.isValid?tm.create(this.s.loc.clone(t),e).formatInterval(this):ra}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:ra}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:ra}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:ra}toFormat(e,{separator:t=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`:ra}toDuration(e,t){return this.isValid?this.e.diff(this.s,e,t):ri.invalid(this.invalidReason)}mapEndpoints(e){return rs.fromDateTimes(e(this.s),e(this.e))}}class ro{static hasDST(e=eE.defaultZone){let t=rU.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(e){return q.isValidZone(e)}static normalizeZone(e){return el(e,eE.defaultZone)}static getStartOfWeek({locale:e=null,locObj:t=null}={}){return(t||ei.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:t=null}={}){return(t||ei.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:t=null}={}){return(t||ei.create(e)).getWeekendDays().slice()}static months(e="long",{locale:t=null,numberingSystem:r=null,locObj:n=null,outputCalendar:i="gregory"}={}){return(n||ei.create(t,r,i)).months(e)}static monthsFormat(e="long",{locale:t=null,numberingSystem:r=null,locObj:n=null,outputCalendar:i="gregory"}={}){return(n||ei.create(t,r,i)).months(e,!0)}static weekdays(e="long",{locale:t=null,numberingSystem:r=null,locObj:n=null}={}){return(n||ei.create(t,r,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:t=null,numberingSystem:r=null,locObj:n=null}={}){return(n||ei.create(t,r,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return ei.create(e).meridiems()}static eras(e="short",{locale:t=null}={}){return ei.create(t,null,"gregory").eras(e)}static features(){return{relative:eF(),localeWeek:eV()}}}function rl(e,t){let r=e=>e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(ri.fromMillis(n).as("days"))}function rd(e,t=e=>e){return{regex:e,deser:([e])=>t(function(e){let t=parseInt(e,10);if(!isNaN(t))return t;t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if(-1!==e[r].search(ed.hanidec))t+=eu.indexOf(e[r]);else for(let e in ec){let[r,i]=ec[e];n>=r&&n<=i&&(t+=n-r)}}return parseInt(t,10)}(e))}}let rc=String.fromCharCode(160),ru=`[ ${rc}]`,rp=RegExp(ru,"g");function rh(e){return e.replace(/\./g,"\\.?").replace(rp,ru)}function ry(e){return e.replace(/\./g,"").replace(rp," ").toLowerCase()}function rm(e,t){return null===e?null:{regex:RegExp(e.map(rh).join("|")),deser:([r])=>e.findIndex(e=>ry(r)===ry(e))+t}}function rf(e,t){return{regex:e,deser:([,e,t])=>e4(e,t),groups:t}}function rb(e){return{regex:e,deser:([e])=>e}}let rg={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}},rK=null;function rv(e,t){return Array.prototype.concat(...e.map(e=>(function(e,t){if(e.literal)return e;let r=rk(tm.macroTokenToFormatOpts(e.val),t);return null==r||r.includes(void 0)?e:r})(e,t)))}class rS{constructor(e,t){if(this.locale=e,this.format=t,this.tokens=rv(tm.parseFormat(t),e),this.units=this.tokens.map(t=>(function(e,t){let r=eh(t),n=eh(t,"{2}"),i=eh(t,"{3}"),a=eh(t,"{4}"),s=eh(t,"{6}"),o=eh(t,"{1,2}"),l=eh(t,"{1,3}"),d=eh(t,"{1,6}"),c=eh(t,"{1,9}"),u=eh(t,"{2,4}"),p=eh(t,"{4,6}"),h=e=>({regex:RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")),deser:([e])=>e,literal:!0}),y=(y=>{if(e.literal)return h(y);switch(y.val){case"G":return rm(t.eras("short"),0);case"GG":return rm(t.eras("long"),0);case"y":return rd(d);case"yy":case"kk":return rd(u,e3);case"yyyy":case"kkkk":return rd(a);case"yyyyy":return rd(p);case"yyyyyy":return rd(s);case"M":case"L":case"d":case"H":case"h":case"m":case"q":case"s":case"W":return rd(o);case"MM":case"LL":case"dd":case"HH":case"hh":case"mm":case"qq":case"ss":case"WW":return rd(n);case"MMM":return rm(t.months("short",!0),1);case"MMMM":return rm(t.months("long",!0),1);case"LLL":return rm(t.months("short",!1),1);case"LLLL":return rm(t.months("long",!1),1);case"o":case"S":return rd(l);case"ooo":case"SSS":return rd(i);case"u":return rb(c);case"uu":return rb(o);case"uuu":case"E":case"c":return rd(r);case"a":return rm(t.meridiems(),0);case"EEE":return rm(t.weekdays("short",!1),1);case"EEEE":return rm(t.weekdays("long",!1),1);case"ccc":return rm(t.weekdays("short",!0),1);case"cccc":return rm(t.weekdays("long",!0),1);case"Z":case"ZZ":return rf(RegExp(`([+-]${o.source})(?::(${n.source}))?`),2);case"ZZZ":return rf(RegExp(`([+-]${o.source})(${n.source})?`),2);case"z":return rb(/[a-z_+-/]{1,256}?/i);case" ":return rb(/[^\S\n\r]/);default:return h(y)}})(e)||{invalidReason:"missing Intl.DateTimeFormat.formatToParts support"};return y.token=e,y})(t,e)),this.disqualifyingUnit=this.units.find(e=>e.invalidReason),!this.disqualifyingUnit){let[e,t]=function(e){let t=e.map(e=>e.regex).reduce((e,t)=>`${e}(${t.source})`,"");return[`^${t}$`,e]}(this.units);this.regex=RegExp(e,"i"),this.handlers=t}}explainFromTokens(e){if(!this.isValid)return{input:e,tokens:this.tokens,invalidReason:this.invalidReason};{let t,r,[n,i]=function(e,t,r){let n=e.match(t);if(!n)return[n,{}];{let e={},t=1;for(let i in r)if(eq(r,i)){let a=r[i],s=a.groups?a.groups+1:1;!a.literal&&a.token&&(e[a.token.val[0]]=a.deser(n.slice(t,t+s))),t+=s}return[n,e]}}(e,this.regex,this.handlers),[a,s,o]=i?(r=null,eJ(i.z)||(r=q.create(i.z)),eJ(i.Z)||(r||(r=new es(i.Z)),t=i.Z),eJ(i.q)||(i.M=(i.q-1)*3+1),eJ(i.h)||(i.h<12&&1===i.a?i.h+=12:12===i.h&&0===i.a&&(i.h=0)),0===i.G&&i.y&&(i.y=-i.y),eJ(i.u)||(i.S=e$(i.u)),[Object.keys(i).reduce((e,t)=>{let r=(e=>{switch(e){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}})(t);return r&&(e[r]=i[t]),e},{}),r,t]):[null,null,void 0];if(eq(i,"a")&&eq(i,"H"))throw new l("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:i,result:a,zone:s,specificOffset:o}}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function rE(e,t,r){return new rS(e,r).explainFromTokens(t)}function rk(e,t){if(!e)return null;let r=tm.create(t,e).dtFormatter((rK||(rK=rU.fromMillis(0x16a2e5618e3)),rK)),n=r.formatToParts(),i=r.resolvedOptions();return n.map(t=>(function(e,t,r){let{type:n,value:i}=e;if("literal"===n){let e=/^\s+$/.test(i);return{literal:!e,val:e?" ":i}}let a=t[n],s=n;"hour"===n&&(s=null!=t.hour12?t.hour12?"hour12":"hour24":null!=t.hourCycle?"h11"===t.hourCycle||"h12"===t.hourCycle?"hour12":"hour24":r.hour12?"hour12":"hour24");let o=rg[s];if("object"==typeof o&&(o=o[a]),o)return{literal:!1,val:o}})(t,e,i))}let rI="Invalid DateTime";function rw(e){return new ek("unsupported zone",`the zone "${e.name}" is not supported`)}function rj(e){return null===e.weekData&&(e.weekData=eC(e.c)),e.weekData}function rx(e){return null===e.localWeekData&&(e.localWeekData=eC(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function rA(e,t){let r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new rU({...r,...t,old:r})}function rT(e,t,r){let n=e-60*t*1e3,i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*6e4;let a=r.offset(n);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}function rC(e,t){let r=new Date(e+=60*t*1e3);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function rD(e,t){let r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+3*Math.trunc(t.quarters),a={...e.c,year:n,month:i,day:Math.min(e.c.day,eX(n,i))+Math.trunc(t.days)+7*Math.trunc(t.weeks)},s=ri.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),[o,l]=rT(e0(a),r,e.zone);return 0!==s&&(o+=s,l=e.zone.offset(o)),{ts:o,o:l}}function rO(e,t,r,n,i,a){let{setZone:s,zone:o}=r;if((!e||0===Object.keys(e).length)&&!t)return rU.invalid(new ek("unparsable",`the input "${i}" can't be parsed as ${n}`));{let n=rU.fromObject(e,{...r,zone:t||o,specificOffset:a});return s?n:n.setZone(o)}}function rR(e,t,r=!0){return e.isValid?tm.create(ei.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function rM(e,t,r){let n=e.c.year>9999||e.c.year<0,i="";if(n&&e.c.year>=0&&(i+="+"),i+=eB(e.c.year,n?6:4),"year"===r)return i;if(t){if(i+="-",i+=eB(e.c.month),"month"===r)return i;i+="-"}else if(i+=eB(e.c.month),"month"===r)return i;return i+eB(e.c.day)}function rP(e,t,r,n,i,a,s){let o=!r||0!==e.c.millisecond||0!==e.c.second,l="";switch(s){case"day":case"month":case"year":break;default:if(l+=eB(e.c.hour),"hour"===s)break;if(t){if(l+=":",l+=eB(e.c.minute),"minute"===s)break;o&&(l+=":",l+=eB(e.c.second))}else{if(l+=eB(e.c.minute),"minute"===s)break;o&&(l+=eB(e.c.second))}if("second"===s)break;o&&(!n||0!==e.c.millisecond)&&(l+=".",l+=eB(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&0===e.offset&&!a?l+="Z":e.o<0?(l+="-",l+=eB(Math.trunc(-e.o/60)),l+=":",l+=eB(Math.trunc(-e.o%60))):(l+="+",l+=eB(Math.trunc(e.o/60)),l+=":",l+=eB(Math.trunc(e.o%60)))),a&&(l+="["+e.zone.ianaName+"]"),l}let rN={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},rJ={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},rL={ordinal:1,hour:0,minute:0,second:0,millisecond:0},r_=["year","month","day","hour","minute","second","millisecond"],rF=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],rV=["year","ordinal","hour","minute","second","millisecond"];function rG(e){let t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new d(e);return t}function rq(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return rG(e)}}function rY(e,t){let r,i,a=el(t.zone,eE.defaultZone);if(!a.isValid)return rU.invalid(rw(a));let s=ei.fromObject(t);if(eJ(e.year))r=eE.now();else{for(let t of r_)eJ(e[t])&&(e[t]=rN[t]);let t=eP(e)||eN(e);if(t)return rU.invalid(t);let s=function(e){if(void 0===n&&(n=eE.now()),"iana"!==e.type)return e.offset(n);let t=e.name,r=rW.get(t);return void 0===r&&(r=e.offset(n),rW.set(t,r)),r}(a);[r,i]=rT(e0(e),s,a)}return new rU({ts:r,zone:a,loc:s,o:i})}function rz(e,t,r){let n=!!eJ(r.round)||r.round,i=eJ(r.rounding)?"trunc":r.rounding,a=(e,a)=>(e=eQ(e,n||r.calendary?0:2,r.calendary?"round":i),t.loc.clone(r).relFormatter(r).format(e,a)),s=n=>r.calendary?t.hasSame(e,n)?0:t.startOf(n).diff(e.startOf(n),n).get(n):t.diff(e,n).get(n);if(r.unit)return a(s(r.unit),r.unit);for(let e of r.units){let t=s(e);if(Math.abs(t)>=1)return a(t,e)}return a(e>t?-0:0,r.units[r.units.length-1])}function rB(e){let t={},r;return e.length>0&&"object"==typeof e[e.length-1]?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let rW=new Map;class rU{constructor(e){let t=e.zone||eE.defaultZone,r=e.invalid||(Number.isNaN(e.ts)?new ek("invalid input"):null)||(t.isValid?null:rw(t));this.ts=eJ(e.ts)?eE.now():e.ts;let n=null,i=null;if(!r)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t))[n,i]=[e.old.c,e.old.o];else{let a=eL(e.o)&&!e.old?e.o:t.offset(this.ts);n=(r=Number.isNaN((n=rC(this.ts,a)).year)?new ek("invalid input"):null)?null:n,i=r?null:a}this._zone=t,this.loc=e.loc||ei.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=n,this.o=i,this.isLuxonDateTime=!0}static now(){return new rU({})}static local(){let[e,t]=rB(arguments),[r,n,i,a,s,o,l]=t;return rY({year:r,month:n,day:i,hour:a,minute:s,second:o,millisecond:l},e)}static utc(){let[e,t]=rB(arguments),[r,n,i,a,s,o,l]=t;return e.zone=es.utcInstance,rY({year:r,month:n,day:i,hour:a,minute:s,second:o,millisecond:l},e)}static fromJSDate(e,t={}){let r="[object Date]"===Object.prototype.toString.call(e)?e.valueOf():NaN;if(Number.isNaN(r))return rU.invalid("invalid input");let n=el(t.zone,eE.defaultZone);return n.isValid?new rU({ts:r,zone:n,loc:ei.fromObject(t)}):rU.invalid(rw(n))}static fromMillis(e,t={}){if(eL(e))if(e<-864e13||e>864e13)return rU.invalid("Timestamp out of range");else return new rU({ts:e,zone:el(t.zone,eE.defaultZone),loc:ei.fromObject(t)});throw new c(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,t={}){if(eL(e))return new rU({ts:1e3*e,zone:el(t.zone,eE.defaultZone),loc:ei.fromObject(t)});throw new c("fromSeconds requires a numerical input")}static fromObject(e,t={}){var r;e=e||{};let n=el(t.zone,eE.defaultZone);if(!n.isValid)return rU.invalid(rw(n));let i=ei.fromObject(t),a=e8(e,rq),{minDaysInFirstWeek:s,startOfWeek:o}=eM(a,i),d=eE.now(),c=eJ(t.specificOffset)?n.offset(d):t.specificOffset,u=!eJ(a.ordinal),p=!eJ(a.year),h=!eJ(a.month)||!eJ(a.day),y=p||h,m=a.weekYear||a.weekNumber;if((y||u)&&m)throw new l("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(h&&u)throw new l("Can't mix ordinal dates with month/day");let f=m||a.weekday&&!y,b,g,K=rC(d,c);f?(b=rF,g=rJ,K=eC(K,s,o)):u?(b=rV,g=rL,K=eO(K)):(b=r_,g=rN);let v=!1;for(let e of b)eJ(a[e])?v?a[e]=g[e]:a[e]=K[e]:v=!0;let S=(f?function(e,t=4,r=1){let n=e_(e.weekYear),i=ez(e.weekNumber,1,e2(e.weekYear,t,r)),a=ez(e.weekday,1,7);return n?i?!a&&ej("weekday",e.weekday):ej("week",e.weekNumber):ej("weekYear",e.weekYear)}(a,s,o):u?function(e){let t=e_(e.year),r=ez(e.ordinal,1,eZ(e.year));return t?!r&&ej("ordinal",e.ordinal):ej("year",e.year)}(a):eP(a))||eN(a);if(S)return rU.invalid(S);let[E,k]=(r=f?eD(a,s,o):u?eR(a):a,rT(e0(r),c,n)),I=new rU({ts:E,zone:n,o:k,loc:i});return a.weekday&&y&&e.weekday!==I.weekday?rU.invalid("mismatched weekday",`you can't specify both a weekday of ${a.weekday} and a date of ${I.toISO()}`):I.isValid?I:rU.invalid(I.invalid)}static fromISO(e,t={}){let[r,n]=tK(e,[tB,tQ],[tW,tH],[tU,tZ],[t$,tX]);return rO(r,n,t,"ISO 8601",e)}static fromRFC2822(e,t={}){let[r,n]=tK(e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim(),[t_,tF]);return rO(r,n,t,"RFC 2822",e)}static fromHTTP(e,t={}){let[r,n]=tK(e,[tV,tY],[tG,tY],[tq,tz]);return rO(r,n,t,"HTTP",t)}static fromFormat(e,t,r={}){if(eJ(e)||eJ(t))throw new c("fromFormat requires an input string and a format");let{locale:n=null,numberingSystem:i=null}=r,[a,s,o,l]=function(e,t,r){let{result:n,zone:i,specificOffset:a,invalidReason:s}=rE(e,t,r);return[n,i,a,s]}(ei.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0}),e,t);return l?rU.invalid(l):rO(a,s,r,`format ${t}`,e,o)}static fromString(e,t,r={}){return rU.fromFormat(e,t,r)}static fromSQL(e,t={}){let[r,n]=tK(e,[t1,tQ],[t2,t3]);return rO(r,n,t,"SQL",e)}static invalid(e,t=null){if(!e)throw new c("need to specify a reason the DateTime is invalid");let r=e instanceof ek?e:new ek(e,t);if(!eE.throwOnInvalid)return new rU({invalid:r});throw new a(r)}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,t={}){let r=rk(e,ei.fromObject(t));return r?r.map(e=>e?e.val:null).join(""):null}static expandFormat(e,t={}){return rv(tm.parseFormat(e),ei.fromObject(t)).map(e=>e.val).join("")}static resetCache(){n=void 0,rW.clear()}get(e){return this[e]}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?rj(this).weekYear:NaN}get weekNumber(){return this.isValid?rj(this).weekNumber:NaN}get weekday(){return this.isValid?rj(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?rx(this).weekday:NaN}get localWeekNumber(){return this.isValid?rx(this).weekNumber:NaN}get localWeekYear(){return this.isValid?rx(this).weekYear:NaN}get ordinal(){return this.isValid?eO(this.c).ordinal:NaN}get monthShort(){return this.isValid?ro.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?ro.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?ro.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?ro.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=e0(this.c),t=this.zone.offset(e-864e5),r=this.zone.offset(e+864e5),n=this.zone.offset(e-6e4*t),i=this.zone.offset(e-6e4*r);if(n===i)return[this];let a=e-6e4*n,s=e-6e4*i,o=rC(a,n),l=rC(s,i);return o.hour===l.hour&&o.minute===l.minute&&o.second===l.second&&o.millisecond===l.millisecond?[rA(this,{ts:a}),rA(this,{ts:s})]:[this]}get isInLeapYear(){return eH(this.year)}get daysInMonth(){return eX(this.year,this.month)}get daysInYear(){return this.isValid?eZ(this.year):NaN}get weeksInWeekYear(){return this.isValid?e2(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?e2(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){let{locale:t,numberingSystem:r,calendar:n}=tm.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t,numberingSystem:r,outputCalendar:n}}toUTC(e=0,t={}){return this.setZone(es.instance(e),t)}toLocal(){return this.setZone(eE.defaultZone)}setZone(e,{keepLocalTime:t=!1,keepCalendarTime:r=!1}={}){if((e=el(e,eE.defaultZone)).equals(this.zone))return this;{if(!e.isValid)return rU.invalid(rw(e));let i=this.ts;if(t||r){var n;let t=e.offset(this.ts),r=this.toObject();[i]=(n=e,rT(e0(r),t,n))}return rA(this,{ts:i,zone:e})}}reconfigure({locale:e,numberingSystem:t,outputCalendar:r}={}){return rA(this,{loc:this.loc.clone({locale:e,numberingSystem:t,outputCalendar:r})})}setLocale(e){return this.reconfigure({locale:e})}set(e){var t,r,n;let i;if(!this.isValid)return this;let a=e8(e,rq),{minDaysInFirstWeek:s,startOfWeek:o}=eM(a,this.loc),d=!eJ(a.weekYear)||!eJ(a.weekNumber)||!eJ(a.weekday),c=!eJ(a.ordinal),u=!eJ(a.year),p=!eJ(a.month)||!eJ(a.day),h=a.weekYear||a.weekNumber;if((u||p||c)&&h)throw new l("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(p&&c)throw new l("Can't mix ordinal dates with month/day");d?i=eD({...eC(this.c,s,o),...a},s,o):eJ(a.ordinal)?(i={...this.toObject(),...a},eJ(a.day)&&(i.day=Math.min(eX(i.year,i.month),i.day))):i=eR({...eO(this.c),...a});let[y,m]=(t=i,r=this.o,n=this.zone,rT(e0(t),r,n));return rA(this,{ts:y,o:m})}plus(e){return this.isValid?rA(this,rD(this,ri.fromDurationLike(e))):this}minus(e){return this.isValid?rA(this,rD(this,ri.fromDurationLike(e).negate())):this}startOf(e,{useLocaleWeeks:t=!1}={}){if(!this.isValid)return this;let r={},n=ri.normalizeUnit(e);switch(n){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0}if("weeks"===n)if(t){let e=this.loc.getStartOfWeek(),{weekday:t}=this;t<e&&(r.weekNumber=this.weekNumber-1),r.weekday=e}else r.weekday=1;return"quarters"===n&&(r.month=(Math.ceil(this.month/3)-1)*3+1),this.set(r)}endOf(e,t){return this.isValid?this.plus({[e]:1}).startOf(e,t).minus(1):this}toFormat(e,t={}){return this.isValid?tm.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):rI}toLocaleString(e=m,t={}){return this.isValid?tm.create(this.loc.clone(t),e).formatDateTime(this):rI}toLocaleParts(e={}){return this.isValid?tm.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:t=!1,suppressMilliseconds:r=!1,includeOffset:n=!0,extendedZone:i=!1,precision:a="milliseconds"}={}){if(!this.isValid)return null;a=rG(a);let s="extended"===e,o=rM(this,s,a);return r_.indexOf(a)>=3&&(o+="T"),o+=rP(this,s,t,r,n,i,a)}toISODate({format:e="extended",precision:t="day"}={}){return this.isValid?rM(this,"extended"===e,rG(t)):null}toISOWeekDate(){return rR(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:t=!1,includeOffset:r=!0,includePrefix:n=!1,extendedZone:i=!1,format:a="extended",precision:s="milliseconds"}={}){return this.isValid?(s=rG(s),(n&&r_.indexOf(s)>=3?"T":"")+rP(this,"extended"===a,t,e,r,i,s)):null}toRFC2822(){return rR(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return rR(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?rM(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:t=!1,includeOffsetSpace:r=!0}={}){let n="HH:mm:ss.SSS";return(t||e)&&(r&&(n+=" "),t?n+="z":e&&(n+="ZZ")),rR(this,n,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():rI}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let t={...this.c};return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,t="milliseconds",r={}){if(!this.isValid||!e.isValid)return ri.invalid("created by diffing an invalid DateTime");let n={locale:this.locale,numberingSystem:this.numberingSystem,...r},i=(Array.isArray(t)?t:[t]).map(ri.normalizeUnit),a=e.valueOf()>this.valueOf(),s=function(e,t,r,n){let[i,a,s,o]=function(e,t,r){let n,i,a={},s=e;for(let[o,l]of[["years",(e,t)=>t.year-e.year],["quarters",(e,t)=>t.quarter-e.quarter+(t.year-e.year)*4],["months",(e,t)=>t.month-e.month+(t.year-e.year)*12],["weeks",(e,t)=>{let r=rl(e,t);return(r-r%7)/7}],["days",rl]])r.indexOf(o)>=0&&(n=o,a[o]=l(e,t),(i=s.plus(a))>t?(a[o]--,(e=s.plus(a))>t&&(i=e,a[o]--,e=s.plus(a))):e=i);return[e,a,i,n]}(e,t,r),l=t-i,d=r.filter(e=>["hours","minutes","seconds","milliseconds"].indexOf(e)>=0);0===d.length&&(s<t&&(s=i.plus({[o]:1})),s!==i&&(a[o]=(a[o]||0)+l/(s-i)));let c=ri.fromObject(a,n);return d.length>0?ri.fromMillis(l,n).shiftTo(...d).plus(c):c}(a?this:e,a?e:this,i,n);return a?s.negate():s}diffNow(e="milliseconds",t={}){return this.diff(rU.now(),e,t)}until(e){return this.isValid?rs.fromDateTimes(this,e):this}hasSame(e,t,r){if(!this.isValid)return!1;let n=e.valueOf(),i=this.setZone(e.zone,{keepLocalTime:!0});return i.startOf(t,r)<=n&&n<=i.endOf(t,r)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;let t=e.base||rU.fromObject({},{zone:this.zone}),r=e.padding?this<t?-e.padding:e.padding:0,n=["years","months","days","hours","minutes","seconds"],i=e.unit;return Array.isArray(e.unit)&&(n=e.unit,i=void 0),rz(t,this.plus(r),{...e,numeric:"always",units:n,unit:i})}toRelativeCalendar(e={}){return this.isValid?rz(e.base||rU.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(rU.isDateTime))throw new c("min requires all arguments be DateTimes");return eG(e,e=>e.valueOf(),Math.min)}static max(...e){if(!e.every(rU.isDateTime))throw new c("max requires all arguments be DateTimes");return eG(e,e=>e.valueOf(),Math.max)}static fromFormatExplain(e,t,r={}){let{locale:n=null,numberingSystem:i=null}=r;return rE(ei.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0}),e,t)}static fromStringExplain(e,t,r={}){return rU.fromFormatExplain(e,t,r)}static buildFormatParser(e,t={}){let{locale:r=null,numberingSystem:n=null}=t;return new rS(ei.fromOpts({locale:r,numberingSystem:n,defaultToEN:!0}),e)}static fromFormatParser(e,t,r={}){if(eJ(e)||eJ(t))throw new c("fromFormatParser requires an input string and a format parser");let{locale:n=null,numberingSystem:i=null}=r,a=ei.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0});if(!a.equals(t.locale))throw new c(`fromFormatParser called with a locale of ${a}, but the format parser was created for ${t.locale}`);let{result:s,zone:o,specificOffset:l,invalidReason:d}=t.explainFromTokens(e);return d?rU.invalid(d):rO(s,o,r,`format ${t.format}`,e,l)}static get DATE_SHORT(){return m}static get DATE_MED(){return f}static get DATE_MED_WITH_WEEKDAY(){return b}static get DATE_FULL(){return g}static get DATE_HUGE(){return K}static get TIME_SIMPLE(){return v}static get TIME_WITH_SECONDS(){return S}static get TIME_WITH_SHORT_OFFSET(){return E}static get TIME_WITH_LONG_OFFSET(){return k}static get TIME_24_SIMPLE(){return I}static get TIME_24_WITH_SECONDS(){return w}static get TIME_24_WITH_SHORT_OFFSET(){return j}static get TIME_24_WITH_LONG_OFFSET(){return x}static get DATETIME_SHORT(){return A}static get DATETIME_SHORT_WITH_SECONDS(){return T}static get DATETIME_MED(){return C}static get DATETIME_MED_WITH_SECONDS(){return D}static get DATETIME_MED_WITH_WEEKDAY(){return O}static get DATETIME_FULL(){return R}static get DATETIME_FULL_WITH_SECONDS(){return M}static get DATETIME_HUGE(){return P}static get DATETIME_HUGE_WITH_SECONDS(){return N}}function r$(e){if(rU.isDateTime(e))return e;if(e&&e.valueOf&&eL(e.valueOf()))return rU.fromJSDate(e);if(e&&"object"==typeof e)return rU.fromObject(e);throw new c(`Unknown datetime argument: ${e}, of type ${typeof e}`)}r.DateTime=rU,r.Duration=ri,r.FixedOffsetZone=es,r.IANAZone=q,r.Info=ro,r.Interval=rs,r.InvalidZone=eo,r.Settings=eE,r.SystemZone=_,r.VERSION="3.7.2",r.Zone=J},54418,(e,t,r)=>{"use strict";var n=e.r(95057);function i(e,t){var r={zone:t};if(e?e instanceof i?this._date=e._date:e instanceof Date?this._date=n.DateTime.fromJSDate(e,r):"number"==typeof e?this._date=n.DateTime.fromMillis(e,r):"string"==typeof e&&(this._date=n.DateTime.fromISO(e,r),this._date.isValid||(this._date=n.DateTime.fromRFC2822(e,r)),this._date.isValid||(this._date=n.DateTime.fromSQL(e,r)),this._date.isValid||(this._date=n.DateTime.fromFormat(e,"EEE, d MMM yyyy HH:mm:ss",r))):this._date=n.DateTime.local(),!this._date||!this._date.isValid)throw Error("CronDate: unhandled timestamp: "+JSON.stringify(e));t&&t!==this._date.zoneName&&(this._date=this._date.setZone(t))}i.prototype.addYear=function(){this._date=this._date.plus({years:1})},i.prototype.addMonth=function(){this._date=this._date.plus({months:1}).startOf("month")},i.prototype.addDay=function(){this._date=this._date.plus({days:1}).startOf("day")},i.prototype.addHour=function(){var e=this._date;this._date=this._date.plus({hours:1}).startOf("hour"),this._date<=e&&(this._date=this._date.plus({hours:1}))},i.prototype.addMinute=function(){var e=this._date;this._date=this._date.plus({minutes:1}).startOf("minute"),this._date<e&&(this._date=this._date.plus({hours:1}))},i.prototype.addSecond=function(){var e=this._date;this._date=this._date.plus({seconds:1}).startOf("second"),this._date<e&&(this._date=this._date.plus({hours:1}))},i.prototype.subtractYear=function(){this._date=this._date.minus({years:1})},i.prototype.subtractMonth=function(){this._date=this._date.minus({months:1}).endOf("month").startOf("second")},i.prototype.subtractDay=function(){this._date=this._date.minus({days:1}).endOf("day").startOf("second")},i.prototype.subtractHour=function(){var e=this._date;this._date=this._date.minus({hours:1}).endOf("hour").startOf("second"),this._date>=e&&(this._date=this._date.minus({hours:1}))},i.prototype.subtractMinute=function(){var e=this._date;this._date=this._date.minus({minutes:1}).endOf("minute").startOf("second"),this._date>e&&(this._date=this._date.minus({hours:1}))},i.prototype.subtractSecond=function(){var e=this._date;this._date=this._date.minus({seconds:1}).startOf("second"),this._date>e&&(this._date=this._date.minus({hours:1}))},i.prototype.getDate=function(){return this._date.day},i.prototype.getFullYear=function(){return this._date.year},i.prototype.getDay=function(){var e=this._date.weekday;return 7==e?0:e},i.prototype.getMonth=function(){return this._date.month-1},i.prototype.getHours=function(){return this._date.hour},i.prototype.getMinutes=function(){return this._date.minute},i.prototype.getSeconds=function(){return this._date.second},i.prototype.getMilliseconds=function(){return this._date.millisecond},i.prototype.getTime=function(){return this._date.valueOf()},i.prototype.getUTCDate=function(){return this._getUTC().day},i.prototype.getUTCFullYear=function(){return this._getUTC().year},i.prototype.getUTCDay=function(){var e=this._getUTC().weekday;return 7==e?0:e},i.prototype.getUTCMonth=function(){return this._getUTC().month-1},i.prototype.getUTCHours=function(){return this._getUTC().hour},i.prototype.getUTCMinutes=function(){return this._getUTC().minute},i.prototype.getUTCSeconds=function(){return this._getUTC().second},i.prototype.toISOString=function(){return this._date.toUTC().toISO()},i.prototype.toJSON=function(){return this._date.toJSON()},i.prototype.setDate=function(e){this._date=this._date.set({day:e})},i.prototype.setFullYear=function(e){this._date=this._date.set({year:e})},i.prototype.setDay=function(e){this._date=this._date.set({weekday:e})},i.prototype.setMonth=function(e){this._date=this._date.set({month:e+1})},i.prototype.setHours=function(e){this._date=this._date.set({hour:e})},i.prototype.setMinutes=function(e){this._date=this._date.set({minute:e})},i.prototype.setSeconds=function(e){this._date=this._date.set({second:e})},i.prototype.setMilliseconds=function(e){this._date=this._date.set({millisecond:e})},i.prototype._getUTC=function(){return this._date.toUTC()},i.prototype.toString=function(){return this.toDate().toString()},i.prototype.toDate=function(){return this._date.toJSDate()},i.prototype.isLastDayOfMonth=function(){var e=this._date.plus({days:1}).startOf("day");return this._date.month!==e.month},i.prototype.isLastWeekdayOfMonth=function(){var e=this._date.plus({days:7}).startOf("day");return this._date.month!==e.month},t.exports=i},10764,(e,t,r)=>{"use strict";function n(e){return{start:e,count:1}}function i(e,t){e.end=t,e.step=t-e.start,e.count=2}function a(e,t,r){t&&(2===t.count?(e.push(n(t.start)),e.push(n(t.end))):e.push(t)),r&&e.push(r)}t.exports=function(e){for(var t=[],r=void 0,s=0;s<e.length;s++){var o=e[s];"number"!=typeof o?(a(t,r,n(o)),r=void 0):r?1===r.count?i(r,o):r.step===o-r.end?(r.count++,r.end=o):2===r.count?(t.push(n(r.start)),i(r=n(r.end),o)):(a(t,r),r=n(o)):r=n(o)}return a(t,r),t}},23925,(e,t,r)=>{"use strict";var n=e.r(10764);t.exports=function(e,t,r){var i=n(e);if(1===i.length){var a=i[0],s=a.step;if(1===s&&a.start===t&&a.end===r)return"*";if(1!==s&&a.start===t&&a.end===r-s+1)return"*/"+s}for(var o=[],l=0,d=i.length;l<d;++l){var c=i[l];if(1===c.count){o.push(c.start);continue}var s=c.step;if(1===c.step){o.push(c.start+"-"+c.end);continue}var u=0==c.start?c.count-1:c.count;c.step*u>c.end?o=o.concat(Array.from({length:c.end-c.start+1}).map(function(e,t){var r=c.start+t;return(r-c.start)%c.step==0?r:null}).filter(function(e){return null!=e})):c.end===r-c.step+1?o.push(c.start+"/"+c.step):o.push(c.start+"-"+c.end+"/"+c.step)}return o.join(",")}},80435,(e,t,r)=>{"use strict";var n=e.r(54418),i=e.r(23925);function a(e,t){this._options=t,this._utc=t.utc||!1,this._tz=this._utc?"UTC":t.tz,this._currentDate=new n(t.currentDate,this._tz),this._startDate=t.startDate?new n(t.startDate,this._tz):null,this._endDate=t.endDate?new n(t.endDate,this._tz):null,this._isIterator=t.iterator||!1,this._hasIterated=!1,this._nthDayOfWeek=t.nthDayOfWeek||0,this.fields=a._freezeFields(e)}a.map=["second","minute","hour","dayOfMonth","month","dayOfWeek"],a.predefined={"@yearly":"0 0 1 1 *","@monthly":"0 0 1 * *","@weekly":"0 0 * * 0","@daily":"0 0 * * *","@hourly":"0 * * * *"},a.constraints=[{min:0,max:59,chars:[]},{min:0,max:59,chars:[]},{min:0,max:23,chars:[]},{min:1,max:31,chars:["L"]},{min:1,max:12,chars:[]},{min:0,max:7,chars:["L"]}],a.daysInMonth=[31,29,31,30,31,30,31,31,30,31,30,31],a.aliases={month:{jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},dayOfWeek:{sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6}},a.parseDefaults=["0","*","*","*","*","*"],a.standardValidCharacters=/^[,*\d/-]+$/,a.dayOfWeekValidCharacters=/^[?,*\dL#/-]+$/,a.dayOfMonthValidCharacters=/^[?,*\dL/-]+$/,a.validCharacters={second:a.standardValidCharacters,minute:a.standardValidCharacters,hour:a.standardValidCharacters,dayOfMonth:a.dayOfMonthValidCharacters,month:a.standardValidCharacters,dayOfWeek:a.dayOfWeekValidCharacters},a._isValidConstraintChar=function(e,t){return"string"==typeof t&&e.chars.some(function(e){return t.indexOf(e)>-1})},a._parseField=function(e,t,r){switch(e){case"month":case"dayOfWeek":var n=a.aliases[e];t=t.replace(/[a-z]{3}/gi,function(e){if(void 0!==n[e=e.toLowerCase()])return n[e];throw Error('Validation error, cannot resolve alias "'+e+'"')})}if(!a.validCharacters[e].test(t))throw Error("Invalid characters, got value: "+t);function i(e){var t=e.split("/");if(t.length>2)throw Error("Invalid repeat: "+e);return t.length>1?(t[0]==+t[0]&&(t=[t[0]+"-"+r.max,t[1]]),s(t[0],t[t.length-1])):s(e,1)}function s(t,n){var i=[],a=t.split("-");if(a.length>1){if(a.length<2)return+t;if(!a[0].length){if(!a[1].length)throw Error("Invalid range: "+t);return+t}var s=+a[0],o=+a[1];if(Number.isNaN(s)||Number.isNaN(o)||s<r.min||o>r.max)throw Error("Constraint error, got range "+s+"-"+o+" expected range "+r.min+"-"+r.max);if(s>o)throw Error("Invalid range: "+t);var l=+n;if(Number.isNaN(l)||l<=0)throw Error("Constraint error, cannot repeat at every "+l+" time.");"dayOfWeek"===e&&o%7==0&&i.push(0);for(var d=s;d<=o;d++)-1===i.indexOf(d)&&l>0&&l%n==0?(l=1,i.push(d)):l++;return i}return Number.isNaN(+t)?t:+t}return -1!==t.indexOf("*")?t=t.replace(/\*/g,r.min+"-"+r.max):-1!==t.indexOf("?")&&(t=t.replace(/\?/g,r.min+"-"+r.max)),function(t){var n=[];function s(t){if(t instanceof Array)for(var i=0,s=t.length;i<s;i++){var o=t[i];if(a._isValidConstraintChar(r,o)){n.push(o);continue}if("number"!=typeof o||Number.isNaN(o)||o<r.min||o>r.max)throw Error("Constraint error, got value "+o+" expected range "+r.min+"-"+r.max);n.push(o)}else{if(a._isValidConstraintChar(r,t))return void n.push(t);var l=+t;if(Number.isNaN(l)||l<r.min||l>r.max)throw Error("Constraint error, got value "+t+" expected range "+r.min+"-"+r.max);"dayOfWeek"===e&&(l%=7),n.push(l)}}var o=t.split(",");if(!o.every(function(e){return e.length>0}))throw Error("Invalid list value format");if(o.length>1)for(var l=0,d=o.length;l<d;l++)s(i(o[l]));else s(i(t));return n.sort(a._sortCompareFn),n}(t)},a._sortCompareFn=function(e,t){var r="number"==typeof e,n="number"==typeof t;return r&&n?e-t:!r&&n?1:r&&!n?-1:e.localeCompare(t)},a._handleMaxDaysInMonth=function(e){if(1===e.month.length){var t=a.daysInMonth[e.month[0]-1];if(e.dayOfMonth[0]>t)throw Error("Invalid explicit day of month definition");return e.dayOfMonth.filter(function(e){return"L"===e||e<=t}).sort(a._sortCompareFn)}},a._freezeFields=function(e){for(var t=0,r=a.map.length;t<r;++t){var n=a.map[t],i=e[n];e[n]=Object.freeze(i)}return Object.freeze(e)},a.prototype._applyTimezoneShift=function(e,t,r){if("Month"===r||"Day"===r){var n=e.getTime();e[t+r](),n===e.getTime()&&(0===e.getMinutes()&&0===e.getSeconds()?e.addHour():59===e.getMinutes()&&59===e.getSeconds()&&e.subtractHour())}else{var i=e.getHours();e[t+r]();var a=e.getHours(),s=a-i;2===s?24!==this.fields.hour.length&&(this._dstStart=a):0===s&&0===e.getMinutes()&&0===e.getSeconds()&&24!==this.fields.hour.length&&(this._dstEnd=a)}},a.prototype._findSchedule=function(e){function t(e,t){for(var r=0,n=t.length;r<n;r++)if(t[r]>=e)return t[r]===e;return t[0]===e}function r(e){return e.length>0&&e.some(function(e){return"string"==typeof e&&e.indexOf("L")>=0})}for(var i=(e=e||!1)?"subtract":"add",s=new n(this._currentDate,this._tz),o=this._startDate,l=this._endDate,d=s.getTime(),c=0;c<1e4;){if(c++,e){if(o&&s.getTime()-o.getTime()<0)throw Error("Out of the timespan range")}else if(l&&l.getTime()-s.getTime()<0)throw Error("Out of the timespan range");var u=t(s.getDate(),this.fields.dayOfMonth);r(this.fields.dayOfMonth)&&(u=u||s.isLastDayOfMonth());var p=t(s.getDay(),this.fields.dayOfWeek);r(this.fields.dayOfWeek)&&(p=p||this.fields.dayOfWeek.some(function(e){if(!r([e]))return!1;var t=Number.parseInt(e[0])%7;if(Number.isNaN(t))throw Error("Invalid last weekday of the month expression: "+e);return s.getDay()===t&&s.isLastWeekdayOfMonth()}));var h=this.fields.dayOfMonth.length>=a.daysInMonth[s.getMonth()],y=this.fields.dayOfWeek.length===a.constraints[5].max-a.constraints[5].min+1,m=s.getHours();if(!u&&(!p||y)||!h&&y&&!u||h&&!y&&!p||this._nthDayOfWeek>0&&!function(e,t){if(t<6){if(8>e.getDate()&&1===t)return!0;var r=e.getDate()%7?1:0;return Math.floor((e.getDate()-e.getDate()%7)/7)+r===t}return!1}(s,this._nthDayOfWeek)){this._applyTimezoneShift(s,i,"Day");continue}if(!t(s.getMonth()+1,this.fields.month)){this._applyTimezoneShift(s,i,"Month");continue}if(t(m,this.fields.hour)){if(this._dstEnd===m&&!e){this._dstEnd=null,this._applyTimezoneShift(s,"add","Hour");continue}}else if(this._dstStart!==m){this._dstStart=null,this._applyTimezoneShift(s,i,"Hour");continue}else if(!t(m-1,this.fields.hour)){s[i+"Hour"]();continue}if(!t(s.getMinutes(),this.fields.minute)){this._applyTimezoneShift(s,i,"Minute");continue}if(!t(s.getSeconds(),this.fields.second)){this._applyTimezoneShift(s,i,"Second");continue}if(d===s.getTime()){"add"===i||0===s.getMilliseconds()?this._applyTimezoneShift(s,i,"Second"):s.setMilliseconds(0);continue}break}if(c>=1e4)throw Error("Invalid expression, loop limit exceeded");return this._currentDate=new n(s,this._tz),this._hasIterated=!0,s},a.prototype.next=function(){var e=this._findSchedule();return this._isIterator?{value:e,done:!this.hasNext()}:e},a.prototype.prev=function(){var e=this._findSchedule(!0);return this._isIterator?{value:e,done:!this.hasPrev()}:e},a.prototype.hasNext=function(){var e=this._currentDate,t=this._hasIterated;try{return this._findSchedule(),!0}catch(e){return!1}finally{this._currentDate=e,this._hasIterated=t}},a.prototype.hasPrev=function(){var e=this._currentDate,t=this._hasIterated;try{return this._findSchedule(!0),!0}catch(e){return!1}finally{this._currentDate=e,this._hasIterated=t}},a.prototype.iterate=function(e,t){var r=[];if(e>=0)for(var n=0,i=e;n<i;n++)try{var a=this.next();r.push(a),t&&t(a,n)}catch(e){break}else for(var n=0,i=e;n>i;n--)try{var a=this.prev();r.push(a),t&&t(a,n)}catch(e){break}return r},a.prototype.reset=function(e){this._currentDate=new n(e||this._options.currentDate)},a.prototype.stringify=function(e){for(var t=[],r=+!e,n=a.map.length;r<n;++r){var s=a.map[r],o=this.fields[s],l=a.constraints[r];"dayOfMonth"===s&&1===this.fields.month.length?l={min:1,max:a.daysInMonth[this.fields.month[0]-1]}:"dayOfWeek"===s&&(l={min:0,max:6},o=7===o[o.length-1]?o.slice(0,-1):o),t.push(i(o,l.min,l.max))}return t.join(" ")},a.parse=function(e,t){var r=this;return"function"==typeof t&&(t={}),function(e,t){t||(t={}),void 0===t.currentDate&&(t.currentDate=new n(void 0,r._tz)),a.predefined[e]&&(e=a.predefined[e]);var i=[],s=(e+"").trim().split(/\s+/);if(s.length>6)throw Error("Invalid cron expression");for(var o=a.map.length-s.length,l=0,d=a.map.length;l<d;++l){var c=a.map[l],u=s[s.length>d?l:l-o];if(l<o||!u)i.push(a._parseField(c,a.parseDefaults[l],a.constraints[l]));else{var p="dayOfWeek"===c?function(e){var r=e.split("#");if(r.length>1){var n=+r[r.length-1];if(/,/.test(e))throw Error("Constraint error, invalid dayOfWeek `#` and `,` special characters are incompatible");if(/\//.test(e))throw Error("Constraint error, invalid dayOfWeek `#` and `/` special characters are incompatible");if(/-/.test(e))throw Error("Constraint error, invalid dayOfWeek `#` and `-` special characters are incompatible");if(r.length>2||Number.isNaN(n)||n<1||n>5)throw Error("Constraint error, invalid dayOfWeek occurrence number (#)");return t.nthDayOfWeek=n,r[0]}return e}(u):u;i.push(a._parseField(c,p,a.constraints[l]))}}for(var h={},l=0,d=a.map.length;l<d;l++)h[a.map[l]]=i[l];var y=a._handleMaxDaysInMonth(h);return h.dayOfMonth=y||h.dayOfMonth,new a(h,t)}(e,t)},a.fieldsToExpression=function(e,t){for(var r={},n=0,i=a.map.length;n<i;++n){var s=a.map[n],o=e[s];!function(e,t,r){if(!t)throw Error("Validation error, Field "+e+" is missing");if(0===t.length)throw Error("Validation error, Field "+e+" contains no values");for(var n=0,i=t.length;n<i;n++){var s=t[n];if(!a._isValidConstraintChar(r,s)&&("number"!=typeof s||Number.isNaN(s)||s<r.min||s>r.max))throw Error("Constraint error, got value "+s+" expected range "+r.min+"-"+r.max)}}(s,o,a.constraints[n]);for(var l=[],d=-1;++d<o.length;)l[d]=o[d];if((o=l.sort(a._sortCompareFn).filter(function(e,t,r){return!t||e!==r[t-1]})).length!==l.length)throw Error("Validation error, Field "+s+" contains duplicate values");r[s]=o}var c=a._handleMaxDaysInMonth(r);return r.dayOfMonth=c||r.dayOfMonth,new a(r,t||{})},t.exports=a},26938,(e,t,r)=>{"use strict";var n=e.r(80435);function i(){}i._parseEntry=function(e){var t=e.split(" ");if(6===t.length)return{interval:n.parse(e)};if(t.length>6)return{interval:n.parse(t.slice(0,6).join(" ")),command:t.slice(6,t.length)};throw Error("Invalid entry: "+e)},i.parseExpression=function(e,t){return n.parse(e,t)},i.fieldsToExpression=function(e,t){return n.fieldsToExpression(e,t)},i.parseString=function(e){for(var t=e.split("\n"),r={variables:{},expressions:[],errors:{}},n=0,a=t.length;n<a;n++){var s=t[n],o=null,l=s.trim();if(l.length>0)if(l.match(/^#/))continue;else if(o=l.match(/^(.*)=(.*)$/))r.variables[o[1]]=o[2];else{var d=null;try{d=i._parseEntry("0 "+l),r.expressions.push(d.interval)}catch(e){r.errors[l]=e}}}return r},i.parseFile=function(t,r){e.r(22734).readFile(t,function(e,t){return e?void r(e):r(null,i.parseString(t.toString()))})},t.exports=i},85949,(e,t,r)=>{let{EventEmitter:n}=e.r(27699);class AbortSignal{constructor(){this.eventEmitter=new n,this.onabort=null,this.aborted=!1,this.reason=void 0}toString(){return"[object AbortSignal]"}get[Symbol.toStringTag](){return"AbortSignal"}removeEventListener(e,t){this.eventEmitter.removeListener(e,t)}addEventListener(e,t){this.eventEmitter.on(e,t)}dispatchEvent(e){let t={type:e,target:this},r=`on${e}`;"function"==typeof this[r]&&this[r](t),this.eventEmitter.emit(e,t)}throwIfAborted(){if(this.aborted)throw this.reason}static abort(e){let t=new i;return t.abort(),t.signal}static timeout(e){let t=new i;return setTimeout(()=>t.abort(Error("TimeoutError")),e),t.signal}}class i{constructor(){this.signal=new AbortSignal}abort(e){this.signal.aborted||(this.signal.aborted=!0,e?this.signal.reason=e:this.signal.reason=Error("AbortError"),this.signal.dispatchEvent("abort"))}toString(){return"[object AbortController]"}get[Symbol.toStringTag](){return"AbortController"}}t.exports={AbortController:i,AbortSignal}},67139,6090,22961,e=>{"use strict";let t,r,n,i,a,s,o,l,d,c,u,p;e.s(["pipelineManager",()=>iu],67139);var h,y,m,f,b,g,K,v,S,E,k,I,w,j,x,A,T,C,D,O=e.i(98043);class R{constructor(e){this.value=void 0,this.next=null,this.value=e}}class M{constructor(){this.length=0,this.head=null,this.tail=null}push(e){let t=new R(e);return this.length?this.tail.next=t:this.head=t,this.tail=t,this.length+=1,t}shift(){if(!this.length)return null;{let e=this.head;return this.head=this.head.next,this.length-=1,e}}}class P{constructor(e=!1){this.ignoreErrors=e,this.queue=new M,this.pending=new Set,this.newPromise()}add(e){this.pending.add(e),e.then(t=>{this.pending.delete(e),0===this.queue.length&&this.resolvePromise(t),this.queue.push(t)}).catch(t=>{this.ignoreErrors&&this.queue.push(void 0),this.pending.delete(e),this.rejectPromise(t)})}async waitAll(){await Promise.all(this.pending)}numTotal(){return this.pending.size+this.queue.length}numPending(){return this.pending.size}numQueued(){return this.queue.length}resolvePromise(e){this.resolve(e),this.newPromise()}rejectPromise(e){this.reject(e),this.newPromise()}newPromise(){this.nextPromise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}async wait(){return this.nextPromise}async fetch(){var e;if(0!==this.pending.size||0!==this.queue.length){for(;0===this.queue.length;)try{await this.wait()}catch(e){this.ignoreErrors||console.error("Unexpected Error in AsyncFifoQueue",e)}return null==(e=this.queue.shift())?void 0:e.value}}}class N{static normalize(e){return Number.isFinite(e)?{type:"fixed",delay:e}:e||void 0}static calculate(e,t,r,n,i){if(e)return(function(e,t){if(e.type in N.builtinStrategies)return N.builtinStrategies[e.type](e.delay,e.jitter);if(t)return t;throw Error(`Unknown backoff strategy ${e.type}.
      If a custom backoff strategy is used, specify it when the queue is created.`)})(e,i)(t,e.type,r,n)}}N.builtinStrategies={fixed:function(e,t=0){return function(){return t>0?Math.floor(Math.random()*e*t+e*(1-t)):e}},exponential:function(e,t=0){return function(r){if(!(t>0))return Math.round(Math.pow(2,r-1)*e);{let n=Math.round(Math.pow(2,r-1)*e);return Math.floor(Math.random()*n*t+n*(1-t))}}}};var J=e.i(33405),L=e.i(4446),_=e.i(37702);!function(e){e[e.Init=0]="Init",e[e.Start=1]="Start",e[e.Stop=2]="Stop",e[e.GetChildrenValuesResponse=3]="GetChildrenValuesResponse",e[e.GetIgnoredChildrenFailuresResponse=4]="GetIgnoredChildrenFailuresResponse",e[e.MoveToWaitingChildrenResponse=5]="MoveToWaitingChildrenResponse"}(h||(h={})),function(e){e[e.JobNotExist=-1]="JobNotExist",e[e.JobLockNotExist=-2]="JobLockNotExist",e[e.JobNotInState=-3]="JobNotInState",e[e.JobPendingChildren=-4]="JobPendingChildren",e[e.ParentJobNotExist=-5]="ParentJobNotExist",e[e.JobLockMismatch=-6]="JobLockMismatch",e[e.ParentJobCannotBeReplaced=-7]="ParentJobCannotBeReplaced",e[e.JobBelongsToJobScheduler=-8]="JobBelongsToJobScheduler",e[e.JobHasFailedChildren=-9]="JobHasFailedChildren"}(y||(y={})),function(e){e[e.Completed=0]="Completed",e[e.Error=1]="Error",e[e.Failed=2]="Failed",e[e.InitFailed=3]="InitFailed",e[e.InitCompleted=4]="InitCompleted",e[e.Log=5]="Log",e[e.MoveToDelayed=6]="MoveToDelayed",e[e.MoveToWait=7]="MoveToWait",e[e.Progress=8]="Progress",e[e.Update=9]="Update",e[e.GetChildrenValues=10]="GetChildrenValues",e[e.GetIgnoredChildrenFailures=11]="GetIgnoredChildrenFailures",e[e.MoveToWaitingChildren=12]="MoveToWaitingChildren"}(m||(m={})),function(e){e[e.ONE_MINUTE=1]="ONE_MINUTE",e[e.FIVE_MINUTES=5]="FIVE_MINUTES",e[e.FIFTEEN_MINUTES=15]="FIFTEEN_MINUTES",e[e.THIRTY_MINUTES=30]="THIRTY_MINUTES",e[e.ONE_HOUR=60]="ONE_HOUR",e[e.ONE_WEEK=10080]="ONE_WEEK",e[e.TWO_WEEKS=20160]="TWO_WEEKS",e[e.ONE_MONTH=80640]="ONE_MONTH"}(f||(f={})),function(e){e.QueueName="bullmq.queue.name",e.QueueOperation="bullmq.queue.operation",e.BulkCount="bullmq.job.bulk.count",e.BulkNames="bullmq.job.bulk.names",e.JobName="bullmq.job.name",e.JobId="bullmq.job.id",e.JobKey="bullmq.job.key",e.JobIds="bullmq.job.ids",e.JobAttemptsMade="bullmq.job.attempts.made",e.DeduplicationKey="bullmq.job.deduplication.key",e.JobOptions="bullmq.job.options",e.JobProgress="bullmq.job.progress",e.QueueDrainDelay="bullmq.queue.drain.delay",e.QueueGrace="bullmq.queue.grace",e.QueueCleanLimit="bullmq.queue.clean.limit",e.QueueRateLimit="bullmq.queue.rate.limit",e.JobType="bullmq.job.type",e.QueueOptions="bullmq.queue.options",e.QueueEventMaxLength="bullmq.queue.event.max.length",e.WorkerOptions="bullmq.worker.options",e.WorkerName="bullmq.worker.name",e.WorkerId="bullmq.worker.id",e.WorkerRateLimit="bullmq.worker.rate.limit",e.WorkerDoNotWaitActive="bullmq.worker.do.not.wait.active",e.WorkerForceClose="bullmq.worker.force.close",e.WorkerStalledJobs="bullmq.worker.stalled.jobs",e.WorkerFailedJobs="bullmq.worker.failed.jobs",e.WorkerJobsToExtendLocks="bullmq.worker.jobs.to.extend.locks",e.JobFinishedTimestamp="bullmq.job.finished.timestamp",e.JobProcessedTimestamp="bullmq.job.processed.timestamp",e.JobResult="bullmq.job.result",e.JobFailedReason="bullmq.job.failed.reason",e.FlowName="bullmq.flow.name",e.JobSchedulerId="bullmq.job.scheduler.id"}(b||(b={})),function(e){e[e.INTERNAL=0]="INTERNAL",e[e.SERVER=1]="SERVER",e[e.CLIENT=2]="CLIENT",e[e.PRODUCER=3]="PRODUCER",e[e.CONSUMER=4]="CONSUMER"}(g||(g={}));var F=e.i(27699);let V={1:"Uncaught Fatal Exception",2:"Unused",3:"Internal JavaScript Parse Error",4:"Internal JavaScript Evaluation Failure",5:"Fatal Error",6:"Non-function Internal Exception Handler",7:"Internal Exception Handler Run-Time Failure",8:"Unused",9:"Invalid Argument",10:"Internal JavaScript Run-Time Failure",12:"Invalid Debug Argument",13:"Unfinished Top-Level Await"};class G extends F.EventEmitter{constructor(e,t,r={useWorkerThreads:!1}){super(),this.mainFile=e,this.processFile=t,this.opts=r,this._exitCode=null,this._signalCode=null,this._killed=!1}get pid(){if(this.childProcess)return this.childProcess.pid;if(this.worker)return Math.abs(this.worker.threadId);throw Error("No child process or worker thread")}get exitCode(){return this._exitCode}get signalCode(){return this._signalCode}get killed(){return this.childProcess?this.childProcess.killed:this._killed}async init(){let e,t=await Y(process.execArgv);this.opts.useWorkerThreads?this.worker=e=new _.Worker(this.mainFile,Object.assign({execArgv:t,stdin:!0,stdout:!0,stderr:!0},this.opts.workerThreadsOptions?this.opts.workerThreadsOptions:{})):this.childProcess=e=(0,J.fork)(this.mainFile,[],Object.assign({execArgv:t,stdio:"pipe"},this.opts.workerForkOptions?this.opts.workerForkOptions:{})),e.on("exit",(t,r)=>{this._exitCode=t,r=void 0===r?null:r,this._signalCode=r,this._killed=!0,this.emit("exit",t,r),e.removeAllListeners(),this.removeAllListeners()}),e.on("error",(...e)=>this.emit("error",...e)),e.on("message",(...e)=>this.emit("message",...e)),e.on("close",(...e)=>this.emit("close",...e)),e.stdout.pipe(process.stdout),e.stderr.pipe(process.stderr),await this.initChild()}async send(e){return new Promise((t,r)=>{this.childProcess?this.childProcess.send(e,e=>{e?r(e):t()}):this.worker?t(this.worker.postMessage(e)):t()})}killProcess(e="SIGKILL"){this.childProcess?this.childProcess.kill(e):this.worker&&this.worker.terminate()}async kill(e="SIGKILL",t){var r;if(this.hasProcessExited())return;let n=(r=this.childProcess||this.worker,new Promise(e=>{r.once("exit",()=>e())}));if(this.killProcess(e),void 0!==t&&(0===t||isFinite(t))){let e=setTimeout(()=>{this.hasProcessExited()||this.killProcess("SIGKILL")},t);await n,clearTimeout(e)}await n}async initChild(){let e=new Promise((e,t)=>{let r=i=>{if(i.cmd===m.InitCompleted)e();else if(i.cmd===m.InitFailed){let e=Error();e.stack=i.err.stack,e.message=i.err.message,t(e)}this.off("message",r),this.off("close",n)},n=(e,i)=>{e>128&&(e-=128);let a=V[e]||`Unknown exit code ${e}`;t(Error(`Error initializing child: ${a} and signal ${i}`)),this.off("message",r),this.off("close",n)};this.on("message",r),this.on("close",n)});await this.send({cmd:h.Init,value:this.processFile}),await e}hasProcessExited(){return!!(null!==this.exitCode||this.signalCode)}}let q=async()=>new Promise(e=>{let t=(0,L.createServer)();t.listen(0,()=>{let{port:r}=t.address();t.close(()=>e(r))})}),Y=async e=>{let t=[],r=[];for(let n=0;n<e.length;n++){let i=e[n];if(-1===i.indexOf("--inspect"))t.push(i);else{let e=i.split("=")[0],t=await q();r.push(`${e}=${t}`)}}return t.concat(r)};var z=e.i(14747);class B{constructor({mainFile:e=z.join(process.cwd(),"dist/cjs/classes/main.js"),useWorkerThreads:t,workerForkOptions:r,workerThreadsOptions:n}){this.retained={},this.free={},this.opts={mainFile:e,useWorkerThreads:t,workerForkOptions:r,workerThreadsOptions:n}}async retain(e){let t=this.getFree(e).pop();if(t)return this.retained[t.pid]=t,t;(t=new G(this.opts.mainFile,e,{useWorkerThreads:this.opts.useWorkerThreads,workerForkOptions:this.opts.workerForkOptions,workerThreadsOptions:this.opts.workerThreadsOptions})).on("exit",this.remove.bind(this,t));try{if(await t.init(),null!==t.exitCode||null!==t.signalCode)throw Error("Child exited before it could be retained");return this.retained[t.pid]=t,t}catch(e){throw console.error(e),this.release(t),e}}release(e){delete this.retained[e.pid],this.getFree(e.processFile).push(e)}remove(e){delete this.retained[e.pid];let t=this.getFree(e.processFile),r=t.indexOf(e);r>-1&&t.splice(r,1)}async kill(e,t="SIGKILL"){return this.remove(e),e.kill(t,3e4)}async clean(){let e=Object.values(this.retained).concat(this.getAllFree());this.retained={},this.free={},await Promise.all(e.map(e=>this.kill(e,"SIGTERM")))}getFree(e){return this.free[e]=this.free[e]||[]}getAllFree(){return Object.values(this.free).reduce((e,t)=>e.concat(t),[])}}var W=e.i(42512),U=e.i(26898),$=e.i(48680);let Q={value:null};function H(e,t,r){try{return e.apply(t,r)}catch(e){return Q.value=e,Q}}function Z(e){let t={};for(let r=0;r<e.length;r+=2)t[e[r]]=e[r+1];return t}function X(e){let t=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&void 0!==e[r]&&(t[t.length]=r,t[t.length]=e[r]);return t}function ee(e,t){return new Promise(r=>{let n,i=()=>{null==t||t.signal.removeEventListener("abort",i),clearTimeout(n),r()};n=setTimeout(i,e),null==t||t.signal.addEventListener("abort",i)})}function et(e,t){let r=e.getMaxListeners();e.setMaxListeners(r+t)}let er={de:"deduplication",fpof:"failParentOnFailure",cpof:"continueParentOnFailure",idof:"ignoreDependencyOnFailure",kl:"keepLogs",rdof:"removeDependencyOnFailure"},en=Object.assign(Object.assign({},Object.entries(er).reduce((e,[t,r])=>(e[r]=t,e),{})),{debounce:"de"});function ei(e){return!!e&&["connect","disconnect","duplicate"].every(t=>"function"==typeof e[t])}function ea(e){if(e)return`${e.queue}:${e.id}`}let es=/ERR unknown command ['`]\s*client\s*['`]/;function eo(e){let t=`${e.message}`;return t!==U.CONNECTION_CLOSED_ERROR_MSG&&!t.includes("ECONNREFUSED")}let el=(e,t)=>{let r=$.valid($.coerce(e));return $.lt(r,t)},ed=e=>{let t={};for(let r of Object.entries(e))t[r[0]]=JSON.parse(r[1]);return t};async function ec(e,t,r,n,i,a,s){if(!e)return a();{let o,{tracer:l,contextManager:d}=e,c=d.active();s&&(o=d.fromMetadata(c,s));let u=i?`${n} ${i}`:n,p=l.startSpan(u,{kind:t},o);try{let e,i;return p.setAttributes({[b.QueueName]:r,[b.QueueOperation]:n}),e=t===g.CONSUMER&&o?p.setSpanOnContext(o):p.setSpanOnContext(c),2==a.length&&(i=d.getMetadata(e)),await d.with(e,()=>a(p,i))}catch(e){throw p.recordException(e),e}finally{p.end()}}}!function(e){e[e.Idle=0]="Idle",e[e.Started=1]="Started",e[e.Terminating=2]="Terminating",e[e.Errored=3]="Errored"}(K||(K={}));class eu extends Error{constructor(e="bullmq:movedToDelayed"){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}let ep="bullmq:rateLimitExceeded";class eh extends Error{constructor(e=ep){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}class ey extends Error{constructor(e="bullmq:unrecoverable"){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}class em extends Error{constructor(e="bullmq:movedToWaitingChildren"){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}class ef extends Error{constructor(e="bullmq:movedToWait"){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}var eb=e.i(54799);let eg={randomUUID:eb.randomUUID},eK=new Uint8Array(256),ev=eK.length,eS=[];for(let e=0;e<256;++e)eS.push((e+256).toString(16).slice(1));let eE=function(e,t,r){if(eg.randomUUID&&!t&&!e)return eg.randomUUID();let n=(e=e||{}).random??e.rng?.()??(ev>eK.length-16&&((0,eb.randomFillSync)(eK),ev=0),eK.slice(ev,ev+=16));if(n.length<16)throw Error("Random bytes length must be >= 16");if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){if((r=r||0)<0||r+16>t.length)throw RangeError(`UUID byte range ${r}:${r+15} is out of buffer bounds`);for(let e=0;e<16;++e)t[r+e]=n[e];return t}return function(e,t=0){return(eS[e[t+0]]+eS[e[t+1]]+eS[e[t+2]]+eS[e[t+3]]+"-"+eS[e[t+4]]+eS[e[t+5]]+"-"+eS[e[t+6]]+eS[e[t+7]]+"-"+eS[e[t+8]]+eS[e[t+9]]+"-"+eS[e[t+10]]+eS[e[t+11]]+eS[e[t+12]]+eS[e[t+13]]+eS[e[t+14]]+eS[e[t+15]]).toLowerCase()}(n)};function ek(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}Object.create;Object.create;var eI=("function"==typeof SuppressedError&&SuppressedError,e.i(24361));try{v=new TextDecoder}catch(e){}var ew=0;let ej=[];var ex=ej,eA=0,eT={},eC=0,eD=0,eO=[],eR={useRecords:!1,mapsAsObjects:!0};class eM{}let eP=new eM;eP.name="MessagePack 0xC1";var eN=!1,eJ=2;try{Function("")}catch(e){eJ=1/0}class eL{constructor(e){e&&(!1===e.useRecords&&void 0===e.mapsAsObjects&&(e.mapsAsObjects=!0),e.sequential&&!1!==e.trusted&&(e.trusted=!0,!e.structures&&!1!=e.useRecords&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(S)return tn(()=>(ti(),this?this.unpack(e,t):eL.prototype.unpack.call(eR,e,t)));e.buffer||e.constructor!==ArrayBuffer||(e="undefined"!=typeof Buffer?Buffer.from(e):new Uint8Array(e)),"object"==typeof t?(E=t.end||e.length,ew=t.start||0):(ew=0,E=t>-1?t:e.length),eA=0,eD=0,I=null,ex=ej,w=null,S=e;try{x=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(t){if(S=null,e instanceof Uint8Array)throw t;throw Error("Source must be a Uint8Array or Buffer but was a "+(e&&"object"==typeof e?e.constructor.name:typeof e))}return this instanceof eL?(eT=this,this.structures?k=this.structures:(!k||k.length>0)&&(k=[])):(eT=eR,(!k||k.length>0)&&(k=[])),e_(t)}unpackMultiple(e,t){let r,n=0;try{eN=!0;let i=e.length,a=this?this.unpack(e,i):ts.unpack(e,i);if(t){if(!1===t(a,n,ew))return;for(;ew<i;)if(n=ew,!1===t(e_(),n,ew))return}else{for(r=[a];ew<i;)n=ew,r.push(e_());return r}}catch(e){throw e.lastPosition=n,e.values=r,e}finally{eN=!1,ti()}}_mergeStructures(e,t){T&&(e=T.call(this,e)),Object.isFrozen(e=e||[])&&(e=e.map(e=>e.slice(0)));for(let t=0,r=e.length;t<r;t++){let r=e[t];r&&(r.isShared=!0,t>=32&&(r.highByte=t-32>>5))}for(let r in e.sharedLength=e.length,t||[])if(r>=0){let n=e[r],i=t[r];i&&(n&&((e.restoreStructures||(e.restoreStructures=[]))[r]=n),e[r]=i)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function e_(e){try{let t;if(!eT.trusted&&!eN){let e=k.sharedLength||0;e<k.length&&(k.length=e)}if(eT.randomAccessStructure&&S[ew]<64&&S[ew]>=32&&A?(t=A(S,ew,E,eT),S=null,!(e&&e.lazy)&&t&&(t=t.toJSON()),ew=E):t=eV(),w&&(ew=w.postBundlePosition,w=null),eN&&(k.restoreStructures=null),ew==E)k&&k.restoreStructures&&eF(),k=null,S=null,j&&(j=null);else if(ew>E)throw Error("Unexpected end of MessagePack data");else if(!eN){let e;try{e=JSON.stringify(t,(e,t)=>"bigint"==typeof t?`${t}n`:t).slice(0,100)}catch(t){e="(JSON view not available "+t+")"}throw Error("Data read, but end of buffer not reached "+e)}return t}catch(e){throw k&&k.restoreStructures&&eF(),ti(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||ew>E)&&(e.incomplete=!0),e}}function eF(){for(let e in k.restoreStructures)k[e]=k.restoreStructures[e];k.restoreStructures=null}function eV(){let e=S[ew++];if(e<160)if(e<128)if(e<64)return e;else{let t=k[63&e]||eT.getStructures&&ez()[63&e];return t?(t.read||(t.read=eq(t,63&e)),t.read()):e}else if(e<144){if(e-=128,eT.mapsAsObjects){let t={};for(let r=0;r<e;r++){let e=e5();"__proto__"===e&&(e="__proto_"),t[e]=eV()}return t}{let t=new Map;for(let r=0;r<e;r++)t.set(eV(),eV());return t}}else{let t=Array(e-=144);for(let r=0;r<e;r++)t[r]=eV();return eT.freezeData?Object.freeze(t):t}if(e<192){let t=e-160;if(eD>=ew)return I.slice(ew-eC,(ew+=t)-eC);if(0==eD&&E<140){let e=t<16?e1(t):e0(t);if(null!=e)return e}return eB(t)}{let t;switch(e){case 192:return null;case 193:if(w){if((t=eV())>0)return w[1].slice(w.position1,w.position1+=t);return w[0].slice(w.position0,w.position0-=t)}return eP;case 194:return!1;case 195:return!0;case 196:if(void 0===(t=S[ew++]))throw Error("Unexpected end of buffer");return e3(t);case 197:return t=x.getUint16(ew),ew+=2,e3(t);case 198:return t=x.getUint32(ew),ew+=4,e3(t);case 199:return e6(S[ew++]);case 200:return t=x.getUint16(ew),ew+=2,e6(t);case 201:return t=x.getUint32(ew),ew+=4,e6(t);case 202:if(t=x.getFloat32(ew),eT.useFloat32>2){let e=ta[(127&S[ew])<<1|S[ew+1]>>7];return ew+=4,(e*t+(t>0?.5:-.5)|0)/e}return ew+=4,t;case 203:return t=x.getFloat64(ew),ew+=8,t;case 204:return S[ew++];case 205:return t=x.getUint16(ew),ew+=2,t;case 206:return t=x.getUint32(ew),ew+=4,t;case 207:return"number"===eT.int64AsType?t=0x100000000*x.getUint32(ew)+x.getUint32(ew+4):"string"===eT.int64AsType?t=x.getBigUint64(ew).toString():"auto"===eT.int64AsType?(t=x.getBigUint64(ew))<=BigInt(2)<<BigInt(52)&&(t=Number(t)):t=x.getBigUint64(ew),ew+=8,t;case 208:return x.getInt8(ew++);case 209:return t=x.getInt16(ew),ew+=2,t;case 210:return t=x.getInt32(ew),ew+=4,t;case 211:return"number"===eT.int64AsType?t=0x100000000*x.getInt32(ew)+x.getUint32(ew+4):"string"===eT.int64AsType?t=x.getBigInt64(ew).toString():"auto"===eT.int64AsType?(t=x.getBigInt64(ew))>=BigInt(-2)<<BigInt(52)&&t<=BigInt(2)<<BigInt(52)&&(t=Number(t)):t=x.getBigInt64(ew),ew+=8,t;case 212:if(114==(t=S[ew++]))return e9(63&S[ew++]);{let e=eO[t];if(e)if(e.read)return ew++,e.read(eV());else if(e.noBuffer)return ew++,e();else return e(S.subarray(ew,++ew));throw Error("Unknown extension "+t)}case 213:if(114==(t=S[ew]))return ew++,e9(63&S[ew++],S[ew++]);return e6(2);case 214:return e6(4);case 215:return e6(8);case 216:return e6(16);case 217:if(t=S[ew++],eD>=ew)return I.slice(ew-eC,(ew+=t)-eC);return eW(t);case 218:if(t=x.getUint16(ew),ew+=2,eD>=ew)return I.slice(ew-eC,(ew+=t)-eC);return eU(t);case 219:if(t=x.getUint32(ew),ew+=4,eD>=ew)return I.slice(ew-eC,(ew+=t)-eC);return e$(t);case 220:return t=x.getUint16(ew),ew+=2,eH(t);case 221:return t=x.getUint32(ew),ew+=4,eH(t);case 222:return t=x.getUint16(ew),ew+=2,eZ(t);case 223:return t=x.getUint32(ew),ew+=4,eZ(t);default:if(e>=224)return e-256;if(void 0===e){let e=Error("Unexpected end of MessagePack data");throw e.incomplete=!0,e}throw Error("Unknown MessagePack token "+e)}}}let eG=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function eq(e,t){function r(){if(r.count++>eJ){let r=e.read=Function("r","return function(){return "+(eT.freezeData?"Object.freeze":"")+"({"+e.map(e=>"__proto__"===e?"__proto_:r()":eG.test(e)?e+":r()":"["+JSON.stringify(e)+"]:r()").join(",")+"})}")(eV);return 0===e.highByte&&(e.read=eY(t,e.read)),r()}let n={};for(let t=0,r=e.length;t<r;t++){let r=e[t];"__proto__"===r&&(r="__proto_"),n[r]=eV()}return eT.freezeData?Object.freeze(n):n}return(r.count=0,0===e.highByte)?eY(t,r):r}let eY=(e,t)=>function(){let r=S[ew++];if(0===r)return t();let n=e<32?-(e+(r<<5)):e+(r<<5),i=k[n]||ez()[n];if(!i)throw Error("Record id is not defined for "+n);return i.read||(i.read=eq(i,e)),i.read()};function ez(){let e=tn(()=>(S=null,eT.getStructures()));return k=eT._mergeStructures(e,k)}var eB=eQ,eW=eQ,eU=eQ,e$=eQ;function eQ(e){let t;if(e<16&&(t=e1(e)))return t;if(e>64&&v)return v.decode(S.subarray(ew,ew+=e));let r=ew+e,n=[];for(t="";ew<r;){let e=S[ew++];if((128&e)==0)n.push(e);else if((224&e)==192){let t=63&S[ew++];n.push((31&e)<<6|t)}else if((240&e)==224){let t=63&S[ew++],r=63&S[ew++];n.push((31&e)<<12|t<<6|r)}else if((248&e)==240){let t=63&S[ew++],r=(7&e)<<18|t<<12|(63&S[ew++])<<6|63&S[ew++];r>65535&&(r-=65536,n.push(r>>>10&1023|55296),r=56320|1023&r),n.push(r)}else n.push(e);n.length>=4096&&(t+=eX.apply(String,n),n.length=0)}return n.length>0&&(t+=eX.apply(String,n)),t}function eH(e){let t=Array(e);for(let r=0;r<e;r++)t[r]=eV();return eT.freezeData?Object.freeze(t):t}function eZ(e){if(eT.mapsAsObjects){let t={};for(let r=0;r<e;r++){let e=e5();"__proto__"===e&&(e="__proto_"),t[e]=eV()}return t}{let t=new Map;for(let r=0;r<e;r++)t.set(eV(),eV());return t}}var eX=String.fromCharCode;function e0(e){let t=ew,r=Array(e);for(let n=0;n<e;n++){let e=S[ew++];if((128&e)>0){ew=t;return}r[n]=e}return eX.apply(String,r)}function e1(e){if(e<4)if(e<2)if(0===e)return"";else{let e=S[ew++];if((128&e)>1){ew-=1;return}return eX(e)}else{let t=S[ew++],r=S[ew++];if((128&t)>0||(128&r)>0){ew-=2;return}if(e<3)return eX(t,r);let n=S[ew++];if((128&n)>0){ew-=3;return}return eX(t,r,n)}{let t=S[ew++],r=S[ew++],n=S[ew++],i=S[ew++];if((128&t)>0||(128&r)>0||(128&n)>0||(128&i)>0){ew-=4;return}if(e<6)if(4===e)return eX(t,r,n,i);else{let e=S[ew++];if((128&e)>0){ew-=5;return}return eX(t,r,n,i,e)}if(e<8){let a=S[ew++],s=S[ew++];if((128&a)>0||(128&s)>0){ew-=6;return}if(e<7)return eX(t,r,n,i,a,s);let o=S[ew++];if((128&o)>0){ew-=7;return}return eX(t,r,n,i,a,s,o)}{let a=S[ew++],s=S[ew++],o=S[ew++],l=S[ew++];if((128&a)>0||(128&s)>0||(128&o)>0||(128&l)>0){ew-=8;return}if(e<10)if(8===e)return eX(t,r,n,i,a,s,o,l);else{let e=S[ew++];if((128&e)>0){ew-=9;return}return eX(t,r,n,i,a,s,o,l,e)}if(e<12){let d=S[ew++],c=S[ew++];if((128&d)>0||(128&c)>0){ew-=10;return}if(e<11)return eX(t,r,n,i,a,s,o,l,d,c);let u=S[ew++];if((128&u)>0){ew-=11;return}return eX(t,r,n,i,a,s,o,l,d,c,u)}{let d=S[ew++],c=S[ew++],u=S[ew++],p=S[ew++];if((128&d)>0||(128&c)>0||(128&u)>0||(128&p)>0){ew-=12;return}if(e<14)if(12===e)return eX(t,r,n,i,a,s,o,l,d,c,u,p);else{let e=S[ew++];if((128&e)>0){ew-=13;return}return eX(t,r,n,i,a,s,o,l,d,c,u,p,e)}{let h=S[ew++],y=S[ew++];if((128&h)>0||(128&y)>0){ew-=14;return}if(e<15)return eX(t,r,n,i,a,s,o,l,d,c,u,p,h,y);let m=S[ew++];if((128&m)>0){ew-=15;return}return eX(t,r,n,i,a,s,o,l,d,c,u,p,h,y,m)}}}}}function e2(){let e,t=S[ew++];if(t<192)e=t-160;else switch(t){case 217:e=S[ew++];break;case 218:e=x.getUint16(ew),ew+=2;break;case 219:e=x.getUint32(ew),ew+=4;break;default:throw Error("Expected string")}return eQ(e)}function e3(e){return eT.copyBuffers?Uint8Array.prototype.slice.call(S,ew,ew+=e):S.subarray(ew,ew+=e)}function e6(e){let t=S[ew++];if(eO[t]){let r;return eO[t](S.subarray(ew,r=ew+=e),e=>{ew=e;try{return eV()}finally{ew=r}})}throw Error("Unknown extension type "+t)}var e4=Array(4096);function e5(){let e,t=S[ew++];if(!(t>=160)||!(t<192))return ew--,e8(eV());if(t-=160,eD>=ew)return I.slice(ew-eC,(ew+=t)-eC);if(!(0==eD&&E<180))return eB(t);let r=(t<<5^(t>1?x.getUint16(ew):t>0?S[ew]:0))&4095,n=e4[r],i=ew,a=ew+t-3,s=0;if(n&&n.bytes==t){for(;i<a;){if((e=x.getUint32(i))!=n[s++]){i=0x70000000;break}i+=4}for(a+=3;i<a;)if((e=S[i++])!=n[s++]){i=0x70000000;break}if(i===a)return ew=i,n.string;a-=3,i=ew}for(n=[],e4[r]=n,n.bytes=t;i<a;)e=x.getUint32(i),n.push(e),i+=4;for(a+=3;i<a;)e=S[i++],n.push(e);let o=t<16?e1(t):e0(t);return null!=o?n.string=o:n.string=eB(t)}function e8(e){if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e||"bigint"==typeof e)return e.toString();if(null==e)return e+"";if(eT.allowArraysInMapKeys&&Array.isArray(e)&&e.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return e.flat().toString();throw Error(`Invalid property type for record: ${typeof e}`)}let e9=(e,t)=>{let r=eV().map(e8),n=e;void 0!==t&&(e=e<32?-((t<<5)+e):(t<<5)+e,r.highByte=t);let i=k[e];return i&&(i.isShared||eN)&&((k.restoreStructures||(k.restoreStructures=[]))[e]=i),k[e]=r,r.read=eq(r,n),r.read()};eO[0]=()=>{},eO[0].noBuffer=!0,eO[66]=e=>{let t=e.byteLength%8||8,r=BigInt(128&e[0]?e[0]-256:e[0]);for(let n=1;n<t;n++)r<<=BigInt(8),r+=BigInt(e[n]);if(e.byteLength!==t){let n=new DataView(e.buffer,e.byteOffset,e.byteLength),i=(e,t)=>{let r=t-e;if(r<=40){let r=n.getBigUint64(e);for(let i=e+8;i<t;i+=8)r<<=BigInt(64n),r|=n.getBigUint64(i);return r}let a=e+(r>>4<<3),s=i(e,a),o=i(a,t);return s<<BigInt((t-a)*8)|o};r=r<<BigInt((n.byteLength-t)*8)|i(t,n.byteLength)}return r};let e7={Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,AggregateError:"function"==typeof AggregateError?AggregateError:null};eO[101]=()=>{let e=eV();if(!e7[e[0]]){let t=Error(e[1],{cause:e[2]});return t.name=e[0],t}return e7[e[0]](e[1],{cause:e[2]})},eO[105]=e=>{let t;if(!1===eT.structuredClone)throw Error("Structured clone extension is disabled");let r=x.getUint32(ew-4);j||(j=new Map);let n=S[ew],i={target:t=n>=144&&n<160||220==n||221==n?[]:n>=128&&n<144||222==n||223==n?new Map:(n>=199&&n<=201||n>=212&&n<=216)&&115===S[ew+1]?new Set:{}};j.set(r,i);let a=eV();if(!i.used)return i.target=a;if(Object.assign(t,a),t instanceof Map)for(let[e,r]of a.entries())t.set(e,r);if(t instanceof Set)for(let e of Array.from(a))t.add(e);return t},eO[112]=e=>{if(!1===eT.structuredClone)throw Error("Structured clone extension is disabled");let t=x.getUint32(ew-4),r=j.get(t);return r.used=!0,r.target},eO[115]=()=>new Set(eV());let te=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(e=>e+"Array"),tt="object"==typeof globalThis?globalThis:window;eO[116]=e=>{let t=e[0],r=Uint8Array.prototype.slice.call(e,1).buffer,n=te[t];if(!n){if(16===t)return r;if(17===t)return new DataView(r);throw Error("Could not find typed array for code "+t)}return new tt[n](r)},eO[120]=()=>{let e=eV();return new RegExp(e[0],e[1])};let tr=[];function tn(e){C&&C();let t=E,r=ew,n=eA,i=eC,a=eD,s=I,o=ex,l=j,d=w,c=new Uint8Array(S.slice(0,E)),u=k,p=k.slice(0,k.length),h=eT,y=eN,m=e();return E=t,ew=r,eA=n,eC=i,eD=a,I=s,ex=o,j=l,w=d,S=c,eN=y,(k=u).splice(0,k.length,...p),eT=h,x=new DataView(S.buffer,S.byteOffset,S.byteLength),m}function ti(){S=null,j=null,k=null}eO[98]=e=>{let t=(e[0]<<24)+(e[1]<<16)+(e[2]<<8)+e[3],r=ew;return ew+=t-e.length,w=tr,(w=[e2(),e2()]).position0=0,w.position1=0,w.postBundlePosition=ew,ew=r,eV()},eO[255]=e=>4==e.length?new Date((0x1000000*e[0]+(e[1]<<16)+(e[2]<<8)+e[3])*1e3):8==e.length?new Date(((e[0]<<22)+(e[1]<<14)+(e[2]<<6)+(e[3]>>2))/1e6+((3&e[3])*0x100000000+0x1000000*e[4]+(e[5]<<16)+(e[6]<<8)+e[7])*1e3):12==e.length?new Date(((e[0]<<24)+(e[1]<<16)+(e[2]<<8)+e[3])/1e6+((128&e[4]?-0x1000000000000:0)+0x10000000000*e[6]+0x100000000*e[7]+0x1000000*e[8]+(e[9]<<16)+(e[10]<<8)+e[11])*1e3):new Date("invalid");let ta=Array(147);for(let e=0;e<256;e++)ta[e]=+("1e"+Math.floor(45.15-.30103*e));var ts=new eL({useRecords:!1});ts.unpack,ts.unpackMultiple,ts.unpack,new Uint8Array(new Float32Array(1).buffer,0,4);try{t=new TextEncoder}catch(e){}let to="undefined"!=typeof Buffer,tl=to?function(e){return Buffer.allocUnsafeSlow(e)}:Uint8Array,td=to?Buffer:Uint8Array,tc=to?0x100000000:0x7fd00000,tu=0,tp=null,th=/[\u0080-\uFFFF]/,ty=Symbol("record-id");class tm extends eL{constructor(e){let d,c,u,p;super(e),this.offset=0;let h=td.prototype.utf8Write?function(e,t){return i.utf8Write(e,t,i.byteLength-t)}:!!t&&!!t.encodeInto&&function(e,r){return t.encodeInto(e,i.subarray(r)).written},y=this;e||(e={});let m=e&&e.sequential,f=e.structures||e.saveStructures,b=e.maxSharedStructures;if(null==b&&(b=32*!!f),b>8160)throw Error("Maximum maxSharedStructure is 8160");e.structuredClone&&void 0==e.moreTypes&&(this.moreTypes=!0);let g=e.maxOwnStructures;null==g&&(g=f?32:64),this.structures||!1==e.useRecords||(this.structures=[]);let K=b>32||g+b>64,v=b+64,S=b+g+64;if(S>8256)throw Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let E=[],k=0,I=0;this.pack=this.encode=function(e,t){let r;if(i||(s=(i=new tl(8192)).dataView||(i.dataView=new DataView(i.buffer,0,8192)),tu=0),(o=i.length-10)-tu<2048?(s=(i=new tl(i.length)).dataView||(i.dataView=new DataView(i.buffer,0,i.length)),o=i.length-10,tu=0):tu=tu+7&0x7ffffff8,d=tu,t&tA&&(tu+=255&t),p=y.structuredClone?new Map:null,y.bundleStrings&&"string"!=typeof e?(tp=[]).size=1/0:tp=null,u=y.structures){u.uninitialized&&(u=y._mergeStructures(y.getStructures()));let e=u.sharedLength||0;if(e>b)throw Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+u.sharedLength);if(!u.transitions){u.transitions=Object.create(null);for(let t=0;t<e;t++){let e=u[t];if(!e)continue;let r,n=u.transitions;for(let t=0,i=e.length;t<i;t++){let i=e[t];(r=n[i])||(r=n[i]=Object.create(null)),n=r}n[ty]=t+64}this.lastNamedStructuresLength=e}m||(u.nextId=e+64)}c&&(c=!1);try{y.randomAccessStructure&&e&&e.constructor&&e.constructor===Object?P(e):x(e);let r=tp;if(tp&&tK(d,x,0),p&&p.idsToInsert){let e=p.idsToInsert.sort((e,t)=>e.offset>t.offset?1:-1),t=e.length,n=-1;for(;r&&t>0;){let i=e[--t].offset+d;i<r.stringsPosition+d&&-1===n&&(n=0),i>r.position+d?n>=0&&(n+=6):(n>=0&&(s.setUint32(r.position+d,s.getUint32(r.position+d)+n),n=-1),r=r.previous,t++)}n>=0&&r&&s.setUint32(r.position+d,s.getUint32(r.position+d)+n),(tu+=6*e.length)>o&&O(tu),y.offset=tu;let a=function(e,t){let r,n=6*t.length,i=e.length-n;for(;r=t.pop();){let t=r.offset,a=r.id;e.copyWithin(t+n,t,i);let s=t+(n-=6);e[s++]=214,e[s++]=105,e[s++]=a>>24,e[s++]=a>>16&255,e[s++]=a>>8&255,e[s++]=255&a,i=t}return e}(i.subarray(d,tu),e);return p=null,a}if(y.offset=tu,t&tj)return i.start=d,i.end=tu,i;return i.subarray(d,tu)}catch(e){throw r=e,e}finally{if(u&&(w(),c&&y.saveStructures)){let n=u.sharedLength||0,a=i.subarray(d,tu),s=tv(u,y);if(!r){if(!1===y.saveStructures(s,s.isCompatible))return y.pack(e,t);return y.lastNamedStructuresLength=n,i.length>0x40000000&&(i=null),a}}i.length>0x40000000&&(i=null),t&tx&&(tu=d)}};let w=()=>{I<10&&I++;let e=u.sharedLength||0;if(u.length>e&&!m&&(u.length=e),k>1e4)u.transitions=null,I=0,k=0,E.length>0&&(E=[]);else if(E.length>0&&!m){for(let e=0,t=E.length;e<t;e++)E[e][ty]=0;E=[]}},j=e=>{var t=e.length;t<16?i[tu++]=144|t:t<65536?(i[tu++]=220,i[tu++]=t>>8,i[tu++]=255&t):(i[tu++]=221,s.setUint32(tu,t),tu+=4);for(let r=0;r<t;r++)x(e[r])},x=e=>{tu>o&&(i=O(tu));var t,a=typeof e;if("string"===a){let r,n=e.length;if(tp&&n>=4&&n<4096){if((tp.size+=n)>21760){let e,t,r=(tp[0]?3*tp[0].length+tp[1].length:0)+10;tu+r>o&&(i=O(tu+r)),tp.position?(t=tp,i[tu]=200,tu+=3,i[tu++]=98,e=tu-d,tu+=4,tK(d,x,0),s.setUint16(e+d-3,tu-d-e)):(i[tu++]=214,i[tu++]=98,e=tu-d,tu+=4),(tp=["",""]).previous=t,tp.size=0,tp.position=e}let t=th.test(e);tp[+!t]+=e,i[tu++]=193,x(t?-n:n);return}r=n<32?1:n<256?2:n<65536?3:5;let a=3*n;if(tu+a>o&&(i=O(tu+a)),n<64||!h){let a,s,o,l=tu+r;for(a=0;a<n;a++)(s=e.charCodeAt(a))<128?i[l++]=s:(s<2048?i[l++]=s>>6|192:((64512&s)==55296&&(64512&(o=e.charCodeAt(a+1)))==56320?(s=65536+((1023&s)<<10)+(1023&o),a++,i[l++]=s>>18|240,i[l++]=s>>12&63|128):i[l++]=s>>12|224,i[l++]=s>>6&63|128),i[l++]=63&s|128);t=l-tu-r}else t=h(e,tu+r);t<32?i[tu++]=160|t:t<256?(r<2&&i.copyWithin(tu+2,tu+1,tu+1+t),i[tu++]=217,i[tu++]=t):t<65536?(r<3&&i.copyWithin(tu+3,tu+2,tu+2+t),i[tu++]=218,i[tu++]=t>>8,i[tu++]=255&t):(r<5&&i.copyWithin(tu+5,tu+3,tu+3+t),i[tu++]=219,s.setUint32(tu,t),tu+=4),tu+=t}else if("number"===a)if(e>>>0===e)e<32||e<128&&!1===this.useRecords||e<64&&!this.randomAccessStructure?i[tu++]=e:e<256?(i[tu++]=204,i[tu++]=e):e<65536?(i[tu++]=205,i[tu++]=e>>8,i[tu++]=255&e):(i[tu++]=206,s.setUint32(tu,e),tu+=4);else if((0|e)===e)e>=-32?i[tu++]=256+e:e>=-128?(i[tu++]=208,i[tu++]=e+256):e>=-32768?(i[tu++]=209,s.setInt16(tu,e),tu+=2):(i[tu++]=210,s.setInt32(tu,e),tu+=4);else{let t;if((t=this.useFloat32)>0&&e<0x100000000&&e>=-0x80000000){let r;if(i[tu++]=202,s.setFloat32(tu,e),t<4||(0|(r=e*ta[(127&i[tu])<<1|i[tu+1]>>7]))===r){tu+=4;return}tu--}i[tu++]=203,s.setFloat64(tu,e),tu+=8}else if("object"===a||"function"===a)if(e){if(p){let t=p.get(e);if(t){t.id||(t.id=(p.idsToInsert||(p.idsToInsert=[])).push(t)),i[tu++]=214,i[tu++]=112,s.setUint32(tu,t.id),tu+=4;return}p.set(e,{offset:tu-d})}let l=e.constructor;if(l===Object)D(e);else if(l===Array)j(e);else if(l===Map)if(this.mapAsEmptyObject)i[tu++]=128;else for(let[r,n]of((t=e.size)<16?i[tu++]=128|t:t<65536?(i[tu++]=222,i[tu++]=t>>8,i[tu++]=255&t):(i[tu++]=223,s.setUint32(tu,t),tu+=4),e))x(r),x(n);else{for(let t=0,a=r.length;t<a;t++)if(e instanceof n[t]){let n,a=r[t];if(a.write){a.type&&(i[tu++]=212,i[tu++]=a.type,i[tu++]=0);let t=a.write.call(this,e);t===e?Array.isArray(e)?j(e):D(e):x(t);return}let l=i,d=s,c=tu;i=null;try{n=a.pack.call(this,e,e=>(i=l,l=null,(tu+=e)>o&&O(tu),{target:i,targetView:s,position:tu-e}),x)}finally{l&&(i=l,s=d,tu=c,o=i.length-10)}n&&(n.length+tu>o&&O(n.length+tu),tu=tg(n,i,tu,a.type));return}if(Array.isArray(e))j(e);else{if(e.toJSON){let t=e.toJSON();if(t!==e)return x(t)}if("function"===a)return x(this.writeFunction&&this.writeFunction(e));D(e)}}}else i[tu++]=192;else if("boolean"===a)i[tu++]=e?195:194;else if("bigint"===a){if(e<0x8000000000000000&&e>=-0x8000000000000000)i[tu++]=211,s.setBigInt64(tu,e);else if(e<0xffffffffffffffff&&e>0)i[tu++]=207,s.setBigUint64(tu,e);else if(this.largeBigIntToFloat)i[tu++]=203,s.setFloat64(tu,Number(e));else if(this.largeBigIntToString)return x(e.toString());else if(this.useBigIntExtension||this.moreTypes){let t,r=e<0?BigInt(-1):BigInt(0);if(e>>BigInt(65536)===r){let n=BigInt(0xffffffffffffffff)-BigInt(1),i=[];for(;i.push(e&n),e>>BigInt(63)!==r;)e>>=BigInt(64);(t=new Uint8Array(new BigUint64Array(i).buffer)).reverse()}else{let r=e<0,n=(r?~e:e).toString(16);if(n.length%2?n="0"+n:parseInt(n.charAt(0),16)>=8&&(n="00"+n),to)t=Buffer.from(n,"hex");else{t=new Uint8Array(n.length/2);for(let e=0;e<t.length;e++)t[e]=parseInt(n.slice(2*e,2*e+2),16)}if(r)for(let e=0;e<t.length;e++)t[e]=~t[e]}t.length+tu>o&&O(t.length+tu),tu=tg(t,i,tu,66);return}else throw RangeError(e+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string");tu+=8}else if("undefined"===a)this.encodeUndefinedAsNil?i[tu++]=192:(i[tu++]=212,i[tu++]=0,i[tu++]=0);else throw Error("Unknown type: "+a)},A=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?e=>{let t,r;if(this.skipValues)for(let r in t=[],e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(r))&&!this.skipValues.includes(e[r])&&t.push(r);else t=Object.keys(e);let n=t.length;if(n<16?i[tu++]=128|n:n<65536?(i[tu++]=222,i[tu++]=n>>8,i[tu++]=255&n):(i[tu++]=223,s.setUint32(tu,n),tu+=4),this.coercibleKeyAsNumber)for(let i=0;i<n;i++){let n=Number(r=t[i]);x(isNaN(n)?r:n),x(e[r])}else for(let i=0;i<n;i++)x(r=t[i]),x(e[r])}:e=>{i[tu++]=222;let t=tu-d;tu+=2;let r=0;for(let t in e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(t))&&(x(t),x(e[t]),r++);if(r>65535)throw Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');i[t+++d]=r>>8,i[t+d]=255&r},T=!1===this.useRecords?A:e.progressiveRecords&&!K?e=>{let t,r,n=u.transitions||(u.transitions=Object.create(null)),a=tu++-d;for(let i in e)if("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(i)){if(r=n[i])n=r;else{let s=Object.keys(e),o=n;n=u.transitions;let l=0;for(let e=0,t=s.length;e<t;e++){let t=s[e];!(r=n[t])&&(r=n[t]=Object.create(null),l++),n=r}a+d+1==tu?(tu--,R(n,s,l)):M(n,s,a,l),t=!0,n=o[i]}x(e[i])}if(!t){let t=n[ty];t?i[a+d]=t:M(n,Object.keys(e),a,0)}}:e=>{let t,r=u.transitions||(u.transitions=Object.create(null)),n=0;for(let i in e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(i))&&(!(t=r[i])&&(t=r[i]=Object.create(null),n++),r=t);let a=r[ty];for(let t in a?a>=96&&K?(i[tu++]=(31&(a-=96))+96,i[tu++]=a>>5):i[tu++]=a:R(r,r.__keys__||Object.keys(e),n),e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(t))&&x(e[t])},C="function"==typeof this.useRecords&&this.useRecords,D=C?e=>{C(e)?T(e):A(e)}:T,O=e=>{let t;if(e>0x1000000){if(e-d>tc)throw Error("Packed buffer would be larger than maximum buffer size");t=Math.min(tc,4096*Math.round(Math.max((e-d)*(e>0x4000000?1.25:2),4194304)/4096))}else t=(Math.max(e-d<<2,i.length-1)>>12)+1<<12;let r=new tl(t);return s=r.dataView||(r.dataView=new DataView(r.buffer,0,t)),e=Math.min(e,i.length),i.copy?i.copy(r,0,d,e):r.set(i.slice(d,e)),tu-=d,d=0,o=r.length-10,i=r},R=(e,t,r)=>{let n=u.nextId;n||(n=64),n<v&&this.shouldShareStructure&&!this.shouldShareStructure(t)?((n=u.nextOwnId)<S||(n=v),u.nextOwnId=n+1):(n>=S&&(n=v),u.nextId=n+1);let a=t.highByte=n>=96&&K?n-96>>5:-1;e[ty]=n,e.__keys__=t,u[n-64]=t,n<v?(t.isShared=!0,u.sharedLength=n-63,c=!0,a>=0?(i[tu++]=(31&n)+96,i[tu++]=a):i[tu++]=n):(a>=0?(i[tu++]=213,i[tu++]=114,i[tu++]=(31&n)+96,i[tu++]=a):(i[tu++]=212,i[tu++]=114,i[tu++]=n),r&&(k+=I*r),E.length>=g&&(E.shift()[ty]=0),E.push(e),x(t))},M=(e,t,r,n)=>{let s=i,l=tu,c=o,u=d;tu=0,d=0,(i=a)||(a=i=new tl(8192)),o=i.length-10,R(e,t,n),a=i;let p=tu;if(i=s,tu=l,o=c,d=u,p>1){let e=tu+p-1;e>o&&O(e);let t=r+d;i.copyWithin(t+p,t+1,tu),i.set(a.slice(0,p),t),tu=e}else i[r+d]=a[0]},P=e=>{let t=l(e,i,d,tu,u,O,(e,t,r)=>{if(r)return c=!0;tu=t;let n=i;return(x(e),w(),n!==i)?{position:tu,targetView:s,target:i}:tu},this);if(0===t)return D(e);tu=t}}useBuffer(e){(i=e).dataView||(i.dataView=new DataView(i.buffer,i.byteOffset,i.byteLength)),s=i.dataView,tu=0}set position(e){tu=e}get position(){return tu}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}function tf(e,t,r,n){let i=e.byteLength;if(i+1<256){var{target:a,position:s}=r(4+i);a[s++]=199,a[s++]=i+1}else if(i+1<65536){var{target:a,position:s}=r(5+i);a[s++]=200,a[s++]=i+1>>8,a[s++]=i+1&255}else{var{target:a,position:s,targetView:o}=r(7+i);a[s++]=201,o.setUint32(s,i+1),s+=4}a[s++]=116,a[s++]=t,e.buffer||(e=new Uint8Array(e)),a.set(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),s)}function tb(e,t){let r=e.byteLength;if(r<256){var n,i,{target:n,position:i}=t(r+2);n[i++]=196,n[i++]=r}else if(r<65536){var{target:n,position:i}=t(r+3);n[i++]=197,n[i++]=r>>8,n[i++]=255&r}else{var{target:n,position:i,targetView:a}=t(r+5);n[i++]=198,a.setUint32(i,r),i+=4}n.set(e,i)}function tg(e,t,r,n){let i=e.length;switch(i){case 1:t[r++]=212;break;case 2:t[r++]=213;break;case 4:t[r++]=214;break;case 8:t[r++]=215;break;case 16:t[r++]=216;break;default:i<256?(t[r++]=199,t[r++]=i):(i<65536?(t[r++]=200,t[r++]=i>>8):(t[r++]=201,t[r++]=i>>24,t[r++]=i>>16&255,t[r++]=i>>8&255),t[r++]=255&i)}return t[r++]=n,t.set(e,r),r+=i}function tK(e,t,r){if(tp.length>0){s.setUint32(tp.position+e,tu+r-tp.position-e),tp.stringsPosition=tu-e;let n=tp;tp=null,t(n[0]),t(n[1])}}function tv(e,t){return e.isCompatible=e=>{let r=!e||(t.lastNamedStructuresLength||0)===e.length;return r||t._mergeStructures(e),r},e}n=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,DataView,eM],r=[{pack(e,t,r){let n=e.getTime()/1e3;if((this.useTimestamp32||0===e.getMilliseconds())&&n>=0&&n<0x100000000){let{target:e,targetView:r,position:i}=t(6);e[i++]=214,e[i++]=255,r.setUint32(i,n)}else if(n>0&&n<0x100000000){let{target:r,targetView:i,position:a}=t(10);r[a++]=215,r[a++]=255,i.setUint32(a,4e6*e.getMilliseconds()+(n/1e3/0x100000000|0)),i.setUint32(a+4,n)}else if(isNaN(n)){if(this.onInvalidDate)return t(0),r(this.onInvalidDate());let{target:e,targetView:n,position:i}=t(3);e[i++]=212,e[i++]=255,e[i++]=255}else{let{target:r,targetView:i,position:a}=t(15);r[a++]=199,r[a++]=12,r[a++]=255,i.setUint32(a,1e6*e.getMilliseconds()),i.setBigInt64(a+4,BigInt(Math.floor(n)))}}},{pack(e,t,r){if(this.setAsEmptyObject)return t(0),r({});let n=Array.from(e),{target:i,position:a}=t(3*!!this.moreTypes);this.moreTypes&&(i[a++]=212,i[a++]=115,i[a++]=0),r(n)}},{pack(e,t,r){let{target:n,position:i}=t(3*!!this.moreTypes);this.moreTypes&&(n[i++]=212,n[i++]=101,n[i++]=0),r([e.name,e.message,e.cause])}},{pack(e,t,r){let{target:n,position:i}=t(3*!!this.moreTypes);this.moreTypes&&(n[i++]=212,n[i++]=120,n[i++]=0),r([e.source,e.flags])}},{pack(e,t){this.moreTypes?tf(e,16,t):tb(to?Buffer.from(e):new Uint8Array(e),t)}},{pack(e,t){let r=e.constructor;r!==td&&this.moreTypes?tf(e,te.indexOf(r.name),t):tb(e,t)}},{pack(e,t){this.moreTypes?tf(e,17,t):tb(to?Buffer.from(e):new Uint8Array(e),t)}},{pack(e,t){let{target:r,position:n}=t(1);r[n]=193}}];let tS=new tm({useRecords:!1});tS.pack,tS.pack;let{NEVER:tE,ALWAYS:tk,DECIMAL_ROUND:tI,DECIMAL_FIT:tw}={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4},tj=512,tx=1024,tA=2048,tT=["num","object","string","ascii"];tT[16]="date";let tC=[!1,!0,!0,!1,!1,!0,!0,!1];try{Function(""),d=!0}catch(e){}let tD="undefined"!=typeof Buffer;try{u=new TextEncoder}catch(e){}let tO=tD?function(e,t,r){return e.utf8Write(t,r,e.byteLength-r)}:!!u&&!!u.encodeInto&&function(e,t,r){return u.encodeInto(t,e.subarray(r)).written};function tR(e,t,r,n){let i;return(i=e.ascii8||e.num8)?(r.setInt8(t,n,!0),c=t+1,i):(i=e.string16||e.object16)?(r.setInt16(t,n,!0),c=t+2,i):(i=e.num32)?(r.setUint32(t,0xe0000100+n,!0),c=t+4,i):(i=e.num64)?(r.setFloat64(t,NaN,!0),r.setInt8(t,n),c=t+8,i):void(c=t)}function tM(e,t,r){let n=tT[t]+(r<<3),i=e[n]||(e[n]=Object.create(null));return i.__type=t,i.__size=r,i.__parent=e,i}Symbol("type"),Symbol("parent"),l=function e(t,r,n,i,a,s,o,l){let d,u=l.typedStructs||(l.typedStructs=[]),p=r.dataView,h=(u.lastStringStart||100)+i,y=r.length-10,m=i;i>y&&(p=(r=s(i)).dataView,i-=n,m-=n,h-=n,n=0,y=r.length-10);let f,b=h,g=u.transitions||(u.transitions=Object.create(null)),K=u.nextId||u.length,v=K<15?1:K<240?2:K<61440?3:4*(K<0xf00000);if(0===v)return 0;i+=v;let S=[],E=0;for(let e in t){let a=t[e],l=g[e];switch(!l&&(g[e]=l={key:e,parent:g,enumerationOffset:0,ascii0:null,ascii8:null,num8:null,string16:null,object16:null,num32:null,float64:null,date64:null}),i>y&&(p=(r=s(i)).dataView,i-=n,m-=n,h-=n,b-=n,n=0,y=r.length-10),typeof a){case"number":if(K<200||!l.num64){if((0|a)===a&&a<0x20000000&&a>-0x1f000000){a<246&&a>=0&&(l.num8&&!(K>200&&l.num32)||a<32&&!l.num32)?(g=l.num8||tM(l,0,1),r[i++]=a):(g=l.num32||tM(l,0,4),p.setUint32(i,a,!0),i+=4);break}else if(a<0x100000000&&a>=-0x80000000&&(p.setFloat32(i,a,!0),tC[r[i+3]>>>5])){let e;if((0|(e=a*ta[(127&r[i+3])<<1|r[i+2]>>7]))===e){g=l.num32||tM(l,0,4),i+=4;break}}}g=l.num64||tM(l,0,8),p.setFloat64(i,a,!0),i+=8;break;case"string":let v,k=a.length;if(f=b-h,(k<<2)+b>y&&(p=(r=s((k<<2)+b)).dataView,i-=n,m-=n,h-=n,b-=n,n=0,y=r.length-10),k>65280+f>>2){S.push(e,a,i-m);break}let I=b;if(k<64){let e,t,n;for(e=0;e<k;e++)(t=a.charCodeAt(e))<128?r[b++]=t:(t<2048?(v=!0,r[b++]=t>>6|192):((64512&t)==55296&&(64512&(n=a.charCodeAt(e+1)))==56320?(v=!0,t=65536+((1023&t)<<10)+(1023&n),e++,r[b++]=t>>18|240,r[b++]=t>>12&63|128):(v=!0,r[b++]=t>>12|224),r[b++]=t>>6&63|128),r[b++]=63&t|128)}else b+=tO(r,a,b),v=b-I>k;if(f<160||f<246&&(l.ascii8||l.string8)){if(v)(g=l.string8)||(u.length>10&&(g=l.ascii8)?(g.__type=2,l.ascii8=null,l.string8=g,o(null,0,!0)):g=tM(l,2,1));else if(0!==f||d)(g=l.ascii8)||u.length>10&&(g=l.string8)||(g=tM(l,3,1));else{d=!0,g=l.ascii0||tM(l,3,0);break}r[i++]=f}else g=l.string16||tM(l,2,2),p.setUint16(i,f,!0),i+=2;break;case"object":a?a.constructor===Date?(g=l.date64||tM(l,16,8),p.setFloat64(i,a.getTime(),!0),i+=8):S.push(e,a,E):(l=tR(l,i,p,-10))?(g=l,i=c):S.push(e,a,E);break;case"boolean":g=l.num8||l.ascii8||tM(l,0,1),r[i++]=a?249:248;break;case"undefined":(l=tR(l,i,p,-9))?(g=l,i=c):S.push(e,a,E);break;default:S.push(e,a,E)}E++}for(let e=0,t=S.length;e<t;){let t,a=S[e++],s=S[e++],l=S[e++],d=g[a];if(d||(g[a]=d={key:a,parent:g,enumerationOffset:l-E,ascii0:null,ascii8:null,num8:null,string16:null,object16:null,num32:null,float64:null}),s){let e;(f=b-h)<65280?(g=d.object16)?e=2:(g=d.object32)?e=4:(g=tM(d,1,2),e=2):(g=d.object32||tM(d,1,4),e=4),"object"==typeof(t=o(s,b))?(b=t.position,p=t.targetView,r=t.target,h-=n,i-=n,m-=n,n=0):b=t,2===e?(p.setUint16(i,f,!0),i+=2):(p.setUint32(i,f,!0),i+=4)}else g=d.object16||tM(d,1,2),p.setInt16(i,null===s?-10:-9,!0),i+=2;E++}let k=g[ty];if(null==k){let e;k=l.typedStructs.length;let t=[],r=g;for(;void 0!==(e=r.__type);){let n=[e,r.__size,(r=r.__parent).key];r.enumerationOffset&&n.push(r.enumerationOffset),t.push(n),r=r.parent}t.reverse(),g[ty]=k,l.typedStructs[k]=t,o(null,0,!0)}switch(v){case 1:if(k>=16)return 0;r[m]=k+32;break;case 2:if(k>=256)return 0;r[m]=56,r[m+1]=k;break;case 3:if(k>=65536)return 0;r[m]=57,p.setUint16(m+1,k,!0);break;case 4:if(k>=0x1000000)return 0;p.setUint32(m,(k<<8)+58,!0)}if(i<h){if(h===b)return i;r.copyWithin(i,h,b),b+=i-h,u.lastStringStart=i-m}else if(i>h)return h===b?i:(u.lastStringStart=i-m,e(t,r,n,m,a,s,o,l));return b},tv=function(e,t){if(t.typedStructs){let r=new Map;r.set("named",e),r.set("typed",t.typedStructs),e=r}let r=t.lastTypedStructuresLength||0;return e.isCompatible=e=>{let n=!0;return e instanceof Map?((e.get("named")||[]).length!==(t.lastNamedStructuresLength||0)&&(n=!1),(e.get("typed")||[]).length!==r&&(n=!1)):(e instanceof Array||Array.isArray(e))&&e.length!==(t.lastNamedStructuresLength||0)&&(n=!1),n||t._mergeStructures(e),n},t.lastTypedStructuresLength=t.typedStructs&&t.typedStructs.length,e};var tP=Symbol.for("source");function tN(e){switch(e){case 246:return null;case 247:return;case 248:return!1;case 249:return!0}throw Error("Unknown constant")}A=function(e,t,r,n){let i=e[t++]-32;if(i>=24)switch(i){case 24:i=e[t++];break;case 25:i=e[t++]+(e[t++]<<8);break;case 26:i=e[t++]+(e[t++]<<8)+(e[t++]<<16);break;case 27:i=e[t++]+(e[t++]<<8)+(e[t++]<<16)+(e[t++]<<24)}let a=n.typedStructs&&n.typedStructs[i];if(!a){if(e=Uint8Array.prototype.slice.call(e,t,r),r-=t,t=0,!n.getStructures)throw Error(`Reference to shared structure ${i} without getStructures method`);if(n._mergeStructures(n.getStructures()),!n.typedStructs)throw Error("Could not find any shared typed structures");if(n.lastTypedStructuresLength=n.typedStructs.length,!(a=n.typedStructs[i]))throw Error("Could not find typed structure "+i)}var s=a.construct,o=a.fullConstruct;if(!s){let e;s=a.construct=function(){},(o=a.fullConstruct=function(){}).prototype=n.structPrototype||{};var l=s.prototype=n.structPrototype?Object.create(n.structPrototype):{};let t=[],r=0;for(let i=0,s=a.length;i<s;i++){let s,o,[l,d,c,u]=a[i];"__proto__"===c&&(c="__proto_");let h={key:c,offset:r};switch(u?t.splice(i+u,0,h):t.push(h),d){case 0:s=()=>0;break;case 1:s=(e,t)=>{let r=e.bytes[t+h.offset];return r>=246?tN(r):r};break;case 2:s=(e,t)=>{let r=e.bytes,n=(r.dataView||(r.dataView=new DataView(r.buffer,r.byteOffset,r.byteLength))).getUint16(t+h.offset,!0);return n>=65280?tN(255&n):n};break;case 4:s=(e,t)=>{let r=e.bytes,n=(r.dataView||(r.dataView=new DataView(r.buffer,r.byteOffset,r.byteLength))).getUint32(t+h.offset,!0);return n>=0xffffff00?tN(255&n):n}}switch(h.getRef=s,r+=d,l){case 3:e&&!e.next&&(e.next=h),e=h,h.multiGetCount=0,o=function(e){let t=e.bytes,n=e.position,i=r+n,a=s(e,n);if("number"!=typeof a)return a;let o,l=h.next;for(;l&&"number"!=typeof(o=l.getRef(e,n));)o=null,l=l.next;return(null==o&&(o=e.bytesEnd-i),e.srcString)?e.srcString.slice(a,o):function(e,t,r){let n=S;S=e,ew=t;try{return eQ(r)}finally{S=n}}(t,a+i,o-a)};break;case 2:case 1:e&&!e.next&&(e.next=h),e=h,o=function(e){let t=e.position,i=r+t,a=s(e,t);if("number"!=typeof a)return a;let o=e.bytes,d,c=h.next;for(;c&&"number"!=typeof(d=c.getRef(e,t));)d=null,c=c.next;if(null==d&&(d=e.bytesEnd-i),2===l)return o.toString("utf8",a+i,d+i);p=e;try{return n.unpack(o,{start:a+i,end:d+i})}finally{p=null}};break;case 0:switch(d){case 4:o=function(e){let t=e.bytes,r=t.dataView||(t.dataView=new DataView(t.buffer,t.byteOffset,t.byteLength)),n=e.position+h.offset,i=r.getInt32(n,!0);if(i<0x20000000){if(i>-0x1f000000)return i;if(i>-0x20000000)return tN(255&i)}let a=r.getFloat32(n,!0),s=ta[(127&t[n+3])<<1|t[n+2]>>7];return(s*a+(a>0?.5:-.5)|0)/s};break;case 8:o=function(e){let t=e.bytes,r=(t.dataView||(t.dataView=new DataView(t.buffer,t.byteOffset,t.byteLength))).getFloat64(e.position+h.offset,!0);if(isNaN(r)){let r=t[e.position+h.offset];if(r>=246)return tN(r)}return r};break;case 1:o=function(e){let t=e.bytes[e.position+h.offset];return t<246?t:tN(t)}}break;case 16:o=function(e){let t=e.bytes;return new Date((t.dataView||(t.dataView=new DataView(t.buffer,t.byteOffset,t.byteLength))).getFloat64(e.position+h.offset,!0))}}h.get=o}if(d){let e,r=[],i=[],a=0;for(let s of t){if(n.alwaysLazyProperty&&n.alwaysLazyProperty(s.key)){e=!0;continue}Object.defineProperty(l,s.key,{get:function(e){return function(){return e(this[tP])}}(s.get),enumerable:!0});let t="v"+a++;i.push(t),r.push("o["+JSON.stringify(s.key)+"]="+t+"(s)")}e&&r.push("__proto__:this");let s=Function(...i,"var c=this;return function(s){var o=new c();"+r.join(";")+";return o;}").apply(o,t.map(e=>e.get));Object.defineProperty(l,"toJSON",{value(e){return s.call(this,this[tP])}})}else Object.defineProperty(l,"toJSON",{value(e){let r={};for(let e=0,n=t.length;e<n;e++){let n=t[e].key;r[n]=this[n]}return r}})}var c=new s;return c[tP]={bytes:e,position:t,srcString:"",bytesEnd:r},c},T=function(e){if(!(e instanceof Map))return e;let t=e.get("typed")||[];Object.isFrozen(t)&&(t=t.map(e=>e.slice(0)));let r=e.get("named"),n=Object.create(null);for(let e=0,r=t.length;e<r;e++){let r=t[e],i=n;for(let[e,t,n]of r){let r=i[n];r||(i[n]=r={key:n,parent:i,enumerationOffset:0,ascii0:null,ascii8:null,num8:null,string16:null,object16:null,num32:null,float64:null,date64:null}),i=tM(r,e,t)}i[ty]=e}return t.transitions=n,this.typedStructs=t,this.lastTypedStructuresLength=t.length,r},C=function(){p&&(p.bytes=Uint8Array.prototype.slice.call(p.bytes,p.position,p.bytesEnd),p.position=0,p.bytesEnd=p.bytes.length)};var tJ=e.i(88947);if(tJ.Transform,tJ.Transform,e.i(62562),void 0===process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED||"true"!==process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED.toLowerCase()){let t;try{(t=e.r(70156))&&function(e){function t(t){return function(r){let n=ex[eA++];if(null==n){if(w)return eQ(r);let i=S.byteOffset,a=e(ew-t+i,E+i,S.buffer);if("string"==typeof a)n=a,ex=ej;else if(eA=1,eD=1,void 0===(n=(ex=a)[0]))throw Error("Unexpected end of buffer")}let i=n.length;return i<=r?(ew+=r,n):(I=n,eC=ew,eD=ew+i,ew+=r,n.slice(0,r))}}eB=t(1),eW=t(2),eU=t(3),e$=t(5)}(t.extractStrings)}catch(e){}}let tL="5.58.7",t_=new tm({useRecords:!1,encodeUndefinedAsNil:!0}).pack;class tF{constructor(e){this.queue=e,this.version=tL;let t=this.queue.keys;this.moveToFinishedKeys=[t.wait,t.active,t.prioritized,t.events,t.stalled,t.limiter,t.delayed,t.paused,t.meta,t.pc,void 0,void 0,void 0,void 0]}execCommand(e,t,r){return e[`${t}:${this.version}`](r)}async isJobInList(e,t){let r=await this.queue.client;return Number.isInteger(el(this.queue.redisVersion,"6.0.6")?await this.execCommand(r,"isJobInList",[e,t]):await r.lpos(e,t))}addDelayedJobArgs(e,t,r){let n=this.queue.keys,i=[n.marker,n.meta,n.id,n.delayed,n.completed,n.events];return i.push(t_(r),e.data,t),i}addDelayedJob(e,t,r,n){let i=this.addDelayedJobArgs(t,r,n);return this.execCommand(e,"addDelayedJob",i)}addPrioritizedJobArgs(e,t,r){let n=this.queue.keys,i=[n.marker,n.meta,n.id,n.prioritized,n.delayed,n.completed,n.active,n.events,n.pc];return i.push(t_(r),e.data,t),i}addPrioritizedJob(e,t,r,n){let i=this.addPrioritizedJobArgs(t,r,n);return this.execCommand(e,"addPrioritizedJob",i)}addParentJobArgs(e,t,r){let n=this.queue.keys,i=[n.meta,n.id,n.delayed,n.completed,n.events];return i.push(t_(r),e.data,t),i}addParentJob(e,t,r,n){let i=this.addParentJobArgs(t,r,n);return this.execCommand(e,"addParentJob",i)}addStandardJobArgs(e,t,r){let n=this.queue.keys,i=[n.wait,n.paused,n.meta,n.id,n.completed,n.delayed,n.active,n.events,n.marker];return i.push(t_(r),e.data,t),i}addStandardJob(e,t,r,n){let i=this.addStandardJobArgs(t,r,n);return this.execCommand(e,"addStandardJob",i)}async addJob(e,t,r,n,i={}){let a,s,o=this.queue.keys,l=t.parent,d=[o[""],void 0!==n?n:"",t.name,t.timestamp,t.parentKey||null,i.waitChildrenKey||null,i.parentDependenciesKey||null,l,t.repeatJobKey,t.deduplicationId?`${o.de}:${t.deduplicationId}`:null];if(r.repeat){let e=Object.assign({},r.repeat);e.startDate&&(e.startDate=+new Date(e.startDate)),e.endDate&&(e.endDate=+new Date(e.endDate)),a=t_(Object.assign(Object.assign({},r),{repeat:e}))}else a=t_(r);if((s=i.waitChildrenKey?await this.addParentJob(e,t,a,d):"number"==typeof r.delay&&r.delay>0?await this.addDelayedJob(e,t,a,d):r.priority?await this.addPrioritizedJob(e,t,a,d):await this.addStandardJob(e,t,a,d))<0)throw this.finishedErrors({code:s,parentKey:i.parentKey,command:"addJob"});return s}pauseArgs(e){let t="wait",r="paused";e||(t="paused",r="wait");let n=[t,r,"meta","prioritized"].map(e=>this.queue.toKey(e));return n.push(this.queue.keys.events,this.queue.keys.delayed,this.queue.keys.marker),n.concat([e?"paused":"resumed"])}async pause(e){let t=await this.queue.client,r=this.pauseArgs(e);return this.execCommand(t,"pause",r)}addRepeatableJobArgs(e,t,r,n){let i=this.queue.keys;return[i.repeat,i.delayed].concat([t,t_(r),n,e,i[""]])}async addRepeatableJob(e,t,r,n){let i=await this.queue.client,a=this.addRepeatableJobArgs(e,t,r,n);return this.execCommand(i,"addRepeatableJob",a)}async addJobScheduler(e,t,r,n,i,a,s){let o=await this.queue.client,l=this.queue.keys,d=[l.repeat,l.delayed,l.wait,l.paused,l.meta,l.prioritized,l.marker,l.id,l.events,l.pc,l.active],c=[t,t_(i),e,r,t_(n),t_(a),Date.now(),l[""],s?this.queue.toKey(s):""];return this.execCommand(o,"addJobScheduler",d.concat(c))}async updateRepeatableJobMillis(e,t,r,n){let i=[this.queue.keys.repeat,r,t,n];return this.execCommand(e,"updateRepeatableJobMillis",i)}async updateJobSchedulerNextMillis(e,t,r,n,i){let a=await this.queue.client,s=this.queue.keys,o=[s.repeat,s.delayed,s.wait,s.paused,s.meta,s.prioritized,s.marker,s.id,s.events,s.pc,i?this.queue.toKey(i):"",s.active],l=[t,e,r,t_(n),Date.now(),s[""],i];return this.execCommand(a,"updateJobScheduler",o.concat(l))}removeRepeatableArgs(e,t,r){let n=this.queue.keys;return[n.repeat,n.delayed,n.events].concat([e,this.getRepeatConcatOptions(t,r),r,n[""]])}getRepeatConcatOptions(e,t){return t&&t.split(":").length>2?t:e}async removeRepeatable(e,t,r){let n=await this.queue.client,i=this.removeRepeatableArgs(e,t,r);return this.execCommand(n,"removeRepeatable",i)}async removeJobScheduler(e){let t=await this.queue.client,r=this.queue.keys,n=[r.repeat,r.delayed,r.events],i=[e,r[""]];return this.execCommand(t,"removeJobScheduler",n.concat(i))}removeArgs(e,t){let r=[e,"repeat"].map(e=>this.queue.toKey(e)),n=[e,+!!t,this.queue.toKey("")];return r.concat(n)}async remove(e,t){let r=await this.queue.client,n=this.removeArgs(e,t),i=await this.execCommand(r,"removeJob",n);if(i<0)throw this.finishedErrors({code:i,jobId:e,command:"removeJob"});return i}async removeUnprocessedChildren(e){let t=await this.queue.client,r=[this.queue.toKey(e),this.queue.keys.meta,this.queue.toKey(""),e];await this.execCommand(t,"removeUnprocessedChildren",r)}async extendLock(e,t,r,n){n=n||await this.queue.client;let i=[this.queue.toKey(e)+":lock",this.queue.keys.stalled,t,r,e];return this.execCommand(n,"extendLock",i)}async extendLocks(e,t,r){let n=await this.queue.client,i=[this.queue.keys.stalled,this.queue.toKey(""),t_(t),t_(e),r];return this.execCommand(n,"extendLocks",i)}async updateData(e,t){let r=await this.queue.client,n=[this.queue.toKey(e.id)],i=JSON.stringify(t),a=await this.execCommand(r,"updateData",n.concat([i]));if(a<0)throw this.finishedErrors({code:a,jobId:e.id,command:"updateData"})}async updateProgress(e,t){let r=await this.queue.client,n=[this.queue.toKey(e),this.queue.keys.events,this.queue.keys.meta],i=JSON.stringify(t),a=await this.execCommand(r,"updateProgress",n.concat([e,i]));if(a<0)throw this.finishedErrors({code:a,jobId:e,command:"updateProgress"})}async addLog(e,t,r){let n=await this.queue.client,i=[this.queue.toKey(e),this.queue.toKey(e)+":logs"],a=await this.execCommand(n,"addLog",i.concat([e,t,r||""]));if(a<0)throw this.finishedErrors({code:a,jobId:e,command:"addLog"});return a}moveToFinishedArgs(e,t,r,n,i,a,s,o=!0,l){var d,c,u,p,h,y,m;let f=this.queue.keys,b=this.queue.opts,g="completed"===i?b.removeOnComplete:b.removeOnFail,K=this.queue.toKey(`metrics:${i}`),v=this.moveToFinishedKeys;v[10]=f[i],v[11]=this.queue.toKey(null!=(d=e.id)?d:""),v[12]=K,v[13]=this.queue.keys.marker;let S=this.getKeepJobs(n,g),E=[e.id,s,r,void 0===t?"null":t,i,!o||this.queue.closing?0:1,f[""],t_({token:a,name:b.name,keepJobs:S,limiter:b.limiter,lockDuration:b.lockDuration,attempts:e.opts.attempts,maxMetricsSize:(null==(c=b.metrics)?void 0:c.maxDataPoints)?null==(u=b.metrics)?void 0:u.maxDataPoints:"",fpof:!!(null==(p=e.opts)?void 0:p.failParentOnFailure),cpof:!!(null==(h=e.opts)?void 0:h.continueParentOnFailure),idof:!!(null==(y=e.opts)?void 0:y.ignoreDependencyOnFailure),rdof:!!(null==(m=e.opts)?void 0:m.removeDependencyOnFailure)}),l?t_(X(l)):void 0];return v.concat(E)}getKeepJobs(e,t){return void 0===e?t||{count:e?0:-1}:"object"==typeof e?e:"number"==typeof e?{count:e}:{count:e?0:-1}}async moveToFinished(e,t){let r=await this.queue.client,n=await this.execCommand(r,"moveToFinished",t);if(n<0)throw this.finishedErrors({code:n,jobId:e,command:"moveToFinished",state:"active"});if(void 0!==n)return tV(n)}drainArgs(e){let t=this.queue.keys;return[t.wait,t.paused,t.delayed,t.prioritized,t.repeat].concat([t[""],e?"1":"0"])}async drain(e){let t=await this.queue.client,r=this.drainArgs(e);return this.execCommand(t,"drain",r)}removeChildDependencyArgs(e,t){return[this.queue.keys[""]].concat([this.queue.toKey(e),t])}async removeChildDependency(e,t){let r=await this.queue.client,n=this.removeChildDependencyArgs(e,t),i=await this.execCommand(r,"removeChildDependency",n);switch(i){case 0:return!0;case 1:return!1;default:throw this.finishedErrors({code:i,jobId:e,parentKey:t,command:"removeChildDependency"})}}getRangesArgs(e,t,r,n){let i=this.queue.keys,a=e.map(e=>"waiting"===e?"wait":e);return[i[""]].concat([t,r,n?"1":"0",...a])}async getRanges(e,t=0,r=1,n=!1){let i=await this.queue.client,a=this.getRangesArgs(e,t,r,n);return await this.execCommand(i,"getRanges",a)}getCountsArgs(e){let t=this.queue.keys,r=e.map(e=>"waiting"===e?"wait":e);return[t[""]].concat([...r])}async getCounts(e){let t=await this.queue.client,r=this.getCountsArgs(e);return await this.execCommand(t,"getCounts",r)}getCountsPerPriorityArgs(e){return[this.queue.keys.wait,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.prioritized].concat(e)}async getCountsPerPriority(e){let t=await this.queue.client,r=this.getCountsPerPriorityArgs(e);return await this.execCommand(t,"getCountsPerPriority",r)}getDependencyCountsArgs(e,t){return[`${e}:processed`,`${e}:dependencies`,`${e}:failed`,`${e}:unsuccessful`].map(e=>this.queue.toKey(e)).concat(t)}async getDependencyCounts(e,t){let r=await this.queue.client,n=this.getDependencyCountsArgs(e,t);return await this.execCommand(r,"getDependencyCounts",n)}moveToCompletedArgs(e,t,r,n,i=!1){let a=Date.now();return this.moveToFinishedArgs(e,t,"returnvalue",r,"completed",n,a,i)}moveToFailedArgs(e,t,r,n,i=!1,a){let s=Date.now();return this.moveToFinishedArgs(e,t,"failedReason",r,"failed",n,s,i,a)}async isFinished(e,t=!1){let r=await this.queue.client,n=["completed","failed",e].map(e=>this.queue.toKey(e));return this.execCommand(r,"isFinished",n.concat([e,t?"1":""]))}async getState(e){let t=await this.queue.client,r=["completed","failed","delayed","active","wait","paused","waiting-children","prioritized"].map(e=>this.queue.toKey(e));return el(this.queue.redisVersion,"6.0.6")?this.execCommand(t,"getState",r.concat([e])):this.execCommand(t,"getStateV2",r.concat([e]))}async changeDelay(e,t){let r=await this.queue.client,n=this.changeDelayArgs(e,t),i=await this.execCommand(r,"changeDelay",n);if(i<0)throw this.finishedErrors({code:i,jobId:e,command:"changeDelay",state:"delayed"})}changeDelayArgs(e,t){let r=Date.now();return[this.queue.keys.delayed,this.queue.keys.meta,this.queue.keys.marker,this.queue.keys.events].concat([t,JSON.stringify(r),e,this.queue.toKey(e)])}async changePriority(e,t=0,r=!1){let n=await this.queue.client,i=this.changePriorityArgs(e,t,r),a=await this.execCommand(n,"changePriority",i);if(a<0)throw this.finishedErrors({code:a,jobId:e,command:"changePriority"})}changePriorityArgs(e,t=0,r=!1){return[this.queue.keys.wait,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.prioritized,this.queue.keys.active,this.queue.keys.pc,this.queue.keys.marker].concat([t,this.queue.toKey(""),e,+!!r])}moveToDelayedArgs(e,t,r,n,i={}){let a=this.queue.keys;return[a.marker,a.active,a.prioritized,a.delayed,this.queue.toKey(e),a.events,a.meta,a.stalled].concat([this.queue.keys[""],t,e,r,n,i.skipAttempt?"1":"0",i.fieldsToUpdate?t_(X(i.fieldsToUpdate)):void 0])}moveToWaitingChildrenArgs(e,t,r){let n=Date.now(),i=ea(r.child);return["active","waiting-children",e,`${e}:dependencies`,`${e}:unsuccessful`,"stalled","events"].map(e=>this.queue.toKey(e)).concat([t,null!=i?i:"",JSON.stringify(n),e,this.queue.toKey("")])}isMaxedArgs(){let e=this.queue.keys;return[e.meta,e.active]}async isMaxed(){let e=await this.queue.client,t=this.isMaxedArgs();return!!await this.execCommand(e,"isMaxed",t)}async moveToDelayed(e,t,r,n="0",i={}){let a=await this.queue.client,s=this.moveToDelayedArgs(e,t,n,r,i),o=await this.execCommand(a,"moveToDelayed",s);if(o<0)throw this.finishedErrors({code:o,jobId:e,command:"moveToDelayed",state:"active"})}async moveToWaitingChildren(e,t,r={}){let n=await this.queue.client,i=this.moveToWaitingChildrenArgs(e,t,r),a=await this.execCommand(n,"moveToWaitingChildren",i);switch(a){case 0:return!0;case 1:return!1;default:throw this.finishedErrors({code:a,jobId:e,command:"moveToWaitingChildren",state:"active"})}}getRateLimitTtlArgs(e){return[this.queue.keys.limiter].concat([null!=e?e:"0"])}async getRateLimitTtl(e){let t=await this.queue.client,r=this.getRateLimitTtlArgs(e);return this.execCommand(t,"getRateLimitTtl",r)}async cleanJobsInSet(e,t,r=0){let n=await this.queue.client;return this.execCommand(n,"cleanJobsInSet",[this.queue.toKey(e),this.queue.toKey("events"),this.queue.toKey("repeat"),this.queue.toKey(""),t,r,e])}getJobSchedulerArgs(e){return[this.queue.keys.repeat].concat([e])}async getJobScheduler(e){let t=await this.queue.client,r=this.getJobSchedulerArgs(e);return this.execCommand(t,"getJobScheduler",r)}retryJobArgs(e,t,r,n={}){return[this.queue.keys.active,this.queue.keys.wait,this.queue.keys.paused,this.queue.toKey(e),this.queue.keys.meta,this.queue.keys.events,this.queue.keys.delayed,this.queue.keys.prioritized,this.queue.keys.pc,this.queue.keys.marker,this.queue.keys.stalled].concat([this.queue.toKey(""),Date.now(),(t?"R":"L")+"PUSH",e,r,n.fieldsToUpdate?t_(X(n.fieldsToUpdate)):void 0])}async retryJob(e,t,r="0",n={}){let i=await this.queue.client,a=this.retryJobArgs(e,t,r,n),s=await this.execCommand(i,"retryJob",a);if(s<0)throw this.finishedErrors({code:s,jobId:e,command:"retryJob",state:"active"})}moveJobsToWaitArgs(e,t,r){return[this.queue.toKey(""),this.queue.keys.events,this.queue.toKey(e),this.queue.toKey("wait"),this.queue.toKey("paused"),this.queue.keys.meta,this.queue.keys.active,this.queue.keys.marker].concat([t,r,e])}async retryJobs(e="failed",t=1e3,r=new Date().getTime()){let n=await this.queue.client,i=this.moveJobsToWaitArgs(e,t,r);return this.execCommand(n,"moveJobsToWait",i)}async promoteJobs(e=1e3){let t=await this.queue.client,r=this.moveJobsToWaitArgs("delayed",e,Number.MAX_VALUE);return this.execCommand(t,"moveJobsToWait",r)}async reprocessJob(e,t){let r=await this.queue.client,n=[this.queue.toKey(e.id),this.queue.keys.events,this.queue.toKey(t),this.queue.keys.wait,this.queue.keys.meta,this.queue.keys.paused,this.queue.keys.active,this.queue.keys.marker],i=[e.id,(e.opts.lifo?"R":"L")+"PUSH","failed"===t?"failedReason":"returnvalue",t],a=await this.execCommand(r,"reprocessJob",n.concat(i));if(1!==a)throw this.finishedErrors({code:a,jobId:e.id,command:"reprocessJob",state:t})}async moveToActive(e,t,r){let n=this.queue.opts,i=this.queue.keys,a=[i.wait,i.active,i.prioritized,i.events,i.stalled,i.limiter,i.delayed,i.paused,i.meta,i.pc,i.marker],s=[i[""],Date.now(),t_({token:t,lockDuration:n.lockDuration,limiter:n.limiter,name:r})];return tV(await this.execCommand(e,"moveToActive",a.concat(s)))}async promote(e){let t=await this.queue.client,r=[this.queue.keys.delayed,this.queue.keys.wait,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.prioritized,this.queue.keys.active,this.queue.keys.pc,this.queue.keys.events,this.queue.keys.marker],n=[this.queue.toKey(""),e],i=await this.execCommand(t,"promote",r.concat(n));if(i<0)throw this.finishedErrors({code:i,jobId:e,command:"promote",state:"delayed"})}moveStalledJobsToWaitArgs(){let e=this.queue.opts;return[this.queue.keys.stalled,this.queue.keys.wait,this.queue.keys.active,this.queue.keys["stalled-check"],this.queue.keys.meta,this.queue.keys.paused,this.queue.keys.marker,this.queue.keys.events].concat([e.maxStalledCount,this.queue.toKey(""),Date.now(),e.stalledInterval])}async moveStalledJobsToWait(){let e=await this.queue.client,t=this.moveStalledJobsToWaitArgs();return this.execCommand(e,"moveStalledJobsToWait",t)}async moveJobFromActiveToWait(e,t="0"){let r=await this.queue.client,n=[this.queue.keys.active,this.queue.keys.wait,this.queue.keys.stalled,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.limiter,this.queue.keys.prioritized,this.queue.keys.marker,this.queue.keys.events],i=[e,t,this.queue.toKey(e)],a=await this.execCommand(r,"moveJobFromActiveToWait",n.concat(i));if(a<0)throw this.finishedErrors({code:a,jobId:e,command:"moveJobFromActiveToWait",state:"active"});return a}async obliterate(e){let t=await this.queue.client,r=[this.queue.keys.meta,this.queue.toKey("")],n=[e.count,e.force?"force":null],i=await this.execCommand(t,"obliterate",r.concat(n));if(i<0)switch(i){case -1:throw Error("Cannot obliterate non-paused queue");case -2:throw Error("Cannot obliterate queue with active jobs")}return i}async paginate(e,t){let r=await this.queue.client,n=[e],i=t.end>=0?t.end-t.start+1:1/0,a="0",s=0,o,l,d,c=[],u=[];do{let e=[t.start+c.length,t.end,a,s,5];t.fetchJobs&&e.push(1),[a,s,o,l,d]=await this.execCommand(r,"paginate",n.concat(e)),c=c.concat(o),d&&d.length&&(u=u.concat(d.map(Z)))}while("0"!=a&&c.length<i)if(!(c.length&&Array.isArray(c[0])))return{cursor:a,items:c.map(e=>({id:e})),total:l,jobs:u};{let e=[];for(let t=0;t<c.length;t++){let[r,n]=c[t];try{e.push({id:r,v:JSON.parse(n)})}catch(t){e.push({id:r,err:t.message})}}return{cursor:a,items:e,total:l,jobs:u}}}finishedErrors({code:e,jobId:t,parentKey:r,command:n,state:i}){switch(e){case y.JobNotExist:return Error(`Missing key for job ${t}. ${n}`);case y.JobLockNotExist:return Error(`Missing lock for job ${t}. ${n}`);case y.JobNotInState:return Error(`Job ${t} is not in the ${i} state. ${n}`);case y.JobPendingChildren:return Error(`Job ${t} has pending dependencies. ${n}`);case y.ParentJobNotExist:return Error(`Missing key for parent job ${r}. ${n}`);case y.JobLockMismatch:return Error(`Lock mismatch for job ${t}. Cmd ${n} from ${i}`);case y.ParentJobCannotBeReplaced:return Error(`The parent job ${r} cannot be replaced. ${n}`);case y.JobBelongsToJobScheduler:return Error(`Job ${t} belongs to a job scheduler and cannot be removed directly. ${n}`);case y.JobHasFailedChildren:return new ey(`Cannot complete job ${t} because it has at least one failed child. ${n}`);default:return Error(`Unknown code ${e} error for ${t}. ${n}`)}}}function tV(e){if(e){let t=[null,e[1],e[2],e[3]];return e[0]&&(t[0]=Z(e[0])),t}return[]}let tG=e=>new tF({keys:e.keys,client:e.client,get redisVersion(){return e.redisVersion},toKey:e.toKey,opts:e.opts,closing:e.closing}),tq=(0,eI.debuglog)("bull");class tY{constructor(e,t,r,n={},i){this.queue=e,this.name=t,this.data=r,this.opts=n,this.id=i,this.progress=0,this.returnvalue=null,this.stacktrace=null,this.delay=0,this.priority=0,this.attemptsStarted=0,this.attemptsMade=0,this.stalledCounter=0;let a=this.opts,{repeatJobKey:s}=a,o=ek(a,["repeatJobKey"]);this.opts=Object.assign({attempts:0},o),this.delay=this.opts.delay,this.priority=this.opts.priority||0,this.repeatJobKey=s,this.timestamp=n.timestamp?n.timestamp:Date.now(),this.opts.backoff=N.normalize(n.backoff),this.parentKey=ea(n.parent),n.parent&&(this.parent={id:n.parent.id,queueKey:n.parent.queue},n.failParentOnFailure&&(this.parent.fpof=!0),n.removeDependencyOnFailure&&(this.parent.rdof=!0),n.ignoreDependencyOnFailure&&(this.parent.idof=!0),n.continueParentOnFailure&&(this.parent.cpof=!0)),this.debounceId=n.debounce?n.debounce.id:void 0,this.deduplicationId=n.deduplication?n.deduplication.id:this.debounceId,this.toKey=e.toKey.bind(e),this.createScripts(),this.queueQualifiedName=e.qualifiedName}static async create(e,t,r,n){let i=await e.client,a=new this(e,t,r,n,n&&n.jobId);return a.id=await a.addJob(i,{parentKey:a.parentKey,parentDependenciesKey:a.parentKey?`${a.parentKey}:dependencies`:""}),a}static async createBulk(e,t){let r=await e.client,n=t.map(t=>{var r;return new this(e,t.name,t.data,t.opts,null==(r=t.opts)?void 0:r.jobId)}),i=r.pipeline();for(let e of n)e.addJob(i,{parentKey:e.parentKey,parentDependenciesKey:e.parentKey?`${e.parentKey}:dependencies`:""});let a=await i.exec();for(let e=0;e<a.length;++e){let[t,r]=a[e];if(t)throw t;n[e].id=r}return n}static fromJSON(e,t,r){let n=JSON.parse(t.data||"{}"),i=tY.optsFromJSON(t.opts),a=new this(e,t.name,n,i,t.id||r);return a.progress=JSON.parse(t.progress||"0"),a.delay=parseInt(t.delay),a.priority=parseInt(t.priority),a.timestamp=parseInt(t.timestamp),t.finishedOn&&(a.finishedOn=parseInt(t.finishedOn)),t.processedOn&&(a.processedOn=parseInt(t.processedOn)),t.rjk&&(a.repeatJobKey=t.rjk),t.deid&&(a.debounceId=t.deid,a.deduplicationId=t.deid),t.failedReason&&(a.failedReason=t.failedReason),a.attemptsStarted=parseInt(t.ats||"0"),a.attemptsMade=parseInt(t.attemptsMade||t.atm||"0"),a.stalledCounter=parseInt(t.stc||"0"),t.defa&&(a.deferredFailure=t.defa),a.stacktrace=function(e){if(!e)return[];let t=H(JSON.parse,JSON,[e]);return t!==Q&&t instanceof Array?t:[]}(t.stacktrace),"string"==typeof t.returnvalue&&(a.returnvalue=tz(t.returnvalue)),t.parentKey&&(a.parentKey=t.parentKey),t.parent&&(a.parent=JSON.parse(t.parent)),t.pb&&(a.processedBy=t.pb),t.nrjid&&(a.nextRepeatableJobId=t.nrjid),a}createScripts(){this.scripts=tG(this.queue)}static optsFromJSON(e,t=er){let r=Object.entries(JSON.parse(e||"{}")),n={};for(let e of r){let[r,i]=e;t[r]?n[t[r]]=i:"tm"===r?n.telemetry=Object.assign(Object.assign({},n.telemetry),{metadata:i}):"omc"===r?n.telemetry=Object.assign(Object.assign({},n.telemetry),{omitContext:i}):n[r]=i}return n}static async fromId(e,t){if(t){let r=await e.client,n=await r.hgetall(e.toKey(t));return!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(n)?this.fromJSON(e,n,t):void 0}}static addJobLog(e,t,r,n){return e.scripts.addLog(t,r,n)}toJSON(){let{queue:e,scripts:t}=this;return ek(this,["queue","scripts"])}asJSON(){var e={id:this.id,name:this.name,data:JSON.stringify(void 0===this.data?{}:this.data),opts:tY.optsAsJSON(this.opts),parent:this.parent?Object.assign({},this.parent):void 0,parentKey:this.parentKey,progress:this.progress,attemptsMade:this.attemptsMade,attemptsStarted:this.attemptsStarted,stalledCounter:this.stalledCounter,finishedOn:this.finishedOn,processedOn:this.processedOn,timestamp:this.timestamp,failedReason:JSON.stringify(this.failedReason),stacktrace:JSON.stringify(this.stacktrace),debounceId:this.debounceId,deduplicationId:this.deduplicationId,repeatJobKey:this.repeatJobKey,returnvalue:JSON.stringify(this.returnvalue),nrjid:this.nextRepeatableJobId};let t={};for(let r in e)void 0!==e[r]&&(t[r]=e[r]);return t}static optsAsJSON(e={},t=en){let r=Object.entries(e),n={};for(let[e,i]of r)void 0!==i&&(e in t?n[t[e]]=i:"telemetry"===e?(n.tm=i.metadata,n.omc=i.omitContext):n[e]=i);return n}asJSONSandbox(){return Object.assign(Object.assign({},this.asJSON()),{queueName:this.queueName,queueQualifiedName:this.queueQualifiedName,prefix:this.prefix})}updateData(e){return this.data=e,this.scripts.updateData(this,e)}async updateProgress(e){this.progress=e,await this.scripts.updateProgress(this.id,e),this.queue.emit("progress",this,e)}async log(e){return tY.addJobLog(this.queue,this.id,e,this.opts.keepLogs)}async removeChildDependency(){return!!await this.scripts.removeChildDependency(this.id,this.parentKey)&&(this.parent=void 0,this.parentKey=void 0,!0)}async clearLogs(e){let t=await this.queue.client,r=this.toKey(this.id)+":logs";e?await t.ltrim(r,-e,-1):await t.del(r)}async remove({removeChildren:e=!0}={}){await this.queue.waitUntilReady();let t=this.queue;if(await this.scripts.remove(this.id,e))t.emit("removed",this);else throw Error(`Job ${this.id} could not be removed because it is locked by another worker`)}async removeUnprocessedChildren(){let e=this.id;await this.scripts.removeUnprocessedChildren(e)}extendLock(e,t){return this.scripts.extendLock(this.id,e,t)}async moveToCompleted(e,t,r=!0){return this.queue.trace(g.INTERNAL,"complete",this.queue.name,async(n,i)=>{var a,s;null==(s=null==(a=this.opts)?void 0:a.telemetry)||s.omitContext,await this.queue.waitUntilReady(),this.returnvalue=e||void 0;let o=H(JSON.stringify,JSON,[e]);if(o===Q)throw Q.value;let l=this.scripts.moveToCompletedArgs(this,o,this.opts.removeOnComplete,t,r),d=await this.scripts.moveToFinished(this.id,l);return this.finishedOn=l[this.scripts.moveToFinishedKeys.length+1],this.attemptsMade+=1,d})}moveToWait(e){return this.scripts.moveJobFromActiveToWait(this.id,e)}async shouldRetryJob(e){if(!(this.attemptsMade+1<this.opts.attempts)||this.discarded||e instanceof ey||"UnrecoverableError"==e.name)return[!1,0];{let t=this.queue.opts,r=await N.calculate(this.opts.backoff,this.attemptsMade+1,e,this,t.settings&&t.settings.backoffStrategy);return[-1!=r,-1==r?0:r]}}async moveToFailed(e,t,r=!1){this.failedReason=null==e?void 0:e.message;let[n,i]=await this.shouldRetryJob(e);return this.queue.trace(g.INTERNAL,this.getSpanOperation(n,i),this.queue.name,async(a,s)=>{var o,l;let d,c,u;(null==(l=null==(o=this.opts)?void 0:o.telemetry)?void 0:l.omitContext)||!s||(d=s),this.updateStacktrace(e);let p={failedReason:this.failedReason,stacktrace:JSON.stringify(this.stacktrace),tm:d};if(n)c=i?await this.scripts.moveToDelayed(this.id,Date.now(),i,t,{fieldsToUpdate:p}):await this.scripts.retryJob(this.id,this.opts.lifo,t,{fieldsToUpdate:p});else{let e=this.scripts.moveToFailedArgs(this,this.failedReason,this.opts.removeOnFail,t,r,p);c=await this.scripts.moveToFinished(this.id,e),u=e[this.scripts.moveToFinishedKeys.length+1]}return u&&"number"==typeof u&&(this.finishedOn=u),i&&"number"==typeof i&&(this.delay=i),this.attemptsMade+=1,c})}getSpanOperation(e,t){return e?t?"delay":"retry":"fail"}isCompleted(){return this.isInZSet("completed")}isFailed(){return this.isInZSet("failed")}isDelayed(){return this.isInZSet("delayed")}isWaitingChildren(){return this.isInZSet("waiting-children")}isActive(){return this.isInList("active")}async isWaiting(){return await this.isInList("wait")||await this.isInList("paused")}get queueName(){return this.queue.name}get prefix(){return this.queue.opts.prefix}getState(){return this.scripts.getState(this.id)}async changeDelay(e){await this.scripts.changeDelay(this.id,e),this.delay=e}async changePriority(e){await this.scripts.changePriority(this.id,e.priority,e.lifo),this.priority=e.priority||0}async getChildrenValues(){let e=await this.queue.client,t=await e.hgetall(this.toKey(`${this.id}:processed`));if(t)return ed(t)}async getIgnoredChildrenFailures(){return(await this.queue.client).hgetall(this.toKey(`${this.id}:failed`))}async getFailedChildrenValues(){return(await this.queue.client).hgetall(this.toKey(`${this.id}:failed`))}async getDependencies(e={}){let t=(await this.queue.client).multi();if(e.processed||e.unprocessed||e.ignored||e.failed){let r,n,i,a,s,o,l,d,c={cursor:0,count:20},u=[];if(e.processed){u.push("processed");let r=Object.assign(Object.assign({},c),e.processed);t.hscan(this.toKey(`${this.id}:processed`),r.cursor,"COUNT",r.count)}if(e.unprocessed){u.push("unprocessed");let r=Object.assign(Object.assign({},c),e.unprocessed);t.sscan(this.toKey(`${this.id}:dependencies`),r.cursor,"COUNT",r.count)}if(e.ignored){u.push("ignored");let r=Object.assign(Object.assign({},c),e.ignored);t.hscan(this.toKey(`${this.id}:failed`),r.cursor,"COUNT",r.count)}if(e.failed){u.push("failed");let n=Object.assign(Object.assign({},c),e.failed);r=n.cursor+n.count,t.zrange(this.toKey(`${this.id}:unsuccessful`),n.cursor,n.count-1)}let p=await t.exec();return u.forEach((e,t)=>{switch(e){case"processed":{n=p[t][1][0];let e=p[t][1][1],r={};for(let t=0;t<e.length;++t)t%2&&(r[e[t-1]]=JSON.parse(e[t]));i=r;break}case"failed":o=p[t][1];break;case"ignored":{l=p[t][1][0];let e=p[t][1][1],r={};for(let t=0;t<e.length;++t)t%2&&(r[e[t-1]]=e[t]);d=r;break}case"unprocessed":a=p[t][1][0],s=p[t][1][1]}}),Object.assign(Object.assign(Object.assign(Object.assign({},n?{processed:i,nextProcessedCursor:Number(n)}:{}),l?{ignored:d,nextIgnoredCursor:Number(l)}:{}),r?{failed:o,nextFailedCursor:r}:{}),a?{unprocessed:s,nextUnprocessedCursor:Number(a)}:{})}{t.hgetall(this.toKey(`${this.id}:processed`)),t.smembers(this.toKey(`${this.id}:dependencies`)),t.hgetall(this.toKey(`${this.id}:failed`)),t.zrange(this.toKey(`${this.id}:unsuccessful`),0,-1);let[[e,r],[n,i],[a,s],[o,l]]=await t.exec();return{processed:ed(r),unprocessed:i,failed:l,ignored:s}}}async getDependenciesCount(e={}){let t=[];Object.entries(e).forEach(([e,r])=>{r&&t.push(e)});let r=t.length?t:["processed","unprocessed","ignored","failed"],n=await this.scripts.getDependencyCounts(this.id,r),i={};return n.forEach((e,t)=>{i[`${r[t]}`]=e||0}),i}async waitUntilFinished(e,t){await this.queue.waitUntilReady();let r=this.id;return new Promise(async(n,i)=>{let a;function s(e){c(),n(e.returnvalue)}function o(e){c(),i(Error(e.failedReason||e))}t&&(a=setTimeout(()=>o(`Job wait ${this.name} timed out before finishing, no finish notification arrived after ${t}ms (id=${r})`),t));let l=`completed:${r}`,d=`failed:${r}`;e.on(l,s),e.on(d,o),this.queue.on("closing",o);let c=()=>{clearInterval(a),e.removeListener(l,s),e.removeListener(d,o),this.queue.removeListener("closing",o)};await e.waitUntilReady();let[u,p]=await this.scripts.isFinished(r,!0);0!=u&&(-1==u||2==u?o({failedReason:p}):s({returnvalue:tz(p)}))})}async moveToDelayed(e,t){let r=Date.now(),n=e-r,i=n>0?n:0,a=await this.scripts.moveToDelayed(this.id,r,i,t,{skipAttempt:!0});return this.delay=i,a}async moveToWaitingChildren(e,t={}){return await this.scripts.moveToWaitingChildren(this.id,e,t)}async promote(){let e=this.id;await this.scripts.promote(e),this.delay=0}retry(e="failed"){return this.failedReason=null,this.finishedOn=null,this.processedOn=null,this.returnvalue=null,this.scripts.reprocessJob(this,e)}discard(){this.discarded=!0}async isInZSet(e){let t=await this.queue.client;return null!==await t.zscore(this.queue.toKey(e),this.id)}async isInList(e){return this.scripts.isJobInList(this.queue.toKey(e),this.id)}addJob(e,t){let r=this.asJSON();return this.validateOptions(r),this.scripts.addJob(e,r,r.opts,this.id,t)}validateOptions(e){var t,r,n,i,a,s,o,l,d;if(this.opts.sizeLimit&&(d=e.data,Buffer.byteLength(d,"utf8")>this.opts.sizeLimit))throw Error(`The size of job ${this.name} exceeds the limit ${this.opts.sizeLimit} bytes`);if(this.opts.delay&&this.opts.repeat&&!(null==(t=this.opts.repeat)?void 0:t.count))throw Error("Delay and repeat options could not be used together");let c=["removeDependencyOnFailure","failParentOnFailure","continueParentOnFailure","ignoreDependencyOnFailure"].filter(e=>this.opts[e]);if(c.length>1){let e=c.join(", ");throw Error(`The following options cannot be used together: ${e}`)}if(null==(r=this.opts)?void 0:r.jobId){if(`${parseInt(this.opts.jobId,10)}`===(null==(n=this.opts)?void 0:n.jobId))throw Error("Custom Id cannot be integers");if((null==(i=this.opts)?void 0:i.jobId.includes(":"))&&(null==(s=null==(a=this.opts)?void 0:a.jobId)?void 0:s.split(":").length)!==3)throw Error("Custom Id cannot contain :")}if(this.opts.priority){if(Math.trunc(this.opts.priority)!==this.opts.priority)throw Error("Priority should not be float");if(this.opts.priority>2097152)throw Error("Priority should be between 0 and 2097152")}if(this.opts.deduplication&&!(null==(o=this.opts.deduplication)?void 0:o.id))throw Error("Deduplication id must be provided");if(this.opts.debounce&&!(null==(l=this.opts.debounce)?void 0:l.id))throw Error("Debounce id must be provided");if("object"==typeof this.opts.backoff&&"number"==typeof this.opts.backoff.jitter&&(this.opts.backoff.jitter<0||this.opts.backoff.jitter>1))throw Error("Jitter should be between 0 and 1")}updateStacktrace(e){this.stacktrace=this.stacktrace||[],(null==e?void 0:e.stack)&&(this.stacktrace.push(e.stack),0===this.opts.stackTraceLimit?this.stacktrace=[]:this.opts.stackTraceLimit&&(this.stacktrace=this.stacktrace.slice(-this.opts.stackTraceLimit)))}}function tz(e){let t=H(JSON.parse,JSON,[e]);if(t!==Q)return t;tq("corrupted returnvalue: "+e,t)}class tB{constructor(e="bull"){this.prefix=e}getKeys(e){let t={};return["","active","wait","waiting-children","paused","id","delayed","prioritized","stalled-check","completed","failed","stalled","repeat","limiter","meta","events","pc","marker","de"].forEach(r=>{t[r]=this.toKey(e,r)}),t}toKey(e,t){return`${this.getQueueQualifiedName(e)}:${t}`}getQueueQualifiedName(e){return`${this.prefix}:${e}`}}var tW=F;e.s([],61408),e.s(["addDelayedJob",()=>tU],93852);let tU={name:"addDelayedJob",content:`--[[
  Adds a delayed job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - computes timestamp.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
    Input:
      KEYS[1] 'marker',
      KEYS[2] 'meta'
      KEYS[3] 'id'
      KEYS[4] 'delayed'
      KEYS[5] 'completed'
      KEYS[6] events stream key
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (use custom instead of one generated automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
          x [6]  waitChildrenKey key.
            [7]  parent dependencies key.
            [8]  parent? {id, queueKey}
            [9]  repeat job key
            [10] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]]
local metaKey = KEYS[2]
local idKey = KEYS[3]
local delayedKey = KEYS[4]
local completedKey = KEYS[5]
local eventsKey = KEYS[6]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local parentKey = args[5]
local parent = args[8]
local repeatJobKey = args[9]
local deduplicationKey = args[10]
local parentData
-- Includes
--[[
  Adds a delayed job to the queue by doing the following:
    - Creates a new job key with the job data.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
local function addDelayedJob(jobId, delayedKey, eventsKey, timestamp,
  maxEvents, markerKey, delay)
  local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
  rcall("ZADD", delayedKey, score, jobId)
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(markerKey, delayedKey)
end
--[[
  Function to debounce a job.
]]
-- Includes
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function deduplicateJob(deduplicationOpts, jobId, delayedKey, deduplicationKey, eventsKey, maxEvents,
    prefix)
    local deduplicationId = deduplicationOpts and deduplicationOpts['id']
    if deduplicationId then
        local ttl = deduplicationOpts['ttl']
        if deduplicationOpts['replace'] and ttl and ttl > 0 then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if rcall("ZREM", delayedKey, currentDebounceJobId) > 0 then
                    removeJobKeys(prefix .. currentDebounceJobId)
                    rcall("XADD", eventsKey, "*", "event", "removed", "jobId", currentDebounceJobId,
                        "prev", "delayed")
                    if deduplicationOpts['extend'] then
                        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
                    else
                        rcall('SET', deduplicationKey, jobId, 'KEEPTTL')
                    end
                    rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                        jobId, "deduplicationId", deduplicationId, "deduplicatedJobId", currentDebounceJobId)
                    return
                else
                    return currentDebounceJobId
                end
            else
                rcall('SET', deduplicationKey, jobId, 'PX', ttl)
                return
            end
        else
            local ttl = deduplicationOpts['ttl']
            local deduplicationKeyExists
            if ttl then
                if deduplicationOpts['extend'] then
                    local currentDebounceJobId = rcall('GET', deduplicationKey)
                    if currentDebounceJobId then
                        rcall('SET', deduplicationKey, currentDebounceJobId, 'PX', ttl)
                        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                            "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                        return currentDebounceJobId
                    else
                        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
                        return
                    end
                else
                    deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
                end
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            end
            if deduplicationKeyExists then
                local currentDebounceJobId = rcall('GET', deduplicationKey)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                    currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            end
        end
    end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", idKey)
local maxEvents = getOrSetMaxEvents(metaKey)
local opts = cmsgpack.unpack(ARGV[3])
local parentDependenciesKey = args[7]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, completedKey, eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(opts['de'], jobId, delayedKey, deduplicationKey,
  eventsKey, maxEvents, args[1])
if deduplicationJobId then
  return deduplicationJobId
end
local delay, priority = storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2],
    opts, timestamp, parentKey, parentData, repeatJobKey)
addDelayedJob(jobId, delayedKey, eventsKey, timestamp, maxEvents, KEYS[1], delay)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:6};e.s(["addJobScheduler",()=>t$],27599);let t$={name:"addJobScheduler",content:`--[[
  Adds a job scheduler, i.e. a job factory that creates jobs based on a given schedule (repeat options).
    Input:
      KEYS[1]  'repeat' key
      KEYS[2]  'delayed' key
      KEYS[3]  'wait' key
      KEYS[4]  'paused' key
      KEYS[5]  'meta' key
      KEYS[6]  'prioritized' key
      KEYS[7]  'marker' key
      KEYS[8]  'id' key
      KEYS[9]  'events' key
      KEYS[10] 'pc' priority counter
      KEYS[11] 'active' key
      ARGV[1] next milliseconds
      ARGV[2] msgpacked options
            [1]  name
            [2]  tz?
            [3]  patten?
            [4]  endDate?
            [5]  every?
      ARGV[3] jobs scheduler id
      ARGV[4] Json stringified template data
      ARGV[5] mspacked template opts
      ARGV[6] msgpacked delayed opts
      ARGV[7] timestamp
      ARGV[8] prefix key
      ARGV[9] producer key
      Output:
        repeatableKey  - OK
]]
local rcall = redis.call
local repeatKey = KEYS[1]
local delayedKey = KEYS[2]
local waitKey = KEYS[3]
local pausedKey = KEYS[4]
local metaKey = KEYS[5]
local prioritizedKey = KEYS[6]
local eventsKey = KEYS[9]
local nextMillis = ARGV[1]
local jobSchedulerId = ARGV[3]
local templateOpts = cmsgpack.unpack(ARGV[5])
local prefixKey = ARGV[8]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Adds a delayed job to the queue by doing the following:
    - Creates a new job key with the job data.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
local function addDelayedJob(jobId, delayedKey, eventsKey, timestamp,
  maxEvents, markerKey, delay)
  local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
  rcall("ZADD", delayedKey, score, jobId)
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(markerKey, delayedKey)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePaused(queueMetaKey)
  return rcall("HEXISTS", queueMetaKey, "paused") == 1
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
local function addJobFromScheduler(jobKey, jobId, rawOpts, waitKey, pausedKey, activeKey, metaKey, 
  prioritizedKey, priorityCounter, delayedKey, markerKey, eventsKey, name, maxEvents, timestamp,
  data, jobSchedulerId)
  local opts = cmsgpack.unpack(rawOpts)
  local delay, priority = storeJob(eventsKey, jobKey, jobId, name, data,
    opts, timestamp, nil, nil, jobSchedulerId)
  if delay ~= 0 then
    addDelayedJob(jobId, delayedKey, eventsKey, timestamp, maxEvents, markerKey, delay)
  else
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    -- Standard or priority add
    if priority == 0 then
      local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
      addJobInTargetList(target, markerKey, pushCmd, isPausedOrMaxed, jobId)
    else
      -- Priority add
      addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounter, isPausedOrMaxed)
    end
    -- Emit waiting event
    rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents,  "*", "event", "waiting", "jobId", jobId)
  end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobKey, jobId)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      return rcall("DEL", deduplicationKey)
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobKey, jobId)
  end
  removeJobKeys(jobKey)
end
--[[
  Function to store a job scheduler
]]
local function storeJobScheduler(schedulerId, schedulerKey, repeatKey, nextMillis, opts,
  templateData, templateOpts)
  rcall("ZADD", repeatKey, nextMillis, schedulerId)
  local optionalValues = {}
  if opts['tz'] then
    table.insert(optionalValues, "tz")
    table.insert(optionalValues, opts['tz'])
  end
  if opts['limit'] then
    table.insert(optionalValues, "limit")
    table.insert(optionalValues, opts['limit'])
  end
  if opts['pattern'] then
    table.insert(optionalValues, "pattern")
    table.insert(optionalValues, opts['pattern'])
  end
  if opts['endDate'] then
    table.insert(optionalValues, "endDate")
    table.insert(optionalValues, opts['endDate'])
  end
  if opts['every'] then
    table.insert(optionalValues, "every")
    table.insert(optionalValues, opts['every'])
  end
  if opts['offset'] then
    table.insert(optionalValues, "offset")
    table.insert(optionalValues, opts['offset'])
  end
  local jsonTemplateOpts = cjson.encode(templateOpts)
  if jsonTemplateOpts and jsonTemplateOpts ~= '{}' then
    table.insert(optionalValues, "opts")
    table.insert(optionalValues, jsonTemplateOpts)
  end
  if templateData and templateData ~= '{}' then
    table.insert(optionalValues, "data")
    table.insert(optionalValues, templateData)
  end
  rcall("DEL", schedulerKey) -- remove all attributes and then re-insert new ones
  rcall("HMSET", schedulerKey, "name", opts['name'], "ic", 1, unpack(optionalValues))
end
-- If we are overriding a repeatable job we must delete the delayed job for
-- the next iteration.
local schedulerKey = repeatKey .. ":" .. jobSchedulerId
local nextDelayedJobKey = schedulerKey .. ":" .. nextMillis
local nextDelayedJobId = "repeat:" .. jobSchedulerId .. ":" .. nextMillis
local maxEvents = getOrSetMaxEvents(metaKey)
local function removeJobFromScheduler(prefixKey, delayedKey, prioritizedKey, waitKey, pausedKey, jobId,
    metaKey, eventsKey)
    if rcall("ZSCORE", delayedKey, jobId) then
        removeJob(jobId, true, prefixKey, true --[[remove debounce key]] )
        rcall("ZREM", delayedKey, jobId)
        return true
    elseif rcall("ZSCORE", prioritizedKey, jobId) then
        removeJob(jobId, true, prefixKey, true --[[remove debounce key]] )
        rcall("ZREM", prioritizedKey, jobId)
        return true
    else
        local pausedOrWaitKey = waitKey
        if isQueuePaused(metaKey) then
            pausedOrWaitKey = pausedKey
        end
        if rcall("LREM", pausedOrWaitKey, 1, jobId) > 0 then
            removeJob(jobId, true, prefixKey, true --[[remove debounce key]] )
            return true
        end
    end
    return false
end
if rcall("EXISTS", nextDelayedJobKey) == 1 then
    if not removeJobFromScheduler(prefixKey, delayedKey, prioritizedKey, waitKey, pausedKey,
        nextDelayedJobId, metaKey, eventsKey) then
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
            "duplicated", "jobId", nextDelayedJobId)
        return nextDelayedJobId .. "" -- convert to string
    end
end
local prevMillis = rcall("ZSCORE", repeatKey, jobSchedulerId)
if prevMillis then    
    local currentJobId = "repeat:" .. jobSchedulerId .. ":" .. prevMillis
    local currentDelayedJobKey = schedulerKey .. ":" .. prevMillis
    if currentJobId ~= nextDelayedJobId and rcall("EXISTS", currentDelayedJobKey) == 1 then
        removeJobFromScheduler(prefixKey, delayedKey, prioritizedKey, waitKey, pausedKey,
            currentJobId, metaKey, eventsKey)
    end
end
local schedulerOpts = cmsgpack.unpack(ARGV[2])
storeJobScheduler(jobSchedulerId, schedulerKey, repeatKey, nextMillis, schedulerOpts, ARGV[4], templateOpts)
rcall("INCR", KEYS[8])
addJobFromScheduler(nextDelayedJobKey, nextDelayedJobId, ARGV[6], waitKey, pausedKey,
    KEYS[11], metaKey, prioritizedKey, KEYS[10], delayedKey, KEYS[7], eventsKey,
    schedulerOpts['name'], maxEvents, ARGV[7], ARGV[4], jobSchedulerId)
if ARGV[9] ~= "" then
    rcall("HSET", ARGV[9], "nrjid", nextDelayedJobId)
end
return nextDelayedJobId .. "" -- convert to string
`,keys:11};e.s(["addLog",()=>tQ],92879);let tQ={name:"addLog",content:`--[[
  Add job log
  Input:
    KEYS[1] job id key
    KEYS[2] job logs key
    ARGV[1] id
    ARGV[2] log
    ARGV[3] keepLogs
  Output:
    -1 - Missing job.
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[1]) == 1 then -- // Make sure job exists
  local logCount = rcall("RPUSH", KEYS[2], ARGV[2])
  if ARGV[3] ~= '' then
    local keepLogs = tonumber(ARGV[3])
    rcall("LTRIM", KEYS[2], -keepLogs, -1)
    return math.min(keepLogs, logCount)
  end
  return logCount
else
  return -1
end
`,keys:2};e.s(["addParentJob",()=>tH],46500);let tH={name:"addParentJob",content:`--[[
  Adds a parent job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - adds the job to the waiting-children zset
    Input:
      KEYS[1] 'meta'
      KEYS[2] 'id'
      KEYS[3] 'delayed'
      KEYS[4] 'completed'
      KEYS[5] events stream key
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (will not generate one automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  waitChildrenKey key.
            [7]  parent dependencies key.
            [8]  parent? {id, queueKey}
            [9]  repeat job key
            [10] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]]
local metaKey = KEYS[1]
local idKey = KEYS[2]
local completedKey = KEYS[4]
local eventsKey = KEYS[5]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local opts = cmsgpack.unpack(ARGV[3])
local parentKey = args[5]
local parent = args[8]
local repeatJobKey = args[9]
local deduplicationKey = args[10]
local parentData
-- Includes
--[[
  Function to debounce a job.
]]
-- Includes
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function deduplicateJob(deduplicationOpts, jobId, delayedKey, deduplicationKey, eventsKey, maxEvents,
    prefix)
    local deduplicationId = deduplicationOpts and deduplicationOpts['id']
    if deduplicationId then
        local ttl = deduplicationOpts['ttl']
        if deduplicationOpts['replace'] and ttl and ttl > 0 then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if rcall("ZREM", delayedKey, currentDebounceJobId) > 0 then
                    removeJobKeys(prefix .. currentDebounceJobId)
                    rcall("XADD", eventsKey, "*", "event", "removed", "jobId", currentDebounceJobId,
                        "prev", "delayed")
                    if deduplicationOpts['extend'] then
                        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
                    else
                        rcall('SET', deduplicationKey, jobId, 'KEEPTTL')
                    end
                    rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                        jobId, "deduplicationId", deduplicationId, "deduplicatedJobId", currentDebounceJobId)
                    return
                else
                    return currentDebounceJobId
                end
            else
                rcall('SET', deduplicationKey, jobId, 'PX', ttl)
                return
            end
        else
            local ttl = deduplicationOpts['ttl']
            local deduplicationKeyExists
            if ttl then
                if deduplicationOpts['extend'] then
                    local currentDebounceJobId = rcall('GET', deduplicationKey)
                    if currentDebounceJobId then
                        rcall('SET', deduplicationKey, currentDebounceJobId, 'PX', ttl)
                        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                            "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                        return currentDebounceJobId
                    else
                        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
                        return
                    end
                else
                    deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
                end
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            end
            if deduplicationKeyExists then
                local currentDebounceJobId = rcall('GET', deduplicationKey)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                    currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            end
        end
    end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", idKey)
local maxEvents = getOrSetMaxEvents(metaKey)
local parentDependenciesKey = args[7]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, completedKey, eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(opts['de'], jobId, KEYS[3],
  deduplicationKey, eventsKey, maxEvents, args[1])
if deduplicationJobId then
  return deduplicationJobId
end
-- Store the job.
storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2], opts, timestamp,
         parentKey, parentData, repeatJobKey)
local waitChildrenKey = args[6]
rcall("ZADD", waitChildrenKey, timestamp, jobId)
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
      "waiting-children", "jobId", jobId)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:5};e.s(["addPrioritizedJob",()=>tZ],55494);let tZ={name:"addPrioritizedJob",content:`--[[
  Adds a priotitized job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - Adds the job to the "added" list so that workers gets notified.
    Input:
      KEYS[1] 'marker',
      KEYS[2] 'meta'
      KEYS[3] 'id'
      KEYS[4] 'prioritized'
      KEYS[5] 'delayed'
      KEYS[6] 'completed'
      KEYS[7] 'active'
      KEYS[8] events stream key
      KEYS[9] 'pc' priority counter
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (will not generate one automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  waitChildrenKey key.
            [7]  parent dependencies key.
            [8]  parent? {id, queueKey}
            [9]  repeat job key
            [10] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]] 
local metaKey = KEYS[2]
local idKey = KEYS[3]
local priorityKey = KEYS[4]
local completedKey = KEYS[6]
local activeKey = KEYS[7]
local eventsKey = KEYS[8]
local priorityCounterKey = KEYS[9]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local opts = cmsgpack.unpack(ARGV[3])
local parentKey = args[5]
local parent = args[8]
local repeatJobKey = args[9]
local deduplicationKey = args[10]
local parentData
-- Includes
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to debounce a job.
]]
-- Includes
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function deduplicateJob(deduplicationOpts, jobId, delayedKey, deduplicationKey, eventsKey, maxEvents,
    prefix)
    local deduplicationId = deduplicationOpts and deduplicationOpts['id']
    if deduplicationId then
        local ttl = deduplicationOpts['ttl']
        if deduplicationOpts['replace'] and ttl and ttl > 0 then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if rcall("ZREM", delayedKey, currentDebounceJobId) > 0 then
                    removeJobKeys(prefix .. currentDebounceJobId)
                    rcall("XADD", eventsKey, "*", "event", "removed", "jobId", currentDebounceJobId,
                        "prev", "delayed")
                    if deduplicationOpts['extend'] then
                        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
                    else
                        rcall('SET', deduplicationKey, jobId, 'KEEPTTL')
                    end
                    rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                        jobId, "deduplicationId", deduplicationId, "deduplicatedJobId", currentDebounceJobId)
                    return
                else
                    return currentDebounceJobId
                end
            else
                rcall('SET', deduplicationKey, jobId, 'PX', ttl)
                return
            end
        else
            local ttl = deduplicationOpts['ttl']
            local deduplicationKeyExists
            if ttl then
                if deduplicationOpts['extend'] then
                    local currentDebounceJobId = rcall('GET', deduplicationKey)
                    if currentDebounceJobId then
                        rcall('SET', deduplicationKey, currentDebounceJobId, 'PX', ttl)
                        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                            "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                        return currentDebounceJobId
                    else
                        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
                        return
                    end
                else
                    deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
                end
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            end
            if deduplicationKeyExists then
                local currentDebounceJobId = rcall('GET', deduplicationKey)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                    currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            end
        end
    end
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", idKey)
local maxEvents = getOrSetMaxEvents(metaKey)
local parentDependenciesKey = args[7]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, completedKey, eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(opts['de'], jobId, KEYS[5],
  deduplicationKey, eventsKey, maxEvents, args[1])
if deduplicationJobId then
  return deduplicationJobId
end
-- Store the job.
local delay, priority = storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2],
                                 opts, timestamp, parentKey, parentData,
                                 repeatJobKey)
-- Add the job to the prioritized set
local isPausedOrMaxed = isQueuePausedOrMaxed(metaKey, activeKey)
addJobWithPriority( KEYS[1], priorityKey, priority, jobId, priorityCounterKey, isPausedOrMaxed)
-- Emit waiting event
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:9};e.s(["addRepeatableJob",()=>tX],30960);let tX={name:"addRepeatableJob",content:`--[[
  Adds a repeatable job
    Input:
      KEYS[1] 'repeat' key
      KEYS[2] 'delayed' key
      ARGV[1] next milliseconds
      ARGV[2] msgpacked options
            [1]  name
            [2]  tz?
            [3]  patten?
            [4]  endDate?
            [5]  every?
      ARGV[3] legacy custom key TODO: remove this logic in next breaking change
      ARGV[4] custom key
      ARGV[5] prefix key
      Output:
        repeatableKey  - OK
]]
local rcall = redis.call
local repeatKey = KEYS[1]
local delayedKey = KEYS[2]
local nextMillis = ARGV[1]
local legacyCustomKey = ARGV[3]
local customKey = ARGV[4]
local prefixKey = ARGV[5]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobKey, jobId)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      return rcall("DEL", deduplicationKey)
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobKey, jobId)
  end
  removeJobKeys(jobKey)
end
local function storeRepeatableJob(repeatKey, customKey, nextMillis, rawOpts)
  rcall("ZADD", repeatKey, nextMillis, customKey)
  local opts = cmsgpack.unpack(rawOpts)
  local optionalValues = {}
  if opts['tz'] then
    table.insert(optionalValues, "tz")
    table.insert(optionalValues, opts['tz'])
  end
  if opts['pattern'] then
    table.insert(optionalValues, "pattern")
    table.insert(optionalValues, opts['pattern'])
  end
  if opts['endDate'] then
    table.insert(optionalValues, "endDate")
    table.insert(optionalValues, opts['endDate'])
  end
  if opts['every'] then
    table.insert(optionalValues, "every")
    table.insert(optionalValues, opts['every'])
  end
  rcall("HMSET", repeatKey .. ":" .. customKey, "name", opts['name'],
    unpack(optionalValues))
  return customKey
end
-- If we are overriding a repeatable job we must delete the delayed job for
-- the next iteration.
local prevMillis = rcall("ZSCORE", repeatKey, customKey)
if prevMillis then
  local delayedJobId =  "repeat:" .. customKey .. ":" .. prevMillis
  local nextDelayedJobId =  repeatKey .. ":" .. customKey .. ":" .. nextMillis
  if rcall("ZSCORE", delayedKey, delayedJobId)
   and rcall("EXISTS", nextDelayedJobId) ~= 1 then
    removeJob(delayedJobId, true, prefixKey, true --[[remove debounce key]])
    rcall("ZREM", delayedKey, delayedJobId)
  end
end
-- Keep backwards compatibility with old repeatable jobs (<= 3.0.0)
if rcall("ZSCORE", repeatKey, legacyCustomKey) ~= false then
  return storeRepeatableJob(repeatKey, legacyCustomKey, nextMillis, ARGV[2])
end
return storeRepeatableJob(repeatKey, customKey, nextMillis, ARGV[2])
`,keys:2};e.s(["addStandardJob",()=>t0],1939);let t0={name:"addStandardJob",content:`--[[
  Adds a job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - if delayed:
      - computes timestamp.
      - adds to delayed zset.
      - Emits a global event 'delayed' if the job is delayed.
    - if not delayed
      - Adds the jobId to the wait/paused list in one of three ways:
         - LIFO
         - FIFO
         - prioritized.
      - Adds the job to the "added" list so that workers gets notified.
    Input:
      KEYS[1] 'wait',
      KEYS[2] 'paused'
      KEYS[3] 'meta'
      KEYS[4] 'id'
      KEYS[5] 'completed'
      KEYS[6] 'delayed'
      KEYS[7] 'active'
      KEYS[8] events stream key
      KEYS[9] marker key
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (will not generate one automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  waitChildrenKey key.
            [7]  parent dependencies key.
            [8]  parent? {id, queueKey}
            [9]  repeat job key
            [10] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]]
local eventsKey = KEYS[8]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local opts = cmsgpack.unpack(ARGV[3])
local parentKey = args[5]
local parent = args[8]
local repeatJobKey = args[9]
local deduplicationKey = args[10]
local parentData
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to debounce a job.
]]
-- Includes
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function deduplicateJob(deduplicationOpts, jobId, delayedKey, deduplicationKey, eventsKey, maxEvents,
    prefix)
    local deduplicationId = deduplicationOpts and deduplicationOpts['id']
    if deduplicationId then
        local ttl = deduplicationOpts['ttl']
        if deduplicationOpts['replace'] and ttl and ttl > 0 then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if rcall("ZREM", delayedKey, currentDebounceJobId) > 0 then
                    removeJobKeys(prefix .. currentDebounceJobId)
                    rcall("XADD", eventsKey, "*", "event", "removed", "jobId", currentDebounceJobId,
                        "prev", "delayed")
                    if deduplicationOpts['extend'] then
                        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
                    else
                        rcall('SET', deduplicationKey, jobId, 'KEEPTTL')
                    end
                    rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                        jobId, "deduplicationId", deduplicationId, "deduplicatedJobId", currentDebounceJobId)
                    return
                else
                    return currentDebounceJobId
                end
            else
                rcall('SET', deduplicationKey, jobId, 'PX', ttl)
                return
            end
        else
            local ttl = deduplicationOpts['ttl']
            local deduplicationKeyExists
            if ttl then
                if deduplicationOpts['extend'] then
                    local currentDebounceJobId = rcall('GET', deduplicationKey)
                    if currentDebounceJobId then
                        rcall('SET', deduplicationKey, currentDebounceJobId, 'PX', ttl)
                        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                            "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                        return currentDebounceJobId
                    else
                        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
                        return
                    end
                else
                    deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
                end
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            end
            if deduplicationKeyExists then
                local currentDebounceJobId = rcall('GET', deduplicationKey)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                    currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            end
        end
    end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", KEYS[4])
local metaKey = KEYS[3]
local maxEvents = getOrSetMaxEvents(metaKey)
local parentDependenciesKey = args[7]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, KEYS[5], eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(opts['de'], jobId, KEYS[6],
  deduplicationKey, eventsKey, maxEvents, args[1])
if deduplicationJobId then
  return deduplicationJobId
end
-- Store the job.
storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2], opts, timestamp,
         parentKey, parentData, repeatJobKey)
local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[7], KEYS[1], KEYS[2])
-- LIFO or FIFO
local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
addJobInTargetList(target, KEYS[9], pushCmd, isPausedOrMaxed, jobId)
-- Emit waiting event
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:9};e.s(["changeDelay",()=>t1],24195);let t1={name:"changeDelay",content:`--[[
  Change job delay when it is in delayed set.
  Input:
    KEYS[1] delayed key
    KEYS[2] meta key
    KEYS[3] marker key
    KEYS[4] events stream
    ARGV[1] delay
    ARGV[2] timestamp
    ARGV[3] the id of the job
    ARGV[4] job key
  Output:
    0 - OK
   -1 - Missing job.
   -3 - Job not in delayed set.
  Events:
    - delayed key.
]]
local rcall = redis.call
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
if rcall("EXISTS", ARGV[4]) == 1 then
  local jobId = ARGV[3]
  local delay = tonumber(ARGV[1])
  local score, delayedTimestamp = getDelayedScore(KEYS[1], ARGV[2], delay)
  local numRemovedElements = rcall("ZREM", KEYS[1], jobId)
  if numRemovedElements < 1 then
    return -3
  end
  rcall("HSET", ARGV[4], "delay", delay)
  rcall("ZADD", KEYS[1], score, jobId)
  local maxEvents = getOrSetMaxEvents(KEYS[2])
  rcall("XADD", KEYS[4], "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(KEYS[3], KEYS[1])
  return 0
else
  return -1
end`,keys:4};e.s(["changePriority",()=>t2],21057);let t2={name:"changePriority",content:`--[[
  Change job priority
  Input:
    KEYS[1] 'wait',
    KEYS[2] 'paused'
    KEYS[3] 'meta'
    KEYS[4] 'prioritized'
    KEYS[5] 'active'
    KEYS[6] 'pc' priority counter
    KEYS[7] 'marker'
    ARGV[1] priority value
    ARGV[2] prefix key
    ARGV[3] job id
    ARGV[4] lifo
    Output:
       0  - OK
      -1  - Missing job
]]
local jobId = ARGV[3]
local jobKey = ARGV[2] .. jobId
local priority = tonumber(ARGV[1])
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Function to push back job considering priority in front of same prioritized jobs.
]]
local function pushBackJobWithPriority(prioritizedKey, priority, jobId)
  -- in order to put it at front of same prioritized jobs
  -- we consider prioritized counter as 0
  local score = priority * 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
end
local function reAddJobWithNewPriority( prioritizedKey, markerKey, targetKey,
    priorityCounter, lifo, priority, jobId, isPausedOrMaxed)
    if priority == 0 then
        local pushCmd = lifo and 'RPUSH' or 'LPUSH'
        addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
    else
        if lifo then
            pushBackJobWithPriority(prioritizedKey, priority, jobId)
        else
            addJobWithPriority(markerKey, prioritizedKey, priority, jobId,
                priorityCounter, isPausedOrMaxed)
        end
    end
end
if rcall("EXISTS", jobKey) == 1 then
    local metaKey = KEYS[3]
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[5], KEYS[1], KEYS[2])
    local prioritizedKey = KEYS[4]
    local priorityCounterKey = KEYS[6]
    local markerKey = KEYS[7]
    -- Re-add with the new priority
    if rcall("ZREM", prioritizedKey, jobId) > 0 then
        reAddJobWithNewPriority( prioritizedKey, markerKey, target,
            priorityCounterKey, ARGV[4] == '1', priority, jobId, isPausedOrMaxed)
    elseif rcall("LREM", target, -1, jobId) > 0 then
        reAddJobWithNewPriority( prioritizedKey, markerKey, target,
            priorityCounterKey, ARGV[4] == '1', priority, jobId, isPausedOrMaxed)
    end
    rcall("HSET", jobKey, "priority", priority)
    return 0
else
    return -1
end
`,keys:7};e.s(["cleanJobsInSet",()=>t3],41381);let t3={name:"cleanJobsInSet",content:`--[[
  Remove jobs from the specific set.
  Input:
    KEYS[1]  set key,
    KEYS[2]  events stream key
    KEYS[3]  repeat key
    ARGV[1]  jobKey prefix
    ARGV[2]  timestamp
    ARGV[3]  limit the number of jobs to be removed. 0 is unlimited
    ARGV[4]  set name, can be any of 'wait', 'active', 'paused', 'delayed', 'completed', or 'failed'
]]
local rcall = redis.call
local repeatKey = KEYS[3]
local rangeStart = 0
local rangeEnd = -1
local limit = tonumber(ARGV[3])
-- If we're only deleting _n_ items, avoid retrieving all items
-- for faster performance
--
-- Start from the tail of the list, since that's where oldest elements
-- are generally added for FIFO lists
if limit > 0 then
  rangeStart = -1 - limit + 1
  rangeEnd = -1
end
-- Includes
--[[
  Function to clean job list.
  Returns jobIds and deleted count number.
]]
-- Includes
--[[
  Function to get the latest saved timestamp.
]]
local function getTimestamp(jobKey, attributes)
  if #attributes == 1 then
    return rcall("HGET", jobKey, attributes[1])
  end
  local jobTs
  for _, ts in ipairs(rcall("HMGET", jobKey, unpack(attributes))) do
    if (ts) then
      jobTs = ts
      break
    end
  end
  return jobTs
end
--[[
  Function to check if the job belongs to a job scheduler and
  current delayed job matches with jobId
]]
local function isJobSchedulerJob(jobId, jobKey, jobSchedulersKey)
  local repeatJobKey = rcall("HGET", jobKey, "rjk")
  if repeatJobKey  then
    local prevMillis = rcall("ZSCORE", jobSchedulersKey, repeatJobKey)
    if prevMillis then
      local currentDelayedJobId = "repeat:" .. repeatJobKey .. ":" .. prevMillis
      return jobId == currentDelayedJobId
    end
  end
  return false
end
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobKey, jobId)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      return rcall("DEL", deduplicationKey)
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobKey, jobId)
  end
  removeJobKeys(jobKey)
end
local function cleanList(listKey, jobKeyPrefix, rangeStart, rangeEnd,
  timestamp, isWaiting, jobSchedulersKey)
  local jobs = rcall("LRANGE", listKey, rangeStart, rangeEnd)
  local deleted = {}
  local deletedCount = 0
  local jobTS
  local deletionMarker = ''
  local jobIdsLen = #jobs
  for i, job in ipairs(jobs) do
    if limit > 0 and deletedCount >= limit then
      break
    end
    local jobKey = jobKeyPrefix .. job
    if (isWaiting or rcall("EXISTS", jobKey .. ":lock") == 0) and
      not isJobSchedulerJob(job, jobKey, jobSchedulersKey) then
      -- Find the right timestamp of the job to compare to maxTimestamp:
      -- * finishedOn says when the job was completed, but it isn't set unless the job has actually completed
      -- * processedOn represents when the job was last attempted, but it doesn't get populated until
      --   the job is first tried
      -- * timestamp is the original job submission time
      -- Fetch all three of these (in that order) and use the first one that is set so that we'll leave jobs
      -- that have been active within the grace period:
      jobTS = getTimestamp(jobKey, {"finishedOn", "processedOn", "timestamp"})
      if (not jobTS or jobTS <= timestamp) then
        -- replace the entry with a deletion marker; the actual deletion will
        -- occur at the end of the script
        rcall("LSET", listKey, rangeEnd - jobIdsLen + i, deletionMarker)
        removeJob(job, true, jobKeyPrefix, true --[[remove debounce key]])
        deletedCount = deletedCount + 1
        table.insert(deleted, job)
      end
    end
  end
  rcall("LREM", listKey, 0, deletionMarker)
  return {deleted, deletedCount}
end
--[[
  Function to clean job set.
  Returns jobIds and deleted count number.
]] 
-- Includes
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  We use ZRANGEBYSCORE to make the case where we're deleting a limited number
  of items in a sorted set only run a single iteration. If we simply used
  ZRANGE, we may take a long time traversing through jobs that are within the
  grace period.
]]
local function getJobsInZset(zsetKey, rangeEnd, limit)
  if limit > 0 then
    return rcall("ZRANGEBYSCORE", zsetKey, 0, rangeEnd, "LIMIT", 0, limit)
  else
    return rcall("ZRANGEBYSCORE", zsetKey, 0, rangeEnd)
  end
end
local function cleanSet(
    setKey,
    jobKeyPrefix,
    rangeEnd,
    timestamp,
    limit,
    attributes,
    isFinished,
    jobSchedulersKey)
    local jobs = getJobsInZset(setKey, rangeEnd, limit)
    local deleted = {}
    local deletedCount = 0
    local jobTS
    for i, job in ipairs(jobs) do
        if limit > 0 and deletedCount >= limit then
            break
        end
        local jobKey = jobKeyPrefix .. job
        -- Extract a Job Scheduler Id from jobId ("repeat:job-scheduler-id:millis") 
        -- and check if it is in the scheduled jobs
        if not (jobSchedulersKey and isJobSchedulerJob(job, jobKey, jobSchedulersKey)) then
            if isFinished then
                removeJob(job, true, jobKeyPrefix, true --[[remove debounce key]] )
                deletedCount = deletedCount + 1
                table.insert(deleted, job)
            else
                -- * finishedOn says when the job was completed, but it isn't set unless the job has actually completed
                jobTS = getTimestamp(jobKey, attributes)
                if (not jobTS or jobTS <= timestamp) then
                    removeJob(job, true, jobKeyPrefix, true --[[remove debounce key]] )
                    deletedCount = deletedCount + 1
                    table.insert(deleted, job)
                end
            end
        end
    end
    if (#deleted > 0) then
        for from, to in batches(#deleted, 7000) do
            rcall("ZREM", setKey, unpack(deleted, from, to))
        end
    end
    return {deleted, deletedCount}
end
local result
if ARGV[4] == "active" then
  result = cleanList(KEYS[1], ARGV[1], rangeStart, rangeEnd, ARGV[2], false --[[ hasFinished ]],
                      repeatKey)
elseif ARGV[4] == "delayed" then
  rangeEnd = "+inf"
  result = cleanSet(KEYS[1], ARGV[1], rangeEnd, ARGV[2], limit,
                    {"processedOn", "timestamp"}, false  --[[ hasFinished ]], repeatKey)
elseif ARGV[4] == "prioritized" then
  rangeEnd = "+inf"
  result = cleanSet(KEYS[1], ARGV[1], rangeEnd, ARGV[2], limit,
                    {"timestamp"}, false  --[[ hasFinished ]], repeatKey)
elseif ARGV[4] == "wait" or ARGV[4] == "paused" then
  result = cleanList(KEYS[1], ARGV[1], rangeStart, rangeEnd, ARGV[2], true --[[ hasFinished ]],
                      repeatKey)
else
  rangeEnd = ARGV[2]
  -- No need to pass repeat key as in that moment job won't be related to a job scheduler
  result = cleanSet(KEYS[1], ARGV[1], rangeEnd, ARGV[2], limit,
                    {"finishedOn"}, true  --[[ hasFinished ]])
end
rcall("XADD", KEYS[2], "*", "event", "cleaned", "count", result[2])
return result[1]
`,keys:3};e.s(["drain",()=>t6],46888);let t6={name:"drain",content:`--[[
  Drains the queue, removes all jobs that are waiting
  or delayed, but not active, completed or failed
  Input:
    KEYS[1] 'wait',
    KEYS[2] 'paused'
    KEYS[3] 'delayed'
    KEYS[4] 'prioritized'
    KEYS[5] 'jobschedulers' (repeat)
    ARGV[1]  queue key prefix
    ARGV[2]  should clean delayed jobs
]]
local rcall = redis.call
local queueBaseKey = ARGV[1]
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to filter out jobs to ignore from a table.
]]
local function filterOutJobsToIgnore(jobs, jobsToIgnore)
  local filteredJobs = {}
  for i = 1, #jobs do
    if not jobsToIgnore[jobs[i]] then
      table.insert(filteredJobs, jobs[i])
    end
  end
  return filteredJobs
end
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobKey, jobId)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      return rcall("DEL", deduplicationKey)
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobKey, jobId)
  end
  removeJobKeys(jobKey)
end
local function removeJobs(keys, hard, baseKey, max)
  for i, key in ipairs(keys) do
    removeJob(key, hard, baseKey, true --[[remove debounce key]])
  end
  return max - #keys
end
local function getListItems(keyName, max)
  return rcall('LRANGE', keyName, 0, max - 1)
end
local function removeListJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getListItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  rcall("LTRIM", keyName, #jobs, -1)
  return count
end
-- Includes
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to get ZSet items.
]]
local function getZSetItems(keyName, max)
  return rcall('ZRANGE', keyName, 0, max - 1)
end
local function removeZSetJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getZSetItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  if(#jobs > 0) then
    for from, to in batches(#jobs, 7000) do
      rcall("ZREM", keyName, unpack(jobs, from, to))
    end
  end
  return count
end
-- We must not remove delayed jobs if they are associated to a job scheduler.
local scheduledJobs = {}
local jobSchedulers = rcall("ZRANGE", KEYS[5], 0, -1, "WITHSCORES")
-- For every job scheduler, get the current delayed job id.
for i = 1, #jobSchedulers, 2 do
    local jobSchedulerId = jobSchedulers[i]
    local jobSchedulerMillis = jobSchedulers[i + 1]
    local delayedJobId = "repeat:" .. jobSchedulerId .. ":" .. jobSchedulerMillis
    scheduledJobs[delayedJobId] = true
end
removeListJobs(KEYS[1], true, queueBaseKey, 0, scheduledJobs) -- wait
removeListJobs(KEYS[2], true, queueBaseKey, 0, scheduledJobs) -- paused
if ARGV[2] == "1" then
  removeZSetJobs(KEYS[3], true, queueBaseKey, 0, scheduledJobs) -- delayed
end
removeZSetJobs(KEYS[4], true, queueBaseKey, 0, scheduledJobs) -- prioritized
`,keys:5};e.s(["extendLock",()=>t4],56111);let t4={name:"extendLock",content:`--[[
  Extend lock and removes the job from the stalled set.
  Input:
    KEYS[1] 'lock',
    KEYS[2] 'stalled'
    ARGV[1]  token
    ARGV[2]  lock duration in milliseconds
    ARGV[3]  jobid
  Output:
    "1" if lock extented succesfully.
]]
local rcall = redis.call
if rcall("GET", KEYS[1]) == ARGV[1] then
  --   if rcall("SET", KEYS[1], ARGV[1], "PX", ARGV[2], "XX") then
  if rcall("SET", KEYS[1], ARGV[1], "PX", ARGV[2]) then
    rcall("SREM", KEYS[2], ARGV[3])
    return 1
  end
end
return 0
`,keys:2};e.s(["extendLocks",()=>t5],46003);let t5={name:"extendLocks",content:`--[[
  Extend locks for multiple jobs and remove them from the stalled set if successful.
  Return the list of job IDs for which the operation failed.
  KEYS[1] = stalledKey
  ARGV[1] = baseKey
  ARGV[2] = tokens
  ARGV[3] = jobIds
  ARGV[4] = lockDuration (ms)
  Output:
    An array of failed job IDs. If empty, all succeeded.
]]
local rcall = redis.call
local stalledKey = KEYS[1]
local baseKey = ARGV[1]
local tokens = cmsgpack.unpack(ARGV[2])
local jobIds = cmsgpack.unpack(ARGV[3])
local lockDuration = ARGV[4]
local jobCount = #jobIds
local failedJobs = {}
for i = 1, jobCount, 1 do
    local lockKey = baseKey .. jobIds[i] .. ':lock'
    local jobId = jobIds[i]
    local token = tokens[i]
    local currentToken = rcall("GET", lockKey)
    if currentToken == token then
        local setResult = rcall("SET", lockKey, token, "PX", lockDuration)
        if setResult then
            rcall("SREM", stalledKey, jobId)
        else
            table.insert(failedJobs, jobId)
        end
    else
        table.insert(failedJobs, jobId)
    end
end
return failedJobs
`,keys:1};e.s(["getCounts",()=>t8],19884);let t8={name:"getCounts",content:`--[[
  Get counts per provided states
    Input:
      KEYS[1]    'prefix'
      ARGV[1...] types
]]
local rcall = redis.call;
local prefix = KEYS[1]
local results = {}
for i = 1, #ARGV do
  local stateKey = prefix .. ARGV[i]
  if ARGV[i] == "wait" or ARGV[i] == "paused" then
    -- Markers in waitlist DEPRECATED in v5: Remove in v6.
    local marker = rcall("LINDEX", stateKey, -1)
    if marker and string.sub(marker, 1, 2) == "0:" then
      local count = rcall("LLEN", stateKey)
      if count > 1 then
        rcall("RPOP", stateKey)
        results[#results+1] = count-1
      else
        results[#results+1] = 0
      end
    else
      results[#results+1] = rcall("LLEN", stateKey)
    end
  elseif ARGV[i] == "active" then
    results[#results+1] = rcall("LLEN", stateKey)
  else
    results[#results+1] = rcall("ZCARD", stateKey)
  end
end
return results
`,keys:1};e.s(["getCountsPerPriority",()=>t9],65535);let t9={name:"getCountsPerPriority",content:`--[[
  Get counts per provided states
    Input:
      KEYS[1] wait key
      KEYS[2] paused key
      KEYS[3] meta key
      KEYS[4] prioritized key
      ARGV[1...] priorities
]]
local rcall = redis.call
local results = {}
local waitKey = KEYS[1]
local pausedKey = KEYS[2]
local prioritizedKey = KEYS[4]
-- Includes
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePaused(queueMetaKey)
  return rcall("HEXISTS", queueMetaKey, "paused") == 1
end
for i = 1, #ARGV do
  local priority = tonumber(ARGV[i])
  if priority == 0 then
    if isQueuePaused(KEYS[3]) then
      results[#results+1] = rcall("LLEN", pausedKey)
    else
      results[#results+1] = rcall("LLEN", waitKey)
    end
  else
    results[#results+1] = rcall("ZCOUNT", prioritizedKey,
      priority * 0x100000000, (priority + 1)  * 0x100000000 - 1)
  end
end
return results
`,keys:4};e.s(["getDependencyCounts",()=>t7],64623);let t7={name:"getDependencyCounts",content:`--[[
  Get counts per child states
    Input:
      KEYS[1]    processed key
      KEYS[2]    unprocessed key
      KEYS[3]    ignored key
      KEYS[4]    failed key
      ARGV[1...] types
]]
local rcall = redis.call;
local processedKey = KEYS[1]
local unprocessedKey = KEYS[2]
local ignoredKey = KEYS[3]
local failedKey = KEYS[4]
local results = {}
for i = 1, #ARGV do
  if ARGV[i] == "processed" then
    results[#results+1] = rcall("HLEN", processedKey)
  elseif ARGV[i] == "unprocessed" then
    results[#results+1] = rcall("SCARD", unprocessedKey)
  elseif ARGV[i] == "ignored" then
    results[#results+1] = rcall("HLEN", ignoredKey)
  else
    results[#results+1] = rcall("ZCARD", failedKey)
  end
end
return results
`,keys:4};e.s(["getJobScheduler",()=>re],33429);let re={name:"getJobScheduler",content:`--[[
  Get job scheduler record.
  Input:
    KEYS[1] 'repeat' key
    ARGV[1] id
]]
local rcall = redis.call
local jobSchedulerKey = KEYS[1] .. ":" .. ARGV[1]
local score = rcall("ZSCORE", KEYS[1], ARGV[1])
if score then
  return {rcall("HGETALL", jobSchedulerKey), score} -- get job data
end
return {nil, nil}
`,keys:1};e.s(["getRanges",()=>rt],40615);let rt={name:"getRanges",content:`--[[
  Get job ids per provided states
    Input:
      KEYS[1]    'prefix'
      ARGV[1]    start
      ARGV[2]    end
      ARGV[3]    asc
      ARGV[4...] types
]]
local rcall = redis.call
local prefix = KEYS[1]
local rangeStart = tonumber(ARGV[1])
local rangeEnd = tonumber(ARGV[2])
local asc = ARGV[3]
local results = {}
local function getRangeInList(listKey, asc, rangeStart, rangeEnd, results)
  if asc == "1" then
    local modifiedRangeStart
    local modifiedRangeEnd
    if rangeStart == -1 then
      modifiedRangeStart = 0
    else
      modifiedRangeStart = -(rangeStart + 1)
    end
    if rangeEnd == -1 then
      modifiedRangeEnd = 0
    else
      modifiedRangeEnd = -(rangeEnd + 1)
    end
    results[#results+1] = rcall("LRANGE", listKey,
      modifiedRangeEnd,
      modifiedRangeStart)
  else
    results[#results+1] = rcall("LRANGE", listKey, rangeStart, rangeEnd)
  end
end
for i = 4, #ARGV do
  local stateKey = prefix .. ARGV[i]
  if ARGV[i] == "wait" or ARGV[i] == "paused" then
    -- Markers in waitlist DEPRECATED in v5: Remove in v6.
    local marker = rcall("LINDEX", stateKey, -1)
    if marker and string.sub(marker, 1, 2) == "0:" then
      local count = rcall("LLEN", stateKey)
      if count > 1 then
        rcall("RPOP", stateKey)
        getRangeInList(stateKey, asc, rangeStart, rangeEnd, results)
      else
        results[#results+1] = {}
      end
    else
      getRangeInList(stateKey, asc, rangeStart, rangeEnd, results)
    end
  elseif ARGV[i] == "active" then
    getRangeInList(stateKey, asc, rangeStart, rangeEnd, results)
  else
    if asc == "1" then
      results[#results+1] = rcall("ZRANGE", stateKey, rangeStart, rangeEnd)
    else
      results[#results+1] = rcall("ZREVRANGE", stateKey, rangeStart, rangeEnd)
    end
  end
end
return results
`,keys:1};e.s(["getRateLimitTtl",()=>rr],47539);let rr={name:"getRateLimitTtl",content:`--[[
  Get rate limit ttl
    Input:
      KEYS[1] 'limiter'
      ARGV[1] maxJobs
]]
local rcall = redis.call
-- Includes
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
local rateLimiterKey = KEYS[1]
if ARGV[1] ~= "0" then
  return getRateLimitTTL(tonumber(ARGV[1]), rateLimiterKey)
else
  return rcall("PTTL", rateLimiterKey)
end
`,keys:1};e.s(["getState",()=>rn],61570);let rn={name:"getState",content:`--[[
  Get a job state
  Input: 
    KEYS[1] 'completed' key,
    KEYS[2] 'failed' key
    KEYS[3] 'delayed' key
    KEYS[4] 'active' key
    KEYS[5] 'wait' key
    KEYS[6] 'paused' key
    KEYS[7] 'waiting-children' key
    KEYS[8] 'prioritized' key
    ARGV[1] job id
  Output:
    'completed'
    'failed'
    'delayed'
    'active'
    'prioritized'
    'waiting'
    'waiting-children'
    'unknown'
]]
local rcall = redis.call
if rcall("ZSCORE", KEYS[1], ARGV[1]) then
  return "completed"
end
if rcall("ZSCORE", KEYS[2], ARGV[1]) then
  return "failed"
end
if rcall("ZSCORE", KEYS[3], ARGV[1]) then
  return "delayed"
end
if rcall("ZSCORE", KEYS[8], ARGV[1]) then
  return "prioritized"
end
-- Includes
--[[
  Functions to check if a item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local active_items = rcall("LRANGE", KEYS[4] , 0, -1)
if checkItemInList(active_items, ARGV[1]) ~= nil then
  return "active"
end
local wait_items = rcall("LRANGE", KEYS[5] , 0, -1)
if checkItemInList(wait_items, ARGV[1]) ~= nil then
  return "waiting"
end
local paused_items = rcall("LRANGE", KEYS[6] , 0, -1)
if checkItemInList(paused_items, ARGV[1]) ~= nil then
  return "waiting"
end
if rcall("ZSCORE", KEYS[7], ARGV[1]) then
  return "waiting-children"
end
return "unknown"
`,keys:8};e.s(["getStateV2",()=>ri],6789);let ri={name:"getStateV2",content:`--[[
  Get a job state
  Input: 
    KEYS[1] 'completed' key,
    KEYS[2] 'failed' key
    KEYS[3] 'delayed' key
    KEYS[4] 'active' key
    KEYS[5] 'wait' key
    KEYS[6] 'paused' key
    KEYS[7] 'waiting-children' key
    KEYS[8] 'prioritized' key
    ARGV[1] job id
  Output:
    'completed'
    'failed'
    'delayed'
    'active'
    'waiting'
    'waiting-children'
    'unknown'
]]
local rcall = redis.call
if rcall("ZSCORE", KEYS[1], ARGV[1]) then
  return "completed"
end
if rcall("ZSCORE", KEYS[2], ARGV[1]) then
  return "failed"
end
if rcall("ZSCORE", KEYS[3], ARGV[1]) then
  return "delayed"
end
if rcall("ZSCORE", KEYS[8], ARGV[1]) then
  return "prioritized"
end
if rcall("LPOS", KEYS[4] , ARGV[1]) then
  return "active"
end
if rcall("LPOS", KEYS[5] , ARGV[1]) then
  return "waiting"
end
if rcall("LPOS", KEYS[6] , ARGV[1]) then
  return "waiting"
end
if rcall("ZSCORE", KEYS[7] , ARGV[1]) then
  return "waiting-children"
end
return "unknown"
`,keys:8};e.s(["isFinished",()=>ra],71707);let ra={name:"isFinished",content:`--[[
  Checks if a job is finished (.i.e. is in the completed or failed set)
  Input: 
    KEYS[1] completed key
    KEYS[2] failed key
    KEYS[3] job key
    ARGV[1] job id
    ARGV[2] return value?
  Output:
    0 - Not finished.
    1 - Completed.
    2 - Failed.
   -1 - Missing job. 
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[3]) ~= 1 then
  if ARGV[2] == "1" then
    return {-1,"Missing key for job " .. KEYS[3] .. ". isFinished"}
  end  
  return -1
end
if rcall("ZSCORE", KEYS[1], ARGV[1]) then
  if ARGV[2] == "1" then
    local returnValue = rcall("HGET", KEYS[3], "returnvalue")
    return {1,returnValue}
  end
  return 1
end
if rcall("ZSCORE", KEYS[2], ARGV[1]) then
  if ARGV[2] == "1" then
    local failedReason = rcall("HGET", KEYS[3], "failedReason")
    return {2,failedReason}
  end
  return 2
end
if ARGV[2] == "1" then
  return {0}
end
return 0
`,keys:3};e.s(["isJobInList",()=>rs],70389);let rs={name:"isJobInList",content:`--[[
  Checks if job is in a given list.
  Input:
    KEYS[1]
    ARGV[1]
  Output:
    1 if element found in the list.
]]
-- Includes
--[[
  Functions to check if a item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local items = redis.call("LRANGE", KEYS[1] , 0, -1)
return checkItemInList(items, ARGV[1])
`,keys:1};e.s(["isMaxed",()=>ro],79499);let ro={name:"isMaxed",content:`--[[
  Checks if queue is maxed.
  Input:
    KEYS[1] meta key
    KEYS[2] active key
  Output:
    1 if element found in the list.
]]
local rcall = redis.call
-- Includes
--[[
  Function to check if queue is maxed or not.
]]
local function isQueueMaxed(queueMetaKey, activeKey)
  local maxConcurrency = rcall("HGET", queueMetaKey, "concurrency")
  if maxConcurrency then
    local activeCount = rcall("LLEN", activeKey)
    if activeCount >= tonumber(maxConcurrency) then
      return true
    end
  end
  return false
end
return isQueueMaxed(KEYS[1], KEYS[2])
`,keys:2};e.s(["moveJobFromActiveToWait",()=>rl],91017);let rl={name:"moveJobFromActiveToWait",content:`--[[
  Function to move job from active state to wait.
  Input:
    KEYS[1]  active key
    KEYS[2]  wait key
    KEYS[3]  stalled key
    KEYS[4]  paused key
    KEYS[5]  meta key
    KEYS[6]  limiter key
    KEYS[7]  prioritized key
    KEYS[8]  marker key
    KEYS[9] event key
    ARGV[1] job id
    ARGV[2] lock token
    ARGV[3] job id key
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to push back job considering priority in front of same prioritized jobs.
]]
local function pushBackJobWithPriority(prioritizedKey, priority, jobId)
  -- in order to put it at front of same prioritized jobs
  -- we consider prioritized counter as 0
  local score = priority * 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
local jobId = ARGV[1]
local token = ARGV[2]
local jobKey = ARGV[3]
if rcall("EXISTS", jobKey) == 0 then
  return -1
end
local errorCode = removeLock(jobKey, KEYS[3], token, jobId)
if errorCode < 0 then
  return errorCode
end
local metaKey = KEYS[5]
local removed = rcall("LREM", KEYS[1], 1, jobId)
if removed > 0 then
  local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[1], KEYS[2], KEYS[4])
  local priority = tonumber(rcall("HGET", ARGV[3], "priority")) or 0
  if priority > 0 then
    pushBackJobWithPriority(KEYS[7], priority, jobId)
  else
    addJobInTargetList(target, KEYS[8], "RPUSH", isPausedOrMaxed, jobId)
  end
  local maxEvents = getOrSetMaxEvents(metaKey)
  -- Emit waiting event
  rcall("XADD", KEYS[9], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
    "jobId", jobId, "prev", "active")
end
local pttl = rcall("PTTL", KEYS[6])
if pttl > 0 then
  return pttl
else
  return 0
end
`,keys:9};e.s(["moveJobsToWait",()=>rd],73652);let rd={name:"moveJobsToWait",content:`--[[
  Move completed, failed or delayed jobs to wait.
  Note: Does not support jobs with priorities.
  Input:
    KEYS[1] base key
    KEYS[2] events stream
    KEYS[3] state key (failed, completed, delayed)
    KEYS[4] 'wait'
    KEYS[5] 'paused'
    KEYS[6] 'meta'
    KEYS[7] 'active'
    KEYS[8] 'marker'
    ARGV[1] count
    ARGV[2] timestamp
    ARGV[3] prev state
  Output:
    1  means the operation is not completed
    0  means the operation is completed
]]
local maxCount = tonumber(ARGV[1])
local timestamp = tonumber(ARGV[2])
local rcall = redis.call;
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local metaKey = KEYS[6]
local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[7], KEYS[4], KEYS[5])
local jobs = rcall('ZRANGEBYSCORE', KEYS[3], 0, timestamp, 'LIMIT', 0, maxCount)
if (#jobs > 0) then
    if ARGV[3] == "failed" then
        for i, key in ipairs(jobs) do
            local jobKey = KEYS[1] .. key
            rcall("HDEL", jobKey, "finishedOn", "processedOn", "failedReason")
        end
    elseif ARGV[3] == "completed" then
        for i, key in ipairs(jobs) do
            local jobKey = KEYS[1] .. key
            rcall("HDEL", jobKey, "finishedOn", "processedOn", "returnvalue")
        end
    end
    local maxEvents = getOrSetMaxEvents(metaKey)
    for i, key in ipairs(jobs) do
        -- Emit waiting event
        rcall("XADD", KEYS[2], "MAXLEN", "~", maxEvents, "*", "event",
              "waiting", "jobId", key, "prev", ARGV[3]);
    end
    for from, to in batches(#jobs, 7000) do
        rcall("ZREM", KEYS[3], unpack(jobs, from, to))
        rcall("LPUSH", target, unpack(jobs, from, to))
    end
    addBaseMarkerIfNeeded(KEYS[8], isPausedOrMaxed)
end
maxCount = maxCount - #jobs
if (maxCount <= 0) then return 1 end
return 0
`,keys:8};e.s(["moveStalledJobsToWait",()=>rc],26867);let rc={name:"moveStalledJobsToWait",content:`--[[
  Move stalled jobs to wait.
    Input:
      KEYS[1] 'stalled' (SET)
      KEYS[2] 'wait',   (LIST)
      KEYS[3] 'active', (LIST)
      KEYS[4] 'stalled-check', (KEY)
      KEYS[5] 'meta', (KEY)
      KEYS[6] 'paused', (LIST)
      KEYS[7] 'marker'
      KEYS[8] 'event stream' (STREAM)
      ARGV[1]  Max stalled job count
      ARGV[2]  queue.toKey('')
      ARGV[3]  timestamp
      ARGV[4]  max check time
    Events:
      'stalled' with stalled job id.
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Function to move job to wait to be picked up by a waiting worker.
]]
-- Includes
local function moveJobToWait(metaKey, activeKey, waitKey, pausedKey, markerKey, eventStreamKey,
  jobId, pushCmd)
  local target, isPausedOrMaxed = getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
  addJobInTargetList(target, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId", jobId, 'prev', 'active')
end
--[[
  Function to trim events, default 10000.
]]
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
local function trimEvents(metaKey, eventStreamKey)
  local maxEvents = getOrSetMaxEvents(metaKey)
  if maxEvents then
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", maxEvents)
  else
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", 10000)
  end
end
local stalledKey = KEYS[1]
local waitKey = KEYS[2]
local activeKey = KEYS[3]
local stalledCheckKey = KEYS[4]
local metaKey = KEYS[5]
local pausedKey = KEYS[6]
local markerKey = KEYS[7]
local eventStreamKey = KEYS[8]
local maxStalledJobCount = tonumber(ARGV[1])
local queueKeyPrefix = ARGV[2]
local timestamp = ARGV[3]
local maxCheckTime = ARGV[4]
if rcall("EXISTS", stalledCheckKey) == 1 then
    return {}
end
rcall("SET", stalledCheckKey, timestamp, "PX", maxCheckTime)
-- Trim events before emiting them to avoid trimming events emitted in this script
trimEvents(metaKey, eventStreamKey)
-- Move all stalled jobs to wait
local stalling = rcall('SMEMBERS', stalledKey)
local stalled = {}
if (#stalling > 0) then
    rcall('DEL', stalledKey)
    -- Remove from active list
    for i, jobId in ipairs(stalling) do
        -- Markers in waitlist DEPRECATED in v5: Remove in v6.
        if string.sub(jobId, 1, 2) == "0:" then
            -- If the jobId is a delay marker ID we just remove it.
            rcall("LREM", activeKey, 1, jobId)
        else
            local jobKey = queueKeyPrefix .. jobId
            -- Check that the lock is also missing, then we can handle this job as really stalled.
            if (rcall("EXISTS", jobKey .. ":lock") == 0) then
                --  Remove from the active queue.
                local removed = rcall("LREM", activeKey, 1, jobId)
                if (removed > 0) then
                    -- If this job has been stalled too many times, such as if it crashes the worker, then fail it.
                    local stalledCount = rcall("HINCRBY", jobKey, "stc", 1)
                    if stalledCount > maxStalledJobCount then
                        local failedReason = "job stalled more than allowable limit"
                        rcall("HSET", jobKey, "defa", failedReason)
                    end
                    moveJobToWait(metaKey, activeKey, waitKey, pausedKey, markerKey, eventStreamKey, jobId,
                        "RPUSH")
                    -- Emit the stalled event
                    rcall("XADD", eventStreamKey, "*", "event", "stalled", "jobId", jobId)
                    table.insert(stalled, jobId)
                end
            end
        end
    end
end
-- Mark potentially stalled jobs
local active = rcall('LRANGE', activeKey, 0, -1)
if (#active > 0) then
    for from, to in batches(#active, 7000) do
        rcall('SADD', stalledKey, unpack(active, from, to))
    end
end
return stalled
`,keys:8};e.s(["moveToActive",()=>ru],10393);let ru={name:"moveToActive",content:`--[[
  Move next job to be processed to active, lock it and fetch its data. The job
  may be delayed, in that case we need to move it to the delayed set instead.
  This operation guarantees that the worker owns the job during the lock
  expiration time. The worker is responsible of keeping the lock fresh
  so that no other worker picks this job again.
  Input:
    KEYS[1] wait key
    KEYS[2] active key
    KEYS[3] prioritized key
    KEYS[4] stream events key
    KEYS[5] stalled key
    -- Rate limiting
    KEYS[6] rate limiter key
    KEYS[7] delayed key
    -- Delayed jobs
    KEYS[8] paused key
    KEYS[9] meta key
    KEYS[10] pc priority counter
    -- Marker
    KEYS[11] marker key
    -- Arguments
    ARGV[1] key prefix
    ARGV[2] timestamp
    ARGV[3] opts
    opts - token - lock token
    opts - lockDuration
    opts - limiter
    opts - name - worker name
]]
local rcall = redis.call
local waitKey = KEYS[1]
local activeKey = KEYS[2]
local eventStreamKey = KEYS[4]
local rateLimiterKey = KEYS[6]
local delayedKey = KEYS[7]
local opts = cmsgpack.unpack(ARGV[3])
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Function to move job from prioritized state to active.
]]
local function moveJobFromPrioritizedToActive(priorityKey, activeKey, priorityCounterKey)
  local prioritizedJob = rcall("ZPOPMIN", priorityKey)
  if #prioritizedJob > 0 then
    rcall("LPUSH", activeKey, prioritizedJob[1])
    return prioritizedJob[1]
  else
    rcall("DEL", priorityCounterKey)
  end
end
--[[
  Function to move job from wait state to active.
  Input:
    opts - token - lock token
    opts - lockDuration
    opts - limiter
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function prepareJobForProcessing(keyPrefix, rateLimiterKey, eventStreamKey,
    jobId, processedOn, maxJobs, markerKey, opts)
  local jobKey = keyPrefix .. jobId
  -- Check if we need to perform rate limiting.
  if maxJobs then
    local jobCounter = tonumber(rcall("INCR", rateLimiterKey))
    if jobCounter == 1 then
      local limiterDuration = opts['limiter'] and opts['limiter']['duration']
      local integerDuration = math.floor(math.abs(limiterDuration))
      rcall("PEXPIRE", rateLimiterKey, integerDuration)
    end
  end
  local lockKey = jobKey .. ':lock'
  -- get a lock
  if opts['token'] ~= "0" then
    rcall("SET", lockKey, opts['token'], "PX", opts['lockDuration'])
  end
  local optionalValues = {}
  if opts['name'] then
    -- Set "processedBy" field to the worker name
    table.insert(optionalValues, "pb")
    table.insert(optionalValues, opts['name'])
  end
  rcall("XADD", eventStreamKey, "*", "event", "active", "jobId", jobId, "prev", "waiting")
  rcall("HMSET", jobKey, "processedOn", processedOn, unpack(optionalValues))
  rcall("HINCRBY", jobKey, "ats", 1)
  addBaseMarkerIfNeeded(markerKey, false)
  -- rate limit delay must be 0 in this case to prevent adding more delay
  -- when job that is moved to active needs to be processed
  return {rcall("HGETALL", jobKey), jobId, 0, 0} -- get job data
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                rcall("LPUSH", targetKey, jobId)
            else
                local score = getPriorityScore(priority, priorityCounterKey)
                rcall("ZADD", prioritizedKey, score, jobId)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
        addBaseMarkerIfNeeded(markerKey, isPaused)
    end
end
local target, isPausedOrMaxed = getTargetQueueList(KEYS[9], activeKey, waitKey, KEYS[8])
-- Check if there are delayed jobs that we can move to wait.
local markerKey = KEYS[11]
promoteDelayedJobs(delayedKey, markerKey, target, KEYS[3], eventStreamKey, ARGV[1],
                   ARGV[2], KEYS[10], isPausedOrMaxed)
local maxJobs = tonumber(opts['limiter'] and opts['limiter']['max'])
local expireTime = getRateLimitTTL(maxJobs, rateLimiterKey)
-- Check if we are rate limited first.
if expireTime > 0 then return {0, 0, expireTime, 0} end
-- paused or maxed queue
if isPausedOrMaxed then return {0, 0, 0, 0} end
-- no job ID, try non-blocking move from wait to active
local jobId = rcall("RPOPLPUSH", waitKey, activeKey)
-- Markers in waitlist DEPRECATED in v5: Will be completely removed in v6.
if jobId and string.sub(jobId, 1, 2) == "0:" then
    rcall("LREM", activeKey, 1, jobId)
    jobId = rcall("RPOPLPUSH", waitKey, activeKey)
end
if jobId then
    return prepareJobForProcessing(ARGV[1], rateLimiterKey, eventStreamKey, jobId, ARGV[2],
                                   maxJobs, markerKey, opts)
else
    jobId = moveJobFromPrioritizedToActive(KEYS[3], activeKey, KEYS[10])
    if jobId then
        return prepareJobForProcessing(ARGV[1], rateLimiterKey, eventStreamKey, jobId, ARGV[2],
                                       maxJobs, markerKey, opts)
    end
end
-- Return the timestamp for the next delayed job if any.
local nextTimestamp = getNextDelayedTimestamp(delayedKey)
if nextTimestamp ~= nil then return {0, 0, 0, nextTimestamp} end
return {0, 0, 0, 0}
`,keys:11};e.s(["moveToDelayed",()=>rp],85353);let rp={name:"moveToDelayed",content:`--[[
  Moves job from active to delayed set.
  Input:
    KEYS[1] marker key
    KEYS[2] active key
    KEYS[3] prioritized key
    KEYS[4] delayed key
    KEYS[5] job key
    KEYS[6] events stream
    KEYS[7] meta key
    KEYS[8] stalled key
    ARGV[1] key prefix
    ARGV[2] timestamp
    ARGV[3] the id of the job
    ARGV[4] queue token
    ARGV[5] delay value
    ARGV[6] skip attempt
    ARGV[7] optional job fields to update
  Output:
    0 - OK
   -1 - Missing job.
   -3 - Job not in active set.
  Events:
    - delayed key.
]]
local rcall = redis.call
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
--[[
  Function to update a bunch of fields in a job.
]]
local function updateJobFields(jobKey, msgpackedFields)
  if msgpackedFields and #msgpackedFields > 0 then
    local fieldsToUpdate = cmsgpack.unpack(msgpackedFields)
    if fieldsToUpdate then
      rcall("HMSET", jobKey, unpack(fieldsToUpdate))
    end
  end
end
local jobKey = KEYS[5]
local metaKey = KEYS[7]
local token = ARGV[4] 
if rcall("EXISTS", jobKey) == 1 then
    local errorCode = removeLock(jobKey, KEYS[8], token, ARGV[3])
    if errorCode < 0 then
        return errorCode
    end
    updateJobFields(jobKey, ARGV[7])
    local delayedKey = KEYS[4]
    local jobId = ARGV[3]
    local delay = tonumber(ARGV[5])
    local score, delayedTimestamp = getDelayedScore(delayedKey, ARGV[2], delay)
    local numRemovedElements = rcall("LREM", KEYS[2], -1, jobId)
    if numRemovedElements < 1 then return -3 end
    if ARGV[6] == "0" then
        rcall("HINCRBY", jobKey, "atm", 1)
    end
    rcall("HSET", jobKey, "delay", ARGV[5])
    local maxEvents = getOrSetMaxEvents(metaKey)
    rcall("ZADD", delayedKey, score, jobId)
    rcall("XADD", KEYS[6], "MAXLEN", "~", maxEvents, "*", "event", "delayed",
          "jobId", jobId, "delay", delayedTimestamp)
    -- Check if we need to push a marker job to wake up sleeping workers.
    local markerKey = KEYS[1]
    addDelayMarkerIfNeeded(markerKey, delayedKey)
    return 0
else
    return -1
end
`,keys:8};e.s(["moveToFinished",()=>rh],28646);let rh={name:"moveToFinished",content:`--[[
  Move job from active to a finished status (completed o failed)
  A job can only be moved to completed if it was active.
  The job must be locked before it can be moved to a finished status,
  and the lock must be released in this script.
    Input:
      KEYS[1] wait key
      KEYS[2] active key
      KEYS[3] prioritized key
      KEYS[4] event stream key
      KEYS[5] stalled key
      -- Rate limiting
      KEYS[6] rate limiter key
      KEYS[7] delayed key
      KEYS[8] paused key
      KEYS[9] meta key
      KEYS[10] pc priority counter
      KEYS[11] completed/failed key
      KEYS[12] jobId key
      KEYS[13] metrics key
      KEYS[14] marker key
      ARGV[1]  jobId
      ARGV[2]  timestamp
      ARGV[3]  msg property returnvalue / failedReason
      ARGV[4]  return value / failed reason
      ARGV[5]  target (completed/failed)
      ARGV[6]  fetch next?
      ARGV[7]  keys prefix
      ARGV[8]  opts
      ARGV[9]  job fields to update
      opts - token - lock token
      opts - keepJobs
      opts - lockDuration - lock duration in milliseconds
      opts - attempts max attempts
      opts - maxMetricsSize
      opts - fpof - fail parent on fail
      opts - cpof - continue parent on fail
      opts - idof - ignore dependency on fail
      opts - rdof - remove dependency on fail
      opts - name - worker name
    Output:
      0 OK
      -1 Missing key.
      -2 Missing lock.
      -3 Job not in active set
      -4 Job has pending children
      -6 Lock is not owned by this client
      -9 Job has failed children
    Events:
      'completed/failed'
]]
local rcall = redis.call
--- Includes
--[[
  Functions to collect metrics based on a current and previous count of jobs.
  Granualarity is fixed at 1 minute.
]]
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
local function collectMetrics(metaKey, dataPointsList, maxDataPoints,
                                 timestamp)
    -- Increment current count
    local count = rcall("HINCRBY", metaKey, "count", 1) - 1
    -- Compute how many data points we need to add to the list, N.
    local prevTS = rcall("HGET", metaKey, "prevTS")
    if not prevTS then
        -- If prevTS is nil, set it to the current timestamp
        rcall("HSET", metaKey, "prevTS", timestamp, "prevCount", 0)
        return
    end
    local N = math.min(math.floor(timestamp / 60000) - math.floor(prevTS / 60000), tonumber(maxDataPoints))
    if N > 0 then
        local delta = count - rcall("HGET", metaKey, "prevCount")
        -- If N > 1, add N-1 zeros to the list
        if N > 1 then
            local points = {}
            points[1] = delta
            for i = 2, N do
                points[i] = 0
            end
            for from, to in batches(#points, 7000) do
                rcall("LPUSH", dataPointsList, unpack(points, from, to))
            end
        else
            -- LPUSH delta to the list
            rcall("LPUSH", dataPointsList, delta)
        end
        -- LTRIM to keep list to its max size
        rcall("LTRIM", dataPointsList, 0, maxDataPoints - 1)
        -- update prev count with current count
        rcall("HSET", metaKey, "prevCount", count, "prevTS", timestamp)
    end
end
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Function to move job from prioritized state to active.
]]
local function moveJobFromPrioritizedToActive(priorityKey, activeKey, priorityCounterKey)
  local prioritizedJob = rcall("ZPOPMIN", priorityKey)
  if #prioritizedJob > 0 then
    rcall("LPUSH", activeKey, prioritizedJob[1])
    return prioritizedJob[1]
  else
    rcall("DEL", priorityCounterKey)
  end
end
--[[
  Function to recursively move from waitingChildren to failed.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
--[[
  Functions to remove jobs when removeOnFail option is provided.
]]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobKey, jobId)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      return rcall("DEL", deduplicationKey)
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobKey, jobId)
  end
  removeJobKeys(jobKey)
end
--[[
  Functions to remove jobs by max age.
]]
-- Includes
local function removeJobsByMaxAge(timestamp, maxAge, targetSet, prefix,
  shouldRemoveDebounceKey)
  local start = timestamp - maxAge * 1000
  local jobIds = rcall("ZREVRANGEBYSCORE", targetSet, start, "-inf")
  for i, jobId in ipairs(jobIds) do
    removeJob(jobId, false, prefix, false --[[remove debounce key]])
  end
  rcall("ZREMRANGEBYSCORE", targetSet, "-inf", start)
end
--[[
  Functions to remove jobs by max count.
]]
-- Includes
local function removeJobsByMaxCount(maxCount, targetSet, prefix)
  local start = maxCount
  local jobIds = rcall("ZREVRANGE", targetSet, start, -1)
  for i, jobId in ipairs(jobIds) do
    removeJob(jobId, false, prefix, false --[[remove debounce key]])
  end
  rcall("ZREMRANGEBYRANK", targetSet, 0, -(maxCount + 1))
end
local function removeJobsOnFail(queueKeyPrefix, failedKey, jobId, opts, timestamp)
  local removeOnFailType = type(opts["removeOnFail"])
  if removeOnFailType == "number" then
    removeJobsByMaxCount(opts["removeOnFail"],
                        failedKey, queueKeyPrefix)
  elseif removeOnFailType == "boolean" then
    if opts["removeOnFail"] then
      removeJob(jobId, false, queueKeyPrefix,
                false --[[remove debounce key]])
      rcall("ZREM", failedKey, jobId)
    end
  elseif removeOnFailType ~= "nil" then
    local maxAge = opts["removeOnFail"]["age"]
    local maxCount = opts["removeOnFail"]["count"]
    if maxAge ~= nil then
      removeJobsByMaxAge(timestamp, maxAge,
                        failedKey, queueKeyPrefix)
    end
    if maxCount ~= nil and maxCount > 0 then
      removeJobsByMaxCount(maxCount, failedKey,
                            queueKeyPrefix)
    end
  end 
end
local moveParentToFailedIfNeeded = function (parentQueueKey, parentKey, parentId, jobIdKey, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    local parentDelayedKey = parentQueueKey .. ":delayed"
    local parentPrioritizedKey = parentQueueKey .. ":prioritized"
    local parentWaitingChildrenOrDelayedKey
    local prevState
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then
      parentWaitingChildrenOrDelayedKey = parentWaitingChildrenKey
      prevState = "waiting-children"
    elseif rcall("ZSCORE", parentDelayedKey, parentId) then
      parentWaitingChildrenOrDelayedKey = parentDelayedKey
      prevState = "delayed"
      rcall("HSET", parentKey, "delay", 0)
    end
    if parentWaitingChildrenOrDelayedKey then
      rcall("ZREM", parentWaitingChildrenOrDelayedKey, parentId)
      local parentQueuePrefix = parentQueueKey .. ":"
      local parentFailedKey = parentQueueKey .. ":failed"
      local deferredFailure = "child " .. jobIdKey .. " failed"
      rcall("HSET", parentKey, "defa", deferredFailure)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    else
      if not rcall("ZSCORE", parentQueueKey .. ":failed", parentId) then
        local deferredFailure = "child " .. jobIdKey .. " failed"
        rcall("HSET", parentKey, "defa", deferredFailure)
      end
    end
  end
end
local moveChildFromDependenciesIfNeeded = function (rawParentData, childKey, failedReason, timestamp)
  if rawParentData then
    local parentData = cjson.decode(rawParentData)
    local parentKey = parentData['queueKey'] .. ':' .. parentData['id']
    local parentDependenciesChildrenKey = parentKey .. ":dependencies"
    if parentData['fpof'] then
      if rcall("SREM", parentDependenciesChildrenKey, childKey) == 1 then
        local parentUnsuccesssfulChildrenKey = parentKey .. ":unsuccessful"
        rcall("ZADD", parentUnsuccesssfulChildrenKey, timestamp, childKey)
        moveParentToFailedIfNeeded(
          parentData['queueKey'],
          parentKey,
          parentData['id'],
          childKey,
          timestamp
        )
      end
    elseif parentData['cpof'] then
      if rcall("SREM", parentDependenciesChildrenKey, childKey) == 1 then
        local parentFailedChildrenKey = parentKey .. ":failed"
        rcall("HSET", parentFailedChildrenKey, childKey, failedReason)
        moveParentToWaitIfNeeded(parentData['queueKey'], parentKey, parentData['id'], timestamp)
      end
    elseif parentData['idof'] or parentData['rdof'] then
      if rcall("SREM", parentDependenciesChildrenKey, childKey) == 1 then
        moveParentToWaitIfNoPendingDependencies(parentData['queueKey'], parentDependenciesChildrenKey,
          parentKey, parentData['id'], timestamp)
        if parentData['idof'] then
          local parentFailedChildrenKey = parentKey .. ":failed"
          rcall("HSET", parentFailedChildrenKey, childKey, failedReason)
        end
      end
    end
  end
end
--[[
  Function to move job from wait state to active.
  Input:
    opts - token - lock token
    opts - lockDuration
    opts - limiter
]]
-- Includes
local function prepareJobForProcessing(keyPrefix, rateLimiterKey, eventStreamKey,
    jobId, processedOn, maxJobs, markerKey, opts)
  local jobKey = keyPrefix .. jobId
  -- Check if we need to perform rate limiting.
  if maxJobs then
    local jobCounter = tonumber(rcall("INCR", rateLimiterKey))
    if jobCounter == 1 then
      local limiterDuration = opts['limiter'] and opts['limiter']['duration']
      local integerDuration = math.floor(math.abs(limiterDuration))
      rcall("PEXPIRE", rateLimiterKey, integerDuration)
    end
  end
  local lockKey = jobKey .. ':lock'
  -- get a lock
  if opts['token'] ~= "0" then
    rcall("SET", lockKey, opts['token'], "PX", opts['lockDuration'])
  end
  local optionalValues = {}
  if opts['name'] then
    -- Set "processedBy" field to the worker name
    table.insert(optionalValues, "pb")
    table.insert(optionalValues, opts['name'])
  end
  rcall("XADD", eventStreamKey, "*", "event", "active", "jobId", jobId, "prev", "waiting")
  rcall("HMSET", jobKey, "processedOn", processedOn, unpack(optionalValues))
  rcall("HINCRBY", jobKey, "ats", 1)
  addBaseMarkerIfNeeded(markerKey, false)
  -- rate limit delay must be 0 in this case to prevent adding more delay
  -- when job that is moved to active needs to be processed
  return {rcall("HGETALL", jobKey), jobId, 0, 0} -- get job data
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                rcall("LPUSH", targetKey, jobId)
            else
                local score = getPriorityScore(priority, priorityCounterKey)
                rcall("ZADD", prioritizedKey, score, jobId)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
        addBaseMarkerIfNeeded(markerKey, isPaused)
    end
end
--[[
  Function to remove deduplication key if needed
  when a job is moved to completed or failed states.
]]
local function removeDeduplicationKeyIfNeededOnFinalization(prefixKey,
  deduplicationId, jobId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local pttl = rcall("PTTL", deduplicationKey)
    if pttl == 0 then
      return rcall("DEL", deduplicationKey)
    end
    if pttl == -1 then
      local currentJobId = rcall('GET', deduplicationKey)
      if currentJobId and currentJobId == jobId then
        return rcall("DEL", deduplicationKey)
      end
    end
  end
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
--[[
  Function to trim events, default 10000.
]]
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
local function trimEvents(metaKey, eventStreamKey)
  local maxEvents = getOrSetMaxEvents(metaKey)
  if maxEvents then
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", maxEvents)
  else
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", 10000)
  end
end
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
--[[
  Function to update a bunch of fields in a job.
]]
local function updateJobFields(jobKey, msgpackedFields)
  if msgpackedFields and #msgpackedFields > 0 then
    local fieldsToUpdate = cmsgpack.unpack(msgpackedFields)
    if fieldsToUpdate then
      rcall("HMSET", jobKey, unpack(fieldsToUpdate))
    end
  end
end
local jobIdKey = KEYS[12]
if rcall("EXISTS", jobIdKey) == 1 then -- Make sure job exists
    -- Make sure it does not have pending dependencies
    -- It must happen before removing lock
    if ARGV[5] == "completed" then
        if rcall("SCARD", jobIdKey .. ":dependencies") ~= 0 then
            return -4
        end
        if rcall("ZCARD", jobIdKey .. ":unsuccessful") ~= 0 then
            return -9
        end
    end
    local opts = cmsgpack.unpack(ARGV[8])
    local token = opts['token']
    local errorCode = removeLock(jobIdKey, KEYS[5], token, ARGV[1])
    if errorCode < 0 then
        return errorCode
    end
    updateJobFields(jobIdKey, ARGV[9]);
    local attempts = opts['attempts']
    local maxMetricsSize = opts['maxMetricsSize']
    local maxCount = opts['keepJobs']['count']
    local maxAge = opts['keepJobs']['age']
    local jobAttributes = rcall("HMGET", jobIdKey, "parentKey", "parent", "deid")
    local parentKey = jobAttributes[1] or ""
    local parentId = ""
    local parentQueueKey = ""
    if jobAttributes[2] then -- TODO: need to revisit this logic if it's still needed
        local jsonDecodedParent = cjson.decode(jobAttributes[2])
        parentId = jsonDecodedParent['id']
        parentQueueKey = jsonDecodedParent['queueKey']
    end
    local jobId = ARGV[1]
    local timestamp = ARGV[2]
    -- Remove from active list (if not active we shall return error)
    local numRemovedElements = rcall("LREM", KEYS[2], -1, jobId)
    if (numRemovedElements < 1) then
        return -3
    end
    local eventStreamKey = KEYS[4]
    local metaKey = KEYS[9]
    -- Trim events before emiting them to avoid trimming events emitted in this script
    trimEvents(metaKey, eventStreamKey)
    local prefix = ARGV[7]
    removeDeduplicationKeyIfNeededOnFinalization(prefix, jobAttributes[3], jobId)
    -- If job has a parent we need to
    -- 1) remove this job id from parents dependencies
    -- 2) move the job Id to parent "processed" set
    -- 3) push the results into parent "results" list
    -- 4) if parent's dependencies is empty, then move parent to "wait/paused". Note it may be a different queue!.
    if parentId == "" and parentKey ~= "" then
        parentId = getJobIdFromKey(parentKey)
        parentQueueKey = getJobKeyPrefix(parentKey, ":" .. parentId)
    end
    if parentId ~= "" then
        if ARGV[5] == "completed" then
            local dependenciesSet = parentKey .. ":dependencies"
            if rcall("SREM", dependenciesSet, jobIdKey) == 1 then
                updateParentDepsIfNeeded(parentKey, parentQueueKey, dependenciesSet, parentId, jobIdKey, ARGV[4],
                    timestamp)
            end
        else
            moveChildFromDependenciesIfNeeded(jobAttributes[2], jobIdKey, ARGV[4], timestamp)
        end
    end
    local attemptsMade = rcall("HINCRBY", jobIdKey, "atm", 1)
    -- Remove job?
    if maxCount ~= 0 then
        local targetSet = KEYS[11]
        -- Add to complete/failed set
        rcall("ZADD", targetSet, timestamp, jobId)
        rcall("HSET", jobIdKey, ARGV[3], ARGV[4], "finishedOn", timestamp)
        -- "returnvalue" / "failedReason" and "finishedOn"
        if ARGV[5] == "failed" then
            rcall("HDEL", jobIdKey, "defa")
        end
        -- Remove old jobs?
        if maxAge ~= nil then
            removeJobsByMaxAge(timestamp, maxAge, targetSet, prefix)
        end
        if maxCount ~= nil and maxCount > 0 then
            removeJobsByMaxCount(maxCount, targetSet, prefix)
        end
    else
        removeJobKeys(jobIdKey)
        if parentKey ~= "" then
            -- TODO: when a child is removed when finished, result or failure in parent
            -- must not be deleted, those value references should be deleted when the parent
            -- is deleted
            removeParentDependencyKey(jobIdKey, false, parentKey, jobAttributes[3])
        end
    end
    rcall("XADD", eventStreamKey, "*", "event", ARGV[5], "jobId", jobId, ARGV[3], ARGV[4], "prev", "active")
    if ARGV[5] == "failed" then
        if tonumber(attemptsMade) >= tonumber(attempts) then
            rcall("XADD", eventStreamKey, "*", "event", "retries-exhausted", "jobId", jobId, "attemptsMade",
                attemptsMade)
        end
    end
    -- Collect metrics
    if maxMetricsSize ~= "" then
        collectMetrics(KEYS[13], KEYS[13] .. ':data', maxMetricsSize, timestamp)
    end
    -- Try to get next job to avoid an extra roundtrip if the queue is not closing,
    -- and not rate limited.
    if (ARGV[6] == "1") then
        local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[2], KEYS[1], KEYS[8])
        local markerKey = KEYS[14]
        -- Check if there are delayed jobs that can be promoted
        promoteDelayedJobs(KEYS[7], markerKey, target, KEYS[3], eventStreamKey, prefix, timestamp, KEYS[10],
            isPausedOrMaxed)
        local maxJobs = tonumber(opts['limiter'] and opts['limiter']['max'])
        -- Check if we are rate limited first.
        local expireTime = getRateLimitTTL(maxJobs, KEYS[6])
        if expireTime > 0 then
            return {0, 0, expireTime, 0}
        end
        -- paused or maxed queue
        if isPausedOrMaxed then
            return {0, 0, 0, 0}
        end
        jobId = rcall("RPOPLPUSH", KEYS[1], KEYS[2])
        if jobId then
            -- Markers in waitlist DEPRECATED in v5: Remove in v6.
            if string.sub(jobId, 1, 2) == "0:" then
                rcall("LREM", KEYS[2], 1, jobId)
                -- If jobId is special ID 0:delay (delay greater than 0), then there is no job to process
                -- but if ID is 0:0, then there is at least 1 prioritized job to process
                if jobId == "0:0" then
                    jobId = moveJobFromPrioritizedToActive(KEYS[3], KEYS[2], KEYS[10])
                    return prepareJobForProcessing(prefix, KEYS[6], eventStreamKey, jobId, timestamp, maxJobs,
                        markerKey, opts)
                end
            else
                return prepareJobForProcessing(prefix, KEYS[6], eventStreamKey, jobId, timestamp, maxJobs, markerKey,
                    opts)
            end
        else
            jobId = moveJobFromPrioritizedToActive(KEYS[3], KEYS[2], KEYS[10])
            if jobId then
                return prepareJobForProcessing(prefix, KEYS[6], eventStreamKey, jobId, timestamp, maxJobs, markerKey,
                    opts)
            end
        end
        -- Return the timestamp for the next delayed job if any.
        local nextTimestamp = getNextDelayedTimestamp(KEYS[7])
        if nextTimestamp ~= nil then
            -- The result is guaranteed to be positive, since the
            -- ZRANGEBYSCORE command would have return a job otherwise.
            return {0, 0, 0, nextTimestamp}
        end
    end
    local waitLen = rcall("LLEN", KEYS[1])
    if waitLen == 0 then
        local activeLen = rcall("LLEN", KEYS[2])
        if activeLen == 0 then
            local prioritizedLen = rcall("ZCARD", KEYS[3])
            if prioritizedLen == 0 then
                rcall("XADD", eventStreamKey, "*", "event", "drained")
            end
        end
    end
    return 0
else
    return -1
end
`,keys:14};e.s(["moveToWaitingChildren",()=>ry],82792);let ry={name:"moveToWaitingChildren",content:`--[[
  Moves job from active to waiting children set.
  Input:
    KEYS[1] active key
    KEYS[2] wait-children key
    KEYS[3] job key
    KEYS[4] job dependencies key
    KEYS[5] job unsuccessful key
    KEYS[6] stalled key
    KEYS[7] events key
    ARGV[1] token
    ARGV[2] child key
    ARGV[3] timestamp
    ARGV[4] jobId
    ARGV[5] prefix
  Output:
    0 - OK
    1 - There are not pending dependencies.
   -1 - Missing job.
   -2 - Missing lock
   -3 - Job not in active set
   -9 - Job has failed children
]]
local rcall = redis.call
local activeKey = KEYS[1]
local waitingChildrenKey = KEYS[2]
local jobKey = KEYS[3]
local jobDependenciesKey = KEYS[4]
local jobUnsuccessfulKey = KEYS[5]
local stalledKey = KEYS[6]
local eventStreamKey = KEYS[7]
local token = ARGV[1]
local timestamp = ARGV[3]
local jobId = ARGV[4]
--- Includes
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
local function removeJobFromActive(activeKey, stalledKey, jobKey, jobId,
    token)
  local errorCode = removeLock(jobKey, stalledKey, token, jobId)
  if errorCode < 0 then
    return errorCode
  end
  local numRemovedElements = rcall("LREM", activeKey, -1, jobId)
  if numRemovedElements < 1 then
    return -3
  end
  return 0
end
local function moveToWaitingChildren(activeKey, waitingChildrenKey, stalledKey, eventStreamKey,
    jobKey, jobId, timestamp, token)
  local errorCode = removeJobFromActive(activeKey, stalledKey, jobKey, jobId, token)
  if errorCode < 0 then
    return errorCode
  end
  local score = tonumber(timestamp)
  rcall("ZADD", waitingChildrenKey, score, jobId)
  rcall("XADD", eventStreamKey, "*", "event", "waiting-children", "jobId", jobId, 'prev', 'active')
  return 0
end
if rcall("EXISTS", jobKey) == 1 then
  if rcall("ZCARD", jobUnsuccessfulKey) ~= 0 then
    return -9
  else
    if ARGV[2] ~= "" then
      if rcall("SISMEMBER", jobDependenciesKey, ARGV[2]) ~= 0 then
        return moveToWaitingChildren(activeKey, waitingChildrenKey, stalledKey, eventStreamKey,
          jobKey, jobId, timestamp, token)
      end
      return 1
    else
      if rcall("SCARD", jobDependenciesKey) ~= 0 then 
        return moveToWaitingChildren(activeKey, waitingChildrenKey, stalledKey, eventStreamKey,
          jobKey, jobId, timestamp, token)
      end
      return 1
    end    
  end
end
return -1
`,keys:7};e.s(["obliterate",()=>rm],35933);let rm={name:"obliterate",content:`--[[
  Completely obliterates a queue and all of its contents
  This command completely destroys a queue including all of its jobs, current or past 
  leaving no trace of its existence. Since this script needs to iterate to find all the job
  keys, consider that this call may be slow for very large queues.
  The queue needs to be "paused" or it will return an error
  If the queue has currently active jobs then the script by default will return error,
  however this behaviour can be overrided using the 'force' option.
  Input:
    KEYS[1] meta
    KEYS[2] base
    ARGV[1] count
    ARGV[2] force
]]
local maxCount = tonumber(ARGV[1])
local baseKey = KEYS[2]
local rcall = redis.call
-- Includes
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobKey, jobId)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      return rcall("DEL", deduplicationKey)
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobKey, jobId)
  end
  removeJobKeys(jobKey)
end
local function removeJobs(keys, hard, baseKey, max)
  for i, key in ipairs(keys) do
    removeJob(key, hard, baseKey, true --[[remove debounce key]])
  end
  return max - #keys
end
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to filter out jobs to ignore from a table.
]]
local function filterOutJobsToIgnore(jobs, jobsToIgnore)
  local filteredJobs = {}
  for i = 1, #jobs do
    if not jobsToIgnore[jobs[i]] then
      table.insert(filteredJobs, jobs[i])
    end
  end
  return filteredJobs
end
local function getListItems(keyName, max)
  return rcall('LRANGE', keyName, 0, max - 1)
end
local function removeListJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getListItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  rcall("LTRIM", keyName, #jobs, -1)
  return count
end
-- Includes
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to get ZSet items.
]]
local function getZSetItems(keyName, max)
  return rcall('ZRANGE', keyName, 0, max - 1)
end
local function removeZSetJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getZSetItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  if(#jobs > 0) then
    for from, to in batches(#jobs, 7000) do
      rcall("ZREM", keyName, unpack(jobs, from, to))
    end
  end
  return count
end
local function removeLockKeys(keys)
  for i, key in ipairs(keys) do
    rcall("DEL", baseKey .. key .. ':lock')
  end
end
-- 1) Check if paused, if not return with error.
if rcall("HEXISTS", KEYS[1], "paused") ~= 1 then
  return -1 -- Error, NotPaused
end
-- 2) Check if there are active jobs, if there are and not "force" return error.
local activeKey = baseKey .. 'active'
local activeJobs = getListItems(activeKey, maxCount)
if (#activeJobs > 0) then
  if(ARGV[2] == "") then 
    return -2 -- Error, ExistActiveJobs
  end
end
removeLockKeys(activeJobs)
maxCount = removeJobs(activeJobs, true, baseKey, maxCount)
rcall("LTRIM", activeKey, #activeJobs, -1)
if(maxCount <= 0) then
  return 1
end
local delayedKey = baseKey .. 'delayed'
maxCount = removeZSetJobs(delayedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local repeatKey = baseKey .. 'repeat'
local repeatJobsIds = getZSetItems(repeatKey, maxCount)
for i, key in ipairs(repeatJobsIds) do
  local jobKey = repeatKey .. ":" .. key
  rcall("DEL", jobKey)
end
if(#repeatJobsIds > 0) then
  for from, to in batches(#repeatJobsIds, 7000) do
    rcall("ZREM", repeatKey, unpack(repeatJobsIds, from, to))
  end
end
maxCount = maxCount - #repeatJobsIds
if(maxCount <= 0) then
  return 1
end
local completedKey = baseKey .. 'completed'
maxCount = removeZSetJobs(completedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local waitKey = baseKey .. 'paused'
maxCount = removeListJobs(waitKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local prioritizedKey = baseKey .. 'prioritized'
maxCount = removeZSetJobs(prioritizedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local failedKey = baseKey .. 'failed'
maxCount = removeZSetJobs(failedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
if(maxCount > 0) then
  rcall("DEL",
    baseKey .. 'events',
    baseKey .. 'delay', 
    baseKey .. 'stalled-check',
    baseKey .. 'stalled',
    baseKey .. 'id',
    baseKey .. 'pc',
    baseKey .. 'meta',
    baseKey .. 'metrics:completed',
    baseKey .. 'metrics:completed:data',
    baseKey .. 'metrics:failed',
    baseKey .. 'metrics:failed:data')
  return 0
else
  return 1
end
`,keys:2};e.s(["paginate",()=>rf],50518);let rf={name:"paginate",content:`--[[
    Paginate a set or hash
    Input:
      KEYS[1] key pointing to the set or hash to be paginated.
      ARGV[1]  page start offset
      ARGV[2]  page end offset (-1 for all the elements)
      ARGV[3]  cursor
      ARGV[4]  offset
      ARGV[5]  max iterations
      ARGV[6]  fetch jobs?
    Output:
      [cursor, offset, items, numItems]
]]
local rcall = redis.call
-- Includes
--[[
  Function to achieve pagination for a set or hash.
  This function simulates pagination in the most efficient way possible
  for a set using sscan or hscan.
  The main limitation is that sets are not order preserving, so the
  pagination is not stable. This means that if the set is modified
  between pages, the same element may appear in different pages.
]] -- Maximum number of elements to be returned by sscan per iteration.
local maxCount = 100
-- Finds the cursor, and returns the first elements available for the requested page.
local function findPage(key, command, pageStart, pageSize, cursor, offset,
                        maxIterations, fetchJobs)
    local items = {}
    local jobs = {}
    local iterations = 0
    repeat
        -- Iterate over the set using sscan/hscan.
        local result = rcall(command, key, cursor, "COUNT", maxCount)
        cursor = result[1]
        local members = result[2]
        local step = 1
        if command == "HSCAN" then
            step = 2
        end
        if #members == 0 then
            -- If the result is empty, we can return the result.
            return cursor, offset, items, jobs
        end
        local chunkStart = offset
        local chunkEnd = offset + #members / step
        local pageEnd = pageStart + pageSize
        if chunkEnd < pageStart then
            -- If the chunk is before the page, we can skip it.
            offset = chunkEnd
        elseif chunkStart > pageEnd then
            -- If the chunk is after the page, we can return the result.
            return cursor, offset, items, jobs
        else
            -- If the chunk is overlapping the page, we need to add the elements to the result.
            for i = 1, #members, step do
                if offset >= pageEnd then
                    return cursor, offset, items, jobs
                end
                if offset >= pageStart then
                    local index = #items + 1
                    if fetchJobs ~= nil then
                        jobs[#jobs+1] = rcall("HGETALL", members[i])
                    end
                    if step == 2 then
                        items[index] = {members[i], members[i + 1]}
                    else
                        items[index] = members[i]
                    end
                end
                offset = offset + 1
            end
        end
        iterations = iterations + 1
    until cursor == "0" or iterations >= maxIterations
    return cursor, offset, items, jobs
end
local key = KEYS[1]
local scanCommand = "SSCAN"
local countCommand = "SCARD"
local type = rcall("TYPE", key)["ok"]
if type == "none" then
    return {0, 0, {}, 0}
elseif type == "hash" then
    scanCommand = "HSCAN"
    countCommand = "HLEN"
elseif type ~= "set" then
    return
        redis.error_reply("Pagination is only supported for sets and hashes.")
end
local numItems = rcall(countCommand, key)
local startOffset = tonumber(ARGV[1])
local endOffset = tonumber(ARGV[2])
if endOffset == -1 then 
  endOffset = numItems
end
local pageSize = (endOffset - startOffset) + 1
local cursor, offset, items, jobs = findPage(key, scanCommand, startOffset,
                                       pageSize, ARGV[3], tonumber(ARGV[4]),
                                       tonumber(ARGV[5]), ARGV[6])
return {cursor, offset, items, numItems, jobs}
`,keys:1};e.s(["pause",()=>rb],77380);let rb={name:"pause",content:`--[[
  Pauses or resumes a queue globably.
  Input:
    KEYS[1] 'wait' or 'paused''
    KEYS[2] 'paused' or 'wait'
    KEYS[3] 'meta'
    KEYS[4] 'prioritized'
    KEYS[5] events stream key
    KEYS[6] 'delayed'
    KEYS|7] 'marker'
    ARGV[1] 'paused' or 'resumed'
  Event:
    publish paused or resumed event.
]]
local rcall = redis.call
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
local markerKey = KEYS[7]
local hasJobs = rcall("EXISTS", KEYS[1]) == 1
--TODO: check this logic to be reused when changing a delay
if hasJobs then rcall("RENAME", KEYS[1], KEYS[2]) end
if ARGV[1] == "paused" then
    rcall("HSET", KEYS[3], "paused", 1)
    rcall("DEL", markerKey)
else
    rcall("HDEL", KEYS[3], "paused")
    if hasJobs or rcall("ZCARD", KEYS[4]) > 0 then
        -- Add marker if there are waiting or priority jobs
        rcall("ZADD", markerKey, 0, "0")
    else
        addDelayMarkerIfNeeded(markerKey, KEYS[6])
    end
end
rcall("XADD", KEYS[5], "*", "event", ARGV[1]);
`,keys:7};e.s(["promote",()=>rg],30498);let rg={name:"promote",content:`--[[
  Promotes a job that is currently "delayed" to the "waiting" state
    Input:
      KEYS[1] 'delayed'
      KEYS[2] 'wait'
      KEYS[3] 'paused'
      KEYS[4] 'meta'
      KEYS[5] 'prioritized'
      KEYS[6] 'active'
      KEYS[7] 'pc' priority counter
      KEYS[8] 'event stream'
      KEYS[9] 'marker'
      ARGV[1]  queue.toKey('')
      ARGV[2]  jobId
    Output:
       0 - OK
      -3 - Job not in delayed zset.
    Events:
      'waiting'
]]
local rcall = redis.call
local jobId = ARGV[2]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
if rcall("ZREM", KEYS[1], jobId) == 1 then
    local jobKey = ARGV[1] .. jobId
    local priority = tonumber(rcall("HGET", jobKey, "priority")) or 0
    local metaKey = KEYS[4]
    local markerKey = KEYS[9]
    -- Remove delayed "marker" from the wait list if there is any.
    -- Since we are adding a job we do not need the marker anymore.
    -- Markers in waitlist DEPRECATED in v5: Remove in v6.
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[6], KEYS[2], KEYS[3])
    local marker = rcall("LINDEX", target, 0)
    if marker and string.sub(marker, 1, 2) == "0:" then rcall("LPOP", target) end
    if priority == 0 then
        -- LIFO or FIFO
        addJobInTargetList(target, markerKey, "LPUSH", isPausedOrMaxed, jobId)
    else
        addJobWithPriority(markerKey, KEYS[5], priority, jobId, KEYS[7], isPausedOrMaxed)
    end
    rcall("XADD", KEYS[8], "*", "event", "waiting", "jobId", jobId, "prev",
          "delayed");
    rcall("HSET", jobKey, "delay", 0)
    return 0
else
    return -3
end
`,keys:9};e.s(["releaseLock",()=>rK],47776);let rK={name:"releaseLock",content:`--[[
  Release lock
    Input:
      KEYS[1] 'lock',
      ARGV[1]  token
      ARGV[2]  lock duration in milliseconds
    Output:
      "OK" if lock extented succesfully.
]]
local rcall = redis.call
if rcall("GET", KEYS[1]) == ARGV[1] then
  return rcall("DEL", KEYS[1])
else
  return 0
end
`,keys:1};e.s(["removeChildDependency",()=>rv],90342);let rv={name:"removeChildDependency",content:`--[[
  Break parent-child dependency by removing
  child reference from parent
  Input:
    KEYS[1] 'key' prefix,
    ARGV[1] job key
    ARGV[2] parent key
    Output:
       0  - OK
       1  - There is not relationship.
      -1  - Missing job key
      -5  - Missing parent key
]]
local rcall = redis.call
local jobKey = ARGV[1]
local parentKey = ARGV[2]
-- Includes
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
if rcall("EXISTS", jobKey) ~= 1 then return -1 end
if rcall("EXISTS", parentKey) ~= 1 then return -5 end
if removeParentDependencyKey(jobKey, false, parentKey, KEYS[1], nil) then
  rcall("HDEL", jobKey, "parentKey", "parent")
  return 0
else
  return 1
end`,keys:1};e.s(["removeJob",()=>rS],25665);let rS={name:"removeJob",content:`--[[
    Remove a job from all the statuses it may be in as well as all its data.
    In order to be able to remove a job, it cannot be active.
    Input:
      KEYS[1] jobKey
      KEYS[2] repeat key
      ARGV[1] jobId
      ARGV[2] remove children
      ARGV[3] queue prefix
    Events:
      'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Function to check if the job belongs to a job scheduler and
  current delayed job matches with jobId
]]
local function isJobSchedulerJob(jobId, jobKey, jobSchedulersKey)
  local repeatJobKey = rcall("HGET", jobKey, "rjk")
  if repeatJobKey  then
    local prevMillis = rcall("ZSCORE", jobSchedulersKey, repeatJobKey)
    if prevMillis then
      local currentDelayedJobId = "repeat:" .. repeatJobKey .. ":" .. prevMillis
      return jobId == currentDelayedJobId
    end
  end
  return false
end
--[[
  Function to recursively check if there are no locks
  on the jobs to be removed.
  returns:
    boolean
]]
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
local function isLocked( prefix, jobId, removeChildren)
  local jobKey = prefix .. jobId;
  -- Check if this job is locked
  local lockKey = jobKey .. ':lock'
  local lock = rcall("GET", lockKey)
  if not lock then
    if removeChildren == "1" then
      local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
      if (#dependencies > 0) then
        for i, childJobKey in ipairs(dependencies) do
          -- We need to get the jobId for this job.
          local childJobId = getJobIdFromKey(childJobKey)
          local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
          local result = isLocked( childJobPrefix, childJobId, removeChildren )
          if result then
            return true
          end
        end
      end
    end
    return false
  end
  return true
end
--[[
    Remove a job from all the statuses it may be in as well as all its data,
    including its children. Active children can be ignored.
    Events:
      'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobKey, jobId)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      return rcall("DEL", deduplicationKey)
    end
  end
end
--[[
  Function to remove from any state.
  returns:
    prev state
]]
local function removeJobFromAnyState( prefix, jobId)
  -- We start with the ZSCORE checks, since they have O(1) complexity
  if rcall("ZSCORE", prefix .. "completed", jobId) then
    rcall("ZREM", prefix .. "completed", jobId)
    return "completed"
  elseif rcall("ZSCORE", prefix .. "waiting-children", jobId) then
    rcall("ZREM", prefix .. "waiting-children", jobId)
    return "waiting-children"
  elseif rcall("ZSCORE", prefix .. "delayed", jobId) then
    rcall("ZREM", prefix .. "delayed", jobId)
    return "delayed"
  elseif rcall("ZSCORE", prefix .. "failed", jobId) then
    rcall("ZREM", prefix .. "failed", jobId)
    return "failed"
  elseif rcall("ZSCORE", prefix .. "prioritized", jobId) then
    rcall("ZREM", prefix .. "prioritized", jobId)
    return "prioritized"
  -- We remove only 1 element from the list, since we assume they are not added multiple times
  elseif rcall("LREM", prefix .. "wait", 1, jobId) == 1 then
    return "wait"
  elseif rcall("LREM", prefix .. "paused", 1, jobId) == 1 then
    return "paused"
  elseif rcall("LREM", prefix .. "active", 1, jobId) == 1 then
    return "active"
  end
  return "unknown"
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local removeJobChildren
local removeJobWithChildren
removeJobChildren = function(prefix, jobKey, options)
    -- Check if this job has children
    -- If so, we are going to try to remove the children recursively in a depth-first way
    -- because if some job is locked, we must exit with an error.
    if not options.ignoreProcessed then
        local processed = rcall("HGETALL", jobKey .. ":processed")
        if #processed > 0 then
            for i = 1, #processed, 2 do
                local childJobId = getJobIdFromKey(processed[i])
                local childJobPrefix = getJobKeyPrefix(processed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local failed = rcall("HGETALL", jobKey .. ":failed")
        if #failed > 0 then
            for i = 1, #failed, 2 do
                local childJobId = getJobIdFromKey(failed[i])
                local childJobPrefix = getJobKeyPrefix(failed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local unsuccessful = rcall("ZRANGE", jobKey .. ":unsuccessful", 0, -1)
        if #unsuccessful > 0 then
            for i = 1, #unsuccessful, 1 do
                local childJobId = getJobIdFromKey(unsuccessful[i])
                local childJobPrefix = getJobKeyPrefix(unsuccessful[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
    end
    local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
    if #dependencies > 0 then
        for i, childJobKey in ipairs(dependencies) do
            local childJobId = getJobIdFromKey(childJobKey)
            local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
            removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
        end
    end
end
removeJobWithChildren = function(prefix, jobId, parentKey, options)
    local jobKey = prefix .. jobId
    if options.ignoreLocked then
        if isLocked(prefix, jobId) then
            return
        end
    end
    -- Check if job is in the failed zset
    local failedSet = prefix .. "failed"
    if not (options.ignoreProcessed and rcall("ZSCORE", failedSet, jobId)) then
        removeParentDependencyKey(jobKey, false, parentKey, nil)
        if options.removeChildren then
            removeJobChildren(prefix, jobKey, options)
        end
        local prev = removeJobFromAnyState(prefix, jobId)
        removeDeduplicationKeyIfNeededOnRemoval(prefix, jobKey, jobId)
        if removeJobKeys(jobKey) > 0 then
            local metaKey = prefix .. "meta"
            local maxEvents = getOrSetMaxEvents(metaKey)
            rcall("XADD", prefix .. "events", "MAXLEN", "~", maxEvents, "*", "event", "removed",
                "jobId", jobId, "prev", prev)
        end
    end
end
local jobId = ARGV[1]
local shouldRemoveChildren = ARGV[2]
local prefix = ARGV[3]
local jobKey = KEYS[1]
local repeatKey = KEYS[2]
if isJobSchedulerJob(jobId, jobKey, repeatKey) then
    return -8
end
if not isLocked(prefix, jobId, shouldRemoveChildren) then
    local options = {
        removeChildren = shouldRemoveChildren == "1",
        ignoreProcessed = false,
        ignoreLocked = false
    }
    removeJobWithChildren(prefix, jobId, nil, options)
    return 1
end
return 0
`,keys:2};e.s(["removeJobScheduler",()=>rE],73024);let rE={name:"removeJobScheduler",content:`--[[
  Removes a job scheduler and its next scheduled job.
  Input:
    KEYS[1] job schedulers key
    KEYS[2] delayed jobs key
    KEYS[3] events key
    ARGV[1] job scheduler id
    ARGV[2] prefix key
  Output:
    0 - OK
    1 - Missing repeat job
  Events:
    'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local jobSchedulerId = ARGV[1]
local prefix = ARGV[2]
local millis = rcall("ZSCORE", KEYS[1], jobSchedulerId)
if millis then
  -- Delete next programmed job.
  local delayedJobId = "repeat:" .. jobSchedulerId .. ":" .. millis
  if(rcall("ZREM", KEYS[2], delayedJobId) == 1) then
    removeJobKeys(prefix .. delayedJobId)
    rcall("XADD", KEYS[3], "*", "event", "removed", "jobId", delayedJobId, "prev", "delayed")
  end
end
if(rcall("ZREM", KEYS[1], jobSchedulerId) == 1) then
  rcall("DEL", KEYS[1] .. ":" .. jobSchedulerId)
  return 0
end
return 1
`,keys:3};e.s(["removeRepeatable",()=>rk],66357);let rk={name:"removeRepeatable",content:`--[[
  Removes a repeatable job
  Input:
    KEYS[1] repeat jobs key
    KEYS[2] delayed jobs key
    KEYS[3] events key
    ARGV[1] old repeat job id
    ARGV[2] options concat
    ARGV[3] repeat job key
    ARGV[4] prefix key
  Output:
    0 - OK
    1 - Missing repeat job
  Events:
    'removed'
]]
local rcall = redis.call
local millis = rcall("ZSCORE", KEYS[1], ARGV[2])
-- Includes
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
-- legacy removal TODO: remove in next breaking change
if millis then
  -- Delete next programmed job.
  local repeatJobId = ARGV[1] .. millis
  if(rcall("ZREM", KEYS[2], repeatJobId) == 1) then
    removeJobKeys(ARGV[4] .. repeatJobId)
    rcall("XADD", KEYS[3], "*", "event", "removed", "jobId", repeatJobId, "prev", "delayed");
  end
end
if(rcall("ZREM", KEYS[1], ARGV[2]) == 1) then
  return 0
end
-- new removal
millis = rcall("ZSCORE", KEYS[1], ARGV[3])
if millis then
  -- Delete next programmed job.
  local repeatJobId = "repeat:" .. ARGV[3] .. ":" .. millis
  if(rcall("ZREM", KEYS[2], repeatJobId) == 1) then
    removeJobKeys(ARGV[4] .. repeatJobId)
    rcall("XADD", KEYS[3], "*", "event", "removed", "jobId", repeatJobId, "prev", "delayed")
  end
end
if(rcall("ZREM", KEYS[1], ARGV[3]) == 1) then
  rcall("DEL", KEYS[1] .. ":" .. ARGV[3])
  return 0
end
return 1
`,keys:3};e.s(["removeUnprocessedChildren",()=>rI],72997);let rI={name:"removeUnprocessedChildren",content:`--[[
    Remove a job from all the statuses it may be in as well as all its data.
    In order to be able to remove a job, it cannot be active.
    Input:
      KEYS[1] jobKey
      KEYS[2] meta key
      ARGV[1] prefix
      ARGV[2] jobId
    Events:
      'removed' for every children removed
]]
-- Includes
--[[
    Remove a job from all the statuses it may be in as well as all its data,
    including its children. Active children can be ignored.
    Events:
      'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check if the job belongs to a job scheduler and
  current delayed job matches with jobId
]]
local function isJobSchedulerJob(jobId, jobKey, jobSchedulersKey)
  local repeatJobKey = rcall("HGET", jobKey, "rjk")
  if repeatJobKey  then
    local prevMillis = rcall("ZSCORE", jobSchedulersKey, repeatJobKey)
    if prevMillis then
      local currentDelayedJobId = "repeat:" .. repeatJobKey .. ":" .. prevMillis
      return jobId == currentDelayedJobId
    end
  end
  return false
end
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobKey, jobId)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      return rcall("DEL", deduplicationKey)
    end
  end
end
--[[
  Function to remove from any state.
  returns:
    prev state
]]
local function removeJobFromAnyState( prefix, jobId)
  -- We start with the ZSCORE checks, since they have O(1) complexity
  if rcall("ZSCORE", prefix .. "completed", jobId) then
    rcall("ZREM", prefix .. "completed", jobId)
    return "completed"
  elseif rcall("ZSCORE", prefix .. "waiting-children", jobId) then
    rcall("ZREM", prefix .. "waiting-children", jobId)
    return "waiting-children"
  elseif rcall("ZSCORE", prefix .. "delayed", jobId) then
    rcall("ZREM", prefix .. "delayed", jobId)
    return "delayed"
  elseif rcall("ZSCORE", prefix .. "failed", jobId) then
    rcall("ZREM", prefix .. "failed", jobId)
    return "failed"
  elseif rcall("ZSCORE", prefix .. "prioritized", jobId) then
    rcall("ZREM", prefix .. "prioritized", jobId)
    return "prioritized"
  -- We remove only 1 element from the list, since we assume they are not added multiple times
  elseif rcall("LREM", prefix .. "wait", 1, jobId) == 1 then
    return "wait"
  elseif rcall("LREM", prefix .. "paused", 1, jobId) == 1 then
    return "paused"
  elseif rcall("LREM", prefix .. "active", 1, jobId) == 1 then
    return "active"
  end
  return "unknown"
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
--[[
  Function to recursively check if there are no locks
  on the jobs to be removed.
  returns:
    boolean
]]
local function isLocked( prefix, jobId, removeChildren)
  local jobKey = prefix .. jobId;
  -- Check if this job is locked
  local lockKey = jobKey .. ':lock'
  local lock = rcall("GET", lockKey)
  if not lock then
    if removeChildren == "1" then
      local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
      if (#dependencies > 0) then
        for i, childJobKey in ipairs(dependencies) do
          -- We need to get the jobId for this job.
          local childJobId = getJobIdFromKey(childJobKey)
          local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
          local result = isLocked( childJobPrefix, childJobId, removeChildren )
          if result then
            return true
          end
        end
      end
    end
    return false
  end
  return true
end
local removeJobChildren
local removeJobWithChildren
removeJobChildren = function(prefix, jobKey, options)
    -- Check if this job has children
    -- If so, we are going to try to remove the children recursively in a depth-first way
    -- because if some job is locked, we must exit with an error.
    if not options.ignoreProcessed then
        local processed = rcall("HGETALL", jobKey .. ":processed")
        if #processed > 0 then
            for i = 1, #processed, 2 do
                local childJobId = getJobIdFromKey(processed[i])
                local childJobPrefix = getJobKeyPrefix(processed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local failed = rcall("HGETALL", jobKey .. ":failed")
        if #failed > 0 then
            for i = 1, #failed, 2 do
                local childJobId = getJobIdFromKey(failed[i])
                local childJobPrefix = getJobKeyPrefix(failed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local unsuccessful = rcall("ZRANGE", jobKey .. ":unsuccessful", 0, -1)
        if #unsuccessful > 0 then
            for i = 1, #unsuccessful, 1 do
                local childJobId = getJobIdFromKey(unsuccessful[i])
                local childJobPrefix = getJobKeyPrefix(unsuccessful[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
    end
    local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
    if #dependencies > 0 then
        for i, childJobKey in ipairs(dependencies) do
            local childJobId = getJobIdFromKey(childJobKey)
            local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
            removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
        end
    end
end
removeJobWithChildren = function(prefix, jobId, parentKey, options)
    local jobKey = prefix .. jobId
    if options.ignoreLocked then
        if isLocked(prefix, jobId) then
            return
        end
    end
    -- Check if job is in the failed zset
    local failedSet = prefix .. "failed"
    if not (options.ignoreProcessed and rcall("ZSCORE", failedSet, jobId)) then
        removeParentDependencyKey(jobKey, false, parentKey, nil)
        if options.removeChildren then
            removeJobChildren(prefix, jobKey, options)
        end
        local prev = removeJobFromAnyState(prefix, jobId)
        removeDeduplicationKeyIfNeededOnRemoval(prefix, jobKey, jobId)
        if removeJobKeys(jobKey) > 0 then
            local metaKey = prefix .. "meta"
            local maxEvents = getOrSetMaxEvents(metaKey)
            rcall("XADD", prefix .. "events", "MAXLEN", "~", maxEvents, "*", "event", "removed",
                "jobId", jobId, "prev", prev)
        end
    end
end
local prefix = ARGV[1]
local jobId = ARGV[2]
local jobKey = KEYS[1]
local metaKey = KEYS[2]
local options = {
  removeChildren = "1",
  ignoreProcessed = true,
  ignoreLocked = true
}
removeJobChildren(prefix, jobKey, options) 
`,keys:2};e.s(["reprocessJob",()=>rw],87721);let rw={name:"reprocessJob",content:`--[[
  Attempts to reprocess a job
  Input:
    KEYS[1] job key
    KEYS[2] events stream
    KEYS[3] job state
    KEYS[4] wait key
    KEYS[5] meta
    KEYS[6] paused key
    KEYS[7] active key
    KEYS[8] marker key
    ARGV[1] job.id
    ARGV[2] (job.opts.lifo ? 'R' : 'L') + 'PUSH'
    ARGV[3] propVal - failedReason/returnvalue
    ARGV[4] prev state - failed/completed
  Output:
     1 means the operation was a success
    -1 means the job does not exist
    -3 means the job was not found in the expected set.
]]
local rcall = redis.call;
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local jobKey = KEYS[1]
if rcall("EXISTS", jobKey) == 1 then
  local jobId = ARGV[1]
  if (rcall("ZREM", KEYS[3], jobId) == 1) then
    rcall("HDEL", jobKey, "finishedOn", "processedOn", ARGV[3])
    local target, isPausedOrMaxed = getTargetQueueList(KEYS[5], KEYS[7], KEYS[4], KEYS[6])
    addJobInTargetList(target, KEYS[8], ARGV[2], isPausedOrMaxed, jobId)
    local parentKey = rcall("HGET", jobKey, "parentKey")
    if parentKey and rcall("EXISTS", parentKey) == 1 then
      if ARGV[4] == "failed" then
        if rcall("ZREM", parentKey .. ":unsuccessful", jobKey) == 1 or
          rcall("ZREM", parentKey .. ":failed", jobKey) == 1 then
          rcall("SADD", parentKey .. ":dependencies", jobKey)
        end
      else
        if rcall("HDEL", parentKey .. ":processed", jobKey) == 1 then
          rcall("SADD", parentKey .. ":dependencies", jobKey)
        end
      end
    end
    local maxEvents = getOrSetMaxEvents(KEYS[5])
    -- Emit waiting event
    rcall("XADD", KEYS[2], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId, "prev", ARGV[4]);
    return 1
  else
    return -3
  end
else
  return -1
end
`,keys:8};e.s(["retryJob",()=>rj],32559);let rj={name:"retryJob",content:`--[[
  Retries a failed job by moving it back to the wait queue.
    Input:
      KEYS[1]  'active',
      KEYS[2]  'wait'
      KEYS[3]  'paused'
      KEYS[4]  job key
      KEYS[5]  'meta'
      KEYS[6]  events stream
      KEYS[7]  delayed key
      KEYS[8]  prioritized key
      KEYS[9]  'pc' priority counter
      KEYS[10] 'marker'
      KEYS[11] 'stalled'
      ARGV[1]  key prefix
      ARGV[2]  timestamp
      ARGV[3]  pushCmd
      ARGV[4]  jobId
      ARGV[5]  token
      ARGV[6]  optional job fields to update
    Events:
      'waiting'
    Output:
     0  - OK
     -1 - Missing key
     -2 - Missing lock
     -3 - Job not in active set
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                rcall("LPUSH", targetKey, jobId)
            else
                local score = getPriorityScore(priority, priorityCounterKey)
                rcall("ZADD", prioritizedKey, score, jobId)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
        addBaseMarkerIfNeeded(markerKey, isPaused)
    end
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
--[[
  Function to update a bunch of fields in a job.
]]
local function updateJobFields(jobKey, msgpackedFields)
  if msgpackedFields and #msgpackedFields > 0 then
    local fieldsToUpdate = cmsgpack.unpack(msgpackedFields)
    if fieldsToUpdate then
      rcall("HMSET", jobKey, unpack(fieldsToUpdate))
    end
  end
end
local target, isPausedOrMaxed = getTargetQueueList(KEYS[5], KEYS[1], KEYS[2], KEYS[3])
local markerKey = KEYS[10]
-- Check if there are delayed jobs that we can move to wait.
-- test example: when there are delayed jobs between retries
promoteDelayedJobs(KEYS[7], markerKey, target, KEYS[8], KEYS[6], ARGV[1], ARGV[2], KEYS[9], isPausedOrMaxed)
local jobKey = KEYS[4]
if rcall("EXISTS", jobKey) == 1 then
  local errorCode = removeLock(jobKey, KEYS[11], ARGV[5], ARGV[4]) 
  if errorCode < 0 then
    return errorCode
  end
  updateJobFields(jobKey, ARGV[6])
  local numRemovedElements = rcall("LREM", KEYS[1], -1, ARGV[4])
  if (numRemovedElements < 1) then return -3 end
  local priority = tonumber(rcall("HGET", jobKey, "priority")) or 0
  --need to re-evaluate after removing job from active
  isPausedOrMaxed = isQueuePausedOrMaxed(KEYS[5], KEYS[1])
  -- Standard or priority add
  if priority == 0 then
    addJobInTargetList(target, markerKey, ARGV[3], isPausedOrMaxed, ARGV[4])
  else
    addJobWithPriority(markerKey, KEYS[8], priority, ARGV[4], KEYS[9], isPausedOrMaxed)
  end
  rcall("HINCRBY", jobKey, "atm", 1)
  local maxEvents = getOrSetMaxEvents(KEYS[5])
  -- Emit waiting event
  rcall("XADD", KEYS[6], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
    "jobId", ARGV[4], "prev", "active")
  return 0
else
  return -1
end
`,keys:11};e.s(["saveStacktrace",()=>rx],20332);let rx={name:"saveStacktrace",content:`--[[
  Save stacktrace and failedReason.
  Input:
    KEYS[1] job key
    ARGV[1]  stacktrace
    ARGV[2]  failedReason
  Output:
     0 - OK
    -1 - Missing key
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[1]) == 1 then
  rcall("HMSET", KEYS[1], "stacktrace", ARGV[1], "failedReason", ARGV[2])
  return 0
else
  return -1
end
`,keys:1};e.s(["updateData",()=>rA],47479);let rA={name:"updateData",content:`--[[
  Update job data
  Input:
    KEYS[1] Job id key
    ARGV[1] data
  Output:
    0 - OK
   -1 - Missing job.
]]
local rcall = redis.call
if rcall("EXISTS",KEYS[1]) == 1 then -- // Make sure job exists
  rcall("HSET", KEYS[1], "data", ARGV[1])
  return 0
else
  return -1
end
`,keys:1};e.s(["updateJobScheduler",()=>rT],74677);let rT={name:"updateJobScheduler",content:`--[[
  Updates a job scheduler and adds next delayed job
  Input:
    KEYS[1]  'repeat' key
    KEYS[2]  'delayed'
    KEYS[3]  'wait' key
    KEYS[4]  'paused' key
    KEYS[5]  'meta'
    KEYS[6]  'prioritized' key
    KEYS[7]  'marker',
    KEYS[8]  'id'
    KEYS[9]  events stream key
    KEYS[10] 'pc' priority counter
    KEYS[11] producer key
    KEYS[12] 'active' key
    ARGV[1] next milliseconds
    ARGV[2] jobs scheduler id
    ARGV[3] Json stringified delayed data
    ARGV[4] msgpacked delayed opts
    ARGV[5] timestamp
    ARGV[6] prefix key
    ARGV[7] producer id
    Output:
      next delayed job id  - OK
]]
local rcall = redis.call
local repeatKey = KEYS[1]
local delayedKey = KEYS[2]
local waitKey = KEYS[3]
local pausedKey = KEYS[4]
local metaKey = KEYS[5]
local prioritizedKey = KEYS[6]
local nextMillis = ARGV[1]
local jobSchedulerId = ARGV[2]
local timestamp = ARGV[5]
local prefixKey = ARGV[6]
local producerId = ARGV[7]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Adds a delayed job to the queue by doing the following:
    - Creates a new job key with the job data.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
local function addDelayedJob(jobId, delayedKey, eventsKey, timestamp,
  maxEvents, markerKey, delay)
  local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
  rcall("ZADD", delayedKey, score, jobId)
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(markerKey, delayedKey)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePaused(queueMetaKey)
  return rcall("HEXISTS", queueMetaKey, "paused") == 1
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
local function addJobFromScheduler(jobKey, jobId, rawOpts, waitKey, pausedKey, activeKey, metaKey, 
  prioritizedKey, priorityCounter, delayedKey, markerKey, eventsKey, name, maxEvents, timestamp,
  data, jobSchedulerId)
  local opts = cmsgpack.unpack(rawOpts)
  local delay, priority = storeJob(eventsKey, jobKey, jobId, name, data,
    opts, timestamp, nil, nil, jobSchedulerId)
  if delay ~= 0 then
    addDelayedJob(jobId, delayedKey, eventsKey, timestamp, maxEvents, markerKey, delay)
  else
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    -- Standard or priority add
    if priority == 0 then
      local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
      addJobInTargetList(target, markerKey, pushCmd, isPausedOrMaxed, jobId)
    else
      -- Priority add
      addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounter, isPausedOrMaxed)
    end
    -- Emit waiting event
    rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents,  "*", "event", "waiting", "jobId", jobId)
  end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
local schedulerKey = repeatKey .. ":" .. jobSchedulerId
local nextDelayedJobId = "repeat:" .. jobSchedulerId .. ":" .. nextMillis
local nextDelayedJobKey = schedulerKey .. ":" .. nextMillis
-- Validate that scheduler exists.
local prevMillis = rcall("ZSCORE", repeatKey, jobSchedulerId)
if prevMillis then
    local currentDelayedJobId = "repeat:" .. jobSchedulerId .. ":" .. prevMillis
    if producerId == currentDelayedJobId then
        local eventsKey = KEYS[9]
        local maxEvents = getOrSetMaxEvents(metaKey)
        if rcall("EXISTS", nextDelayedJobKey) ~= 1 then
            local schedulerAttributes = rcall("HMGET", schedulerKey, "name", "data")
            rcall("ZADD", repeatKey, nextMillis, jobSchedulerId)
            rcall("HINCRBY", schedulerKey, "ic", 1)
            rcall("INCR", KEYS[8])
            -- TODO: remove this workaround in next breaking change,
            -- all job-schedulers must save job data
            local templateData = schedulerAttributes[2] or ARGV[3]
            if templateData and templateData ~= '{}' then
                rcall("HSET", schedulerKey, "data", templateData)
            end
            addJobFromScheduler(nextDelayedJobKey, nextDelayedJobId, ARGV[4], waitKey, pausedKey, 
                KEYS[12], metaKey, prioritizedKey, KEYS[10], delayedKey, KEYS[7], eventsKey, 
                schedulerAttributes[1], maxEvents, ARGV[5], templateData or '{}', jobSchedulerId)
            -- TODO: remove this workaround in next breaking change
            if KEYS[11] ~= "" then
                rcall("HSET", KEYS[11], "nrjid", nextDelayedJobId)
            end
            return nextDelayedJobId .. "" -- convert to string
        else
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
                "duplicated", "jobId", nextDelayedJobId)
        end
    end
end
`,keys:12};e.s(["updateProgress",()=>rC],70855);let rC={name:"updateProgress",content:`--[[
  Update job progress
  Input:
    KEYS[1] Job id key
    KEYS[2] event stream key
    KEYS[3] meta key
    ARGV[1] id
    ARGV[2] progress
  Output:
     0 - OK
    -1 - Missing job.
  Event:
    progress(jobId, progress)
]]
local rcall = redis.call
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
if rcall("EXISTS", KEYS[1]) == 1 then -- // Make sure job exists
    local maxEvents = getOrSetMaxEvents(KEYS[3])
    rcall("HSET", KEYS[1], "progress", ARGV[2])
    rcall("XADD", KEYS[2], "MAXLEN", "~", maxEvents, "*", "event", "progress",
          "jobId", ARGV[1], "data", ARGV[2]);
    return 0
else
    return -1
end
`,keys:3};e.s(["updateRepeatableJobMillis",()=>rD],48349);let rD={name:"updateRepeatableJobMillis",content:`--[[
  Adds a repeatable job
    Input:
      KEYS[1] 'repeat' key
      ARGV[1] next milliseconds
      ARGV[2] custom key
      ARGV[3] legacy custom key TODO: remove this logic in next breaking change
      Output:
        repeatableKey  - OK
]]
local rcall = redis.call
local repeatKey = KEYS[1]
local nextMillis = ARGV[1]
local customKey = ARGV[2]
local legacyCustomKey = ARGV[3]
if rcall("ZSCORE", repeatKey, customKey) then
    rcall("ZADD", repeatKey, nextMillis, customKey)
    return customKey
elseif rcall("ZSCORE", repeatKey, legacyCustomKey) ~= false then
    rcall("ZADD", repeatKey, nextMillis, legacyCustomKey)
    return legacyCustomKey
end
return ''
`,keys:1};e.s(["addDelayedJob",()=>tU,"addJobScheduler",()=>t$,"addLog",()=>tQ,"addParentJob",()=>tH,"addPrioritizedJob",()=>tZ,"addRepeatableJob",()=>tX,"addStandardJob",()=>t0,"changeDelay",()=>t1,"changePriority",()=>t2,"cleanJobsInSet",()=>t3,"drain",()=>t6,"extendLock",()=>t4,"extendLocks",()=>t5,"getCounts",()=>t8,"getCountsPerPriority",()=>t9,"getDependencyCounts",()=>t7,"getJobScheduler",()=>re,"getRanges",()=>rt,"getRateLimitTtl",()=>rr,"getState",()=>rn,"getStateV2",()=>ri,"isFinished",()=>ra,"isJobInList",()=>rs,"isMaxed",()=>ro,"moveJobFromActiveToWait",()=>rl,"moveJobsToWait",()=>rd,"moveStalledJobsToWait",()=>rc,"moveToActive",()=>ru,"moveToDelayed",()=>rp,"moveToFinished",()=>rh,"moveToWaitingChildren",()=>ry,"obliterate",()=>rm,"paginate",()=>rf,"pause",()=>rb,"promote",()=>rg,"releaseLock",()=>rK,"removeChildDependency",()=>rv,"removeJob",()=>rS,"removeJobScheduler",()=>rE,"removeRepeatable",()=>rk,"removeUnprocessedChildren",()=>rI,"reprocessJob",()=>rw,"retryJob",()=>rj,"saveStacktrace",()=>rx,"updateData",()=>rA,"updateJobScheduler",()=>rT,"updateProgress",()=>rC,"updateRepeatableJobMillis",()=>rD],28729),e.i(61408),e.i(93852),e.i(27599),e.i(92879),e.i(46500),e.i(55494),e.i(30960),e.i(1939),e.i(24195),e.i(21057),e.i(41381),e.i(46888),e.i(56111),e.i(46003),e.i(19884),e.i(65535),e.i(64623),e.i(33429),e.i(40615),e.i(47539),e.i(61570),e.i(6789),e.i(71707),e.i(70389),e.i(79499),e.i(91017),e.i(73652),e.i(26867),e.i(10393),e.i(85353),e.i(28646),e.i(82792),e.i(35933),e.i(50518),e.i(77380),e.i(30498),e.i(47776),e.i(90342),e.i(25665),e.i(73024),e.i(66357),e.i(72997),e.i(87721),e.i(32559),e.i(20332),e.i(47479),e.i(74677),e.i(70855),e.i(48349);var rO=e.i(28729);class rR extends tW.EventEmitter{constructor(e,t){if(super(),this.extraOptions=t,this.capabilities={canDoubleTimeout:!1,canBlockFor1Ms:!0},this.status="initializing",this.packageVersion=tL,this.extraOptions=Object.assign({shared:!1,blocking:!0,skipVersionCheck:!1,skipWaitingForReady:!1},t),ei(e)){if(this._client=e,this._client.options.keyPrefix)throw Error("BullMQ: ioredis does not support ioredis prefixes, use the prefix option instead.");!function(e){return ei(e)&&e.isCluster}(this._client)?this.opts=this._client.options:this.opts=this._client.options.redisOptions,this.checkBlockingOptions("BullMQ: Your redis options maxRetriesPerRequest must be null.",this.opts,!0)}else this.checkBlockingOptions("BullMQ: WARNING! Your redis options maxRetriesPerRequest must be null and will be overridden by BullMQ.",e),this.opts=Object.assign({port:6379,host:"127.0.0.1",retryStrategy:function(e){return Math.max(Math.min(Math.exp(e),2e4),1e3)}},e),this.extraOptions.blocking&&(this.opts.maxRetriesPerRequest=null);this.skipVersionCheck=(null==t?void 0:t.skipVersionCheck)||!!(this.opts&&this.opts.skipVersionCheck),this.handleClientError=e=>{this.emit("error",e)},this.handleClientClose=()=>{this.emit("close")},this.handleClientReady=()=>{this.emit("ready")},this.initializing=this.init(),this.initializing.catch(e=>this.emit("error",e))}checkBlockingOptions(e,t,r=!1){if(this.extraOptions.blocking&&t&&t.maxRetriesPerRequest)if(r)throw Error(e);else console.error(e)}static async waitUntilReady(e){let t,r,n;if("ready"!==e.status){if("wait"===e.status)return e.connect();if("end"===e.status)throw Error(U.CONNECTION_CLOSED_ERROR_MSG);try{await new Promise((i,a)=>{let s;n=e=>{s=e},t=()=>{i()},r=()=>{"end"!==e.status?a(s||Error(U.CONNECTION_CLOSED_ERROR_MSG)):s?a(s):i()},et(e,3),e.once("ready",t),e.on("end",r),e.once("error",n)})}finally{e.removeListener("end",r),e.removeListener("error",n),e.removeListener("ready",t),et(e,-3)}}}get client(){return this.initializing}loadCommands(e,t){let r=t||rO;for(let t in r){let n=`${r[t].name}:${e}`;this._client[n]||this._client.defineCommand(n,{numberOfKeys:r[t].keys,lua:r[t].content})}}async init(){if(!this._client){let e=this.opts,{url:t}=e,r=ek(e,["url"]);this._client=t?new W.default(t,r):new W.default(r)}if(et(this._client,3),this._client.on("error",this.handleClientError),this._client.on("close",this.handleClientClose),this._client.on("ready",this.handleClientReady),this.extraOptions.skipWaitingForReady||await rR.waitUntilReady(this._client),this.loadCommands(this.packageVersion),"end"!==this._client.status){if(this.version=await this.getRedisVersion(),!0!==this.skipVersionCheck&&!this.closing){if(el(this.version,rR.minimumVersion))throw Error(`Redis version needs to be greater or equal than ${rR.minimumVersion} Current: ${this.version}`);el(this.version,rR.recommendedMinimumVersion)&&console.warn(`It is highly recommended to use a minimum Redis version of ${rR.recommendedMinimumVersion}
             Current: ${this.version}`)}this.capabilities={canDoubleTimeout:!el(this.version,"6.0.0"),canBlockFor1Ms:!el(this.version,"7.0.8")},this.status="ready"}return this._client}async disconnect(e=!0){let t=await this.client;if("end"!==t.status){let r,n;if(!e)return t.disconnect();let i=new Promise((e,i)=>{et(t,2),t.once("end",e),t.once("error",i),r=e,n=i});t.disconnect();try{await i}finally{et(t,-2),t.removeListener("end",r),t.removeListener("error",n)}}}async reconnect(){return(await this.client).connect()}async close(e=!1){if(!this.closing){let t=this.status;this.status="closing",this.closing=!0;try{"ready"===t&&await this.initializing,this.extraOptions.shared||("initializing"==t||e?this._client.disconnect():await this._client.quit(),this._client.status="end")}catch(e){if(eo(e))throw e}finally{this._client.off("error",this.handleClientError),this._client.off("close",this.handleClientClose),this._client.off("ready",this.handleClientReady),et(this._client,-3),this.removeAllListeners(),this.status="closed"}}}async getRedisVersion(){let e;if(this.skipVersionCheck)return rR.minimumVersion;let t=await this._client.info(),r="redis_version:",n="maxmemory_policy:",i=t.split(/\r?\n/);for(let t=0;t<i.length;t++){if(0===i[t].indexOf(n)){let e=i[t].substr(n.length);"noeviction"!==e&&console.warn(`IMPORTANT! Eviction policy is ${e}. It should be "noeviction"`)}0===i[t].indexOf(r)&&(e=i[t].substr(r.length))}return e}get redisVersion(){return this.version}}rR.minimumVersion="5.0.0",rR.recommendedMinimumVersion="6.2.0",F.EventEmitter;var rM=e.i(26938),rP=F;class rN extends rP.EventEmitter{constructor(e,t={connection:{}},r=rR,n=!1){if(super(),this.name=e,this.opts=t,this.closed=!1,this.hasBlockingConnection=!1,this.hasBlockingConnection=n,this.opts=Object.assign({prefix:"bull"},t),!e)throw Error("Queue name must be provided");if(e.includes(":"))throw Error("Queue name cannot contain :");this.connection=new r(t.connection,{shared:ei(t.connection),blocking:n,skipVersionCheck:t.skipVersionCheck,skipWaitingForReady:t.skipWaitingForReady}),this.connection.on("error",e=>this.emit("error",e)),this.connection.on("close",()=>{this.closing||this.emit("ioredis:close")});let i=new tB(t.prefix);this.qualifiedName=i.getQueueQualifiedName(e),this.keys=i.getKeys(e),this.toKey=t=>i.toKey(e,t),this.createScripts()}get client(){return this.connection.client}createScripts(){this.scripts=tG(this)}get redisVersion(){return this.connection.redisVersion}get Job(){return tY}emit(e,...t){try{return super.emit(e,...t)}catch(e){try{return super.emit("error",e)}catch(e){return console.error(e),!1}}}waitUntilReady(){return this.client}base64Name(){return Buffer.from(this.name).toString("base64")}clientName(e=""){let t=this.base64Name();return`${this.opts.prefix}:${t}${e}`}async close(){this.closing||(this.closing=this.connection.close()),await this.closing,this.closed=!0}disconnect(){return this.connection.disconnect()}async checkConnectionError(e,t=5e3){try{return await e()}catch(e){if(eo(e)&&this.emit("error",e),this.closing||!t)return;await ee(t)}}trace(e,t,r,n,i){return ec(this.opts.telemetry,e,this.name,t,r,n,i)}}class rJ extends rN{constructor(e,t,r){super(e,t,r),this.repeatStrategy=t.settings&&t.settings.repeatStrategy||rL}async upsertJobScheduler(e,t,r,n,i,{override:a,producerId:s}){let o,{every:l,limit:d,pattern:c,offset:u}=t;if(c&&l)throw Error("Both .pattern and .every options are defined for this repeatable job");if(!c&&!l)throw Error("Either .pattern or .every options must be defined for this repeatable job");if(t.immediately&&t.startDate)throw Error("Both .immediately and .startDate options are defined for this repeatable job");t.immediately&&t.every&&console.warn("Using option immediately with every does not affect the job's schedule. Job will run immediately anyway.");let p=t.count?t.count+1:1;if(void 0!==t.limit&&p>t.limit)return;let h=Date.now(),{endDate:y}=t;if(y&&h>new Date(y).getTime())return;let m=i.prevMillis||0;h=m<h?h:m;let{startDate:f,immediately:K}=t,v=ek(t,["startDate","immediately"]),S=(h>m?h:m)+(u||0);f&&(S=(S=new Date(f).getTime())>h?S:h);let E=null;if(l){let e=Math.floor((S-(u||0))/l)*l;E="number"==typeof u?u:S-e;let t=e+l;o=m||u?t:e}else c&&(o=await this.repeatStrategy(h,t,r))<h&&(o=h);if(o)return this.trace(g.PRODUCER,"add",`${this.name}.${r}`,async(u,h)=>{var m,f;let g=i.telemetry;if(h){let e=null==(m=i.telemetry)?void 0:m.omitContext,t=(null==(f=i.telemetry)?void 0:f.metadata)||!e&&h;(t||e)&&(g={metadata:t,omitContext:e})}let K=this.getNextJobOpts(o,e,Object.assign(Object.assign({},i),{repeat:v,telemetry:g}),p,E);if(a){let a=await this.scripts.addJobScheduler(e,o,JSON.stringify(void 0===n?{}:n),tY.optsAsJSON(i),{name:r,endDate:y?new Date(y).getTime():void 0,tz:t.tz,pattern:c,every:l,limit:d,offset:E},tY.optsAsJSON(K),s),p=new this.Job(this,r,n,K,a);return p.id=a,null==u||u.setAttributes({[b.JobSchedulerId]:e,[b.JobId]:p.id}),p}{let t=await this.scripts.updateJobSchedulerNextMillis(e,o,JSON.stringify(void 0===n?{}:n),tY.optsAsJSON(K),s);if(t){let i=new this.Job(this,r,n,K,t);return i.id=t,null==u||u.setAttributes({[b.JobSchedulerId]:e,[b.JobId]:i.id}),i}}})}getNextJobOpts(e,t,r,n,i){var a;let s=this.getSchedulerNextJobId({jobSchedulerId:t,nextMillis:e}),o=Date.now(),l=e+i-o,d=Object.assign(Object.assign({},r),{jobId:s,delay:l<0?0:l,timestamp:o,prevMillis:e,repeatJobKey:t});return d.repeat=Object.assign(Object.assign({},r.repeat),{offset:i,count:n,endDate:(null==(a=r.repeat)?void 0:a.endDate)?new Date(r.repeat.endDate).getTime():void 0}),d}async removeJobScheduler(e){return this.scripts.removeJobScheduler(e)}async getSchedulerData(e,t,r){let n=await e.hgetall(this.toKey("repeat:"+t));return this.transformSchedulerData(t,n,r)}transformSchedulerData(e,t,r){if(t){let n={key:e,name:t.name,next:r};return t.ic&&(n.iterationCount=parseInt(t.ic)),t.limit&&(n.limit=parseInt(t.limit)),t.endDate&&(n.endDate=parseInt(t.endDate)),t.tz&&(n.tz=t.tz),t.pattern&&(n.pattern=t.pattern),t.every&&(n.every=parseInt(t.every)),t.offset&&(n.offset=parseInt(t.offset)),(t.data||t.opts)&&(n.template=this.getTemplateFromJSON(t.data,t.opts)),n}if(e.includes(":"))return this.keyToData(e,r)}keyToData(e,t){let r=e.split(":"),n=r.slice(4).join(":")||null;return{key:e,name:r[0],id:r[1]||null,endDate:parseInt(r[2])||null,tz:r[3]||null,pattern:n,next:t}}async getScheduler(e){let[t,r]=await this.scripts.getJobScheduler(e);return this.transformSchedulerData(e,t?Z(t):null,r?parseInt(r):null)}getTemplateFromJSON(e,t){let r={};return e&&(r.data=JSON.parse(e)),t&&(r.opts=tY.optsFromJSON(t)),r}async getJobSchedulers(e=0,t=-1,r=!1){let n=await this.client,i=this.keys.repeat,a=r?await n.zrange(i,e,t,"WITHSCORES"):await n.zrevrange(i,e,t,"WITHSCORES"),s=[];for(let e=0;e<a.length;e+=2)s.push(this.getSchedulerData(n,a[e],parseInt(a[e+1])));return Promise.all(s)}async getSchedulersCount(){let e=this.keys.repeat;return(await this.client).zcard(e)}getSchedulerNextJobId({nextMillis:e,jobSchedulerId:t}){return`repeat:${t}:${e}`}}let rL=(e,t)=>{let{pattern:r}=t,n=new Date(e),i=t.startDate&&new Date(t.startDate),a=(0,rM.parseExpression)(r,Object.assign(Object.assign({},t),{currentDate:i>n?i:n}));try{if(t.immediately)return new Date().getTime();return a.next().getTime()}catch(e){}};class r_ extends rN{getJob(e){return this.Job.fromId(this,e)}commandByType(e,t,r){return e.map(e=>{e="waiting"===e?"wait":e;let n=this.toKey(e);switch(e){case"completed":case"failed":case"delayed":case"prioritized":case"repeat":case"waiting-children":return r(n,t?"zcard":"zrange");case"active":case"wait":case"paused":return r(n,t?"llen":"lrange")}})}sanitizeJobTypes(e){let t="string"==typeof e?[e]:e;if(Array.isArray(t)&&t.length>0){let e=[...t];return -1!==e.indexOf("waiting")&&e.push("paused"),[...new Set(e)]}return["active","completed","delayed","failed","paused","prioritized","waiting","waiting-children"]}async count(){return await this.getJobCountByTypes("waiting","paused","delayed","prioritized","waiting-children")}async getRateLimitTtl(e){return this.scripts.getRateLimitTtl(e)}async getDebounceJobId(e){return(await this.client).get(`${this.keys.de}:${e}`)}async getDeduplicationJobId(e){return(await this.client).get(`${this.keys.de}:${e}`)}async getJobCountByTypes(...e){return Object.values(await this.getJobCounts(...e)).reduce((e,t)=>e+t,0)}async getJobCounts(...e){let t=this.sanitizeJobTypes(e),r=await this.scripts.getCounts(t),n={};return r.forEach((e,r)=>{n[t[r]]=e||0}),n}getJobState(e){return this.scripts.getState(e)}getCompletedCount(){return this.getJobCountByTypes("completed")}getFailedCount(){return this.getJobCountByTypes("failed")}getDelayedCount(){return this.getJobCountByTypes("delayed")}getActiveCount(){return this.getJobCountByTypes("active")}getPrioritizedCount(){return this.getJobCountByTypes("prioritized")}async getCountsPerPriority(e){let t=[...new Set(e)],r=await this.scripts.getCountsPerPriority(t),n={};return r.forEach((e,r)=>{n[`${t[r]}`]=e||0}),n}getWaitingCount(){return this.getJobCountByTypes("waiting")}getWaitingChildrenCount(){return this.getJobCountByTypes("waiting-children")}getWaiting(e=0,t=-1){return this.getJobs(["waiting"],e,t,!0)}getWaitingChildren(e=0,t=-1){return this.getJobs(["waiting-children"],e,t,!0)}getActive(e=0,t=-1){return this.getJobs(["active"],e,t,!0)}getDelayed(e=0,t=-1){return this.getJobs(["delayed"],e,t,!0)}getPrioritized(e=0,t=-1){return this.getJobs(["prioritized"],e,t,!0)}getCompleted(e=0,t=-1){return this.getJobs(["completed"],e,t,!1)}getFailed(e=0,t=-1){return this.getJobs(["failed"],e,t,!1)}async getDependencies(e,t,r,n){let i=this.toKey("processed"==t?`${e}:processed`:`${e}:dependencies`),{items:a,total:s,jobs:o}=await this.scripts.paginate(i,{start:r,end:n,fetchJobs:!0});return{items:a,jobs:o,total:s}}async getRanges(e,t=0,r=1,n=!1){let i=[];this.commandByType(e,!1,(e,t)=>{switch(t){case"lrange":i.push("lrange");break;case"zrange":i.push("zrange")}});let a=await this.scripts.getRanges(e,t,r,n),s=[];return a.forEach((e,t)=>{let r=e||[];s=n&&"lrange"===i[t]?s.concat(r.reverse()):s.concat(r)}),[...new Set(s)]}async getJobs(e,t=0,r=-1,n=!1){let i=this.sanitizeJobTypes(e);return Promise.all((await this.getRanges(i,t,r,n)).map(e=>this.Job.fromId(this,e)))}async getJobLogs(e,t=0,r=-1,n=!0){let i=(await this.client).multi(),a=this.toKey(e+":logs");n?i.lrange(a,t,r):i.lrange(a,-(r+1),-(t+1)),i.llen(a);let s=await i.exec();return n||s[0][1].reverse(),{logs:s[0][1],count:s[1][1]}}async baseGetClients(e){let t=await this.client;try{let r=await t.client("LIST");return this.parseClientList(r,e)}catch(e){if(!es.test(e.message))throw e;return[{name:"GCP does not support client list"}]}}getWorkers(){let e=`${this.clientName()}`,t=`${this.clientName()}:w:`;return this.baseGetClients(r=>r&&(r===e||r.startsWith(t)))}async getWorkersCount(){return(await this.getWorkers()).length}async getQueueEvents(){let e=`${this.clientName()}:qe`;return this.baseGetClients(t=>t===e)}async getMetrics(e,t=0,r=-1){let n=await this.client,i=this.toKey(`metrics:${e}`),a=`${i}:data`,s=n.multi();s.hmget(i,"count","prevTS","prevCount"),s.lrange(a,t,r),s.llen(a);let[o,l,d]=await s.exec(),[c,[u,p,h]]=o,[y,m]=l,[f,b]=d;if(c||y)throw c||y||f;return{meta:{count:parseInt(u||"0",10),prevTS:parseInt(p||"0",10),prevCount:parseInt(h||"0",10)},data:m,count:b}}parseClientList(e,t){let r=e.split(/\r?\n/),n=[];return r.forEach(e=>{let r={};e.split(" ").forEach(function(e){let t=e.indexOf("="),n=e.substring(0,t),i=e.substring(t+1);r[n]=i});let i=r.name;t(i)&&(r.name=this.name,r.rawname=i,n.push(r))}),n}async exportPrometheusMetrics(e){let t=await this.getJobCounts(),r=[];r.push("# HELP bullmq_job_count Number of jobs in the queue by state"),r.push("# TYPE bullmq_job_count gauge");let n=e?Object.keys(e).reduce((t,r)=>`${t}, ${r}="${e[r]}"`,""):"";for(let[e,i]of Object.entries(t))r.push(`bullmq_job_count{queue="${this.name}", state="${e}"${n}} ${i}`);return r.join("\n")}}class rF extends rN{constructor(e,t,r){super(e,t,r),this.repeatStrategy=t.settings&&t.settings.repeatStrategy||rG,this.repeatKeyHashAlgorithm=t.settings&&t.settings.repeatKeyHashAlgorithm||"md5"}async updateRepeatableJob(e,t,r,{override:n}){var i;let a=Object.assign({},r.repeat);null!=a.pattern||(a.pattern=a.cron),delete a.cron;let s=a.count?a.count+1:1;if(void 0!==a.limit&&s>a.limit)return;let o=Date.now(),{endDate:l}=a;if(l&&o>new Date(l).getTime())return;let d=r.prevMillis||0;o=d<o?o:d;let c=await this.repeatStrategy(o,a,e),{every:u,pattern:p}=a,h=!!((u||p)&&a.immediately),y=h&&u?o-c:void 0;if(c){let o;!d&&r.jobId&&(a.jobId=r.jobId);let m=rV(e,a),f=null!=(i=r.repeat.key)?i:this.hash(m);if(n)o=await this.scripts.addRepeatableJob(f,c,{name:e,endDate:l?new Date(l).getTime():void 0,tz:a.tz,pattern:p,every:u},m);else{let e=await this.client;o=await this.scripts.updateRepeatableJobMillis(e,f,c,m)}let{immediately:b}=a,g=ek(a,["immediately"]);return this.createNextJob(e,c,o,Object.assign(Object.assign({},r),{repeat:Object.assign({offset:y},g)}),t,s,h)}}async createNextJob(e,t,r,n,i,a,s){let o=this.getRepeatJobKey(e,t,r,i),l=Date.now(),d=t+(n.repeat.offset?n.repeat.offset:0)-l,c=Object.assign(Object.assign({},n),{jobId:o,delay:d<0||s?0:d,timestamp:l,prevMillis:t,repeatJobKey:r});return c.repeat=Object.assign(Object.assign({},n.repeat),{count:a}),this.Job.create(this,e,i,c)}getRepeatJobKey(e,t,r,n){return r.split(":").length>2?this.getRepeatJobId({name:e,nextMillis:t,namespace:this.hash(r),jobId:null==n?void 0:n.id}):this.getRepeatDelayedJobId({customKey:r,nextMillis:t})}async removeRepeatable(e,t,r){var n;let i=rV(e,Object.assign(Object.assign({},t),{jobId:r})),a=null!=(n=t.key)?n:this.hash(i),s=this.getRepeatJobId({name:e,nextMillis:"",namespace:this.hash(i),jobId:null!=r?r:t.jobId,key:t.key});return this.scripts.removeRepeatable(s,i,a)}async removeRepeatableByKey(e){let t=this.keyToData(e),r=this.getRepeatJobId({name:t.name,nextMillis:"",namespace:this.hash(e),jobId:t.id});return this.scripts.removeRepeatable(r,"",e)}async getRepeatableData(e,t,r){let n=await e.hgetall(this.toKey("repeat:"+t));return n?{key:t,name:n.name,endDate:parseInt(n.endDate)||null,tz:n.tz||null,pattern:n.pattern||null,every:n.every||null,next:r}:this.keyToData(t,r)}keyToData(e,t){let r=e.split(":"),n=r.slice(4).join(":")||null;return{key:e,name:r[0],id:r[1]||null,endDate:parseInt(r[2])||null,tz:r[3]||null,pattern:n,next:t}}async getRepeatableJobs(e=0,t=-1,r=!1){let n=await this.client,i=this.keys.repeat,a=r?await n.zrange(i,e,t,"WITHSCORES"):await n.zrevrange(i,e,t,"WITHSCORES"),s=[];for(let e=0;e<a.length;e+=2)s.push(this.getRepeatableData(n,a[e],parseInt(a[e+1])));return Promise.all(s)}async getRepeatableCount(){return(await this.client).zcard(this.toKey("repeat"))}hash(e){return(0,eb.createHash)(this.repeatKeyHashAlgorithm).update(e).digest("hex")}getRepeatDelayedJobId({nextMillis:e,customKey:t}){return`repeat:${t}:${e}`}getRepeatJobId({name:e,nextMillis:t,namespace:r,jobId:n,key:i}){let a=null!=i?i:this.hash(`${e}${n||""}${r}`);return`repeat:${a}:${t}`}}function rV(e,t){let r=t.endDate?new Date(t.endDate).getTime():"",n=t.tz||"",i=t.pattern||String(t.every)||"",a=t.jobId?t.jobId:"";return`${e}:${a}:${r}:${n}:${i}`}let rG=(e,t)=>{let r=t.pattern;if(r&&t.every)throw Error("Both .pattern and .every options are defined for this repeatable job");if(t.every)return Math.floor(e/t.every)*t.every+(t.immediately?0:t.every);let n=new Date(t.startDate&&new Date(t.startDate)>new Date(e)?t.startDate:e),i=(0,rM.parseExpression)(r,Object.assign(Object.assign({},t),{currentDate:n}));try{if(t.immediately)return new Date().getTime();return i.next().getTime()}catch(e){}};var rq=e.i(22734),rY=e.i(92509),rz=e.i(85949);!function(e){e.blocking="blocking",e.normal="normal"}(D||(D={}));let rB=new W.default(process.env.REDIS_URL||"redis://localhost:6379",{maxRetriesPerRequest:3,retryDelayOnFailover:100}),rW=new class extends r_{constructor(e,t,r){var n;super(e,Object.assign({},t),r),this.token=eE(),this.libName="bullmq",this.jobsOpts=null!=(n=null==t?void 0:t.defaultJobOptions)?n:{},this.waitUntilReady().then(e=>{if(!this.closing&&!(null==t?void 0:t.skipMetasUpdate))return e.hmset(this.keys.meta,this.metaValues)}).catch(e=>{})}emit(e,...t){return super.emit(e,...t)}off(e,t){return super.off(e,t),this}on(e,t){return super.on(e,t),this}once(e,t){return super.once(e,t),this}get defaultJobOptions(){return Object.assign({},this.jobsOpts)}get metaValues(){var e,t,r,n;return{"opts.maxLenEvents":null!=(n=null==(r=null==(t=null==(e=this.opts)?void 0:e.streams)?void 0:t.events)?void 0:r.maxLen)?n:1e4,version:`${this.libName}:${tL}`}}async getVersion(){let e=await this.client;return await e.hget(this.keys.meta,"version")}get repeat(){return new Promise(async e=>{this._repeat||(this._repeat=new rF(this.name,Object.assign(Object.assign({},this.opts),{connection:await this.client})),this._repeat.on("error",e=>this.emit.bind(this,e))),e(this._repeat)})}get jobScheduler(){return new Promise(async e=>{this._jobScheduler||(this._jobScheduler=new rJ(this.name,Object.assign(Object.assign({},this.opts),{connection:await this.client})),this._jobScheduler.on("error",e=>this.emit.bind(this,e))),e(this._jobScheduler)})}async getGlobalConcurrency(){let e=await this.client,t=await e.hget(this.keys.meta,"concurrency");return t?Number(t):null}async setGlobalConcurrency(e){return(await this.client).hset(this.keys.meta,"concurrency",e)}async removeGlobalConcurrency(){return(await this.client).hdel(this.keys.meta,"concurrency")}async add(e,t,r){return this.trace(g.PRODUCER,"add",`${this.name}.${e}`,async(n,i)=>{var a;!i||(null==(a=null==r?void 0:r.telemetry)?void 0:a.omitContext)||(r=Object.assign(Object.assign({},r),{telemetry:{metadata:i}}));let s=await this.addJob(e,t,r);return null==n||n.setAttributes({[b.JobName]:e,[b.JobId]:s.id}),s})}async addJob(e,t,r){if(r&&r.repeat){if(r.repeat.endDate&&+new Date(r.repeat.endDate)<Date.now())throw Error("End date must be greater than current timestamp");return(await this.repeat).updateRepeatableJob(e,t,Object.assign(Object.assign({},this.jobsOpts),r),{override:!0})}{let n=null==r?void 0:r.jobId;if("0"==n||(null==n?void 0:n.startsWith("0:")))throw Error("JobId cannot be '0' or start with 0:");let i=await this.Job.create(this,e,t,Object.assign(Object.assign(Object.assign({},this.jobsOpts),r),{jobId:n}));return this.emit("waiting",i),i}}async addBulk(e){return this.trace(g.PRODUCER,"addBulk",this.name,async(t,r)=>(t&&t.setAttributes({[b.BulkNames]:e.map(e=>e.name),[b.BulkCount]:e.length}),await this.Job.createBulk(this,e.map(e=>{var t,n,i,a,s,o;let l=null==(t=e.opts)?void 0:t.telemetry;if(r){let t=null==(i=null==(n=e.opts)?void 0:n.telemetry)?void 0:i.omitContext,o=(null==(s=null==(a=e.opts)?void 0:a.telemetry)?void 0:s.metadata)||!t&&r;(o||t)&&(l={metadata:o,omitContext:t})}return{name:e.name,data:e.data,opts:Object.assign(Object.assign(Object.assign({},this.jobsOpts),e.opts),{jobId:null==(o=e.opts)?void 0:o.jobId,telemetry:l})}}))))}async upsertJobScheduler(e,t,r){var n,i;if(t.endDate&&+new Date(t.endDate)<Date.now())throw Error("End date must be greater than current timestamp");return(await this.jobScheduler).upsertJobScheduler(e,t,null!=(n=null==r?void 0:r.name)?n:e,null!=(i=null==r?void 0:r.data)?i:{},Object.assign(Object.assign({},this.jobsOpts),null==r?void 0:r.opts),{override:!0})}async pause(){await this.trace(g.INTERNAL,"pause",this.name,async()=>{await this.scripts.pause(!0),this.emit("paused")})}async close(){await this.trace(g.INTERNAL,"close",this.name,async()=>{!this.closing&&this._repeat&&await this._repeat.close(),await super.close()})}async rateLimit(e){await this.trace(g.INTERNAL,"rateLimit",this.name,async t=>{null==t||t.setAttributes({[b.QueueRateLimit]:e}),await this.client.then(t=>t.set(this.keys.limiter,Number.MAX_SAFE_INTEGER,"PX",e))})}async resume(){await this.trace(g.INTERNAL,"resume",this.name,async()=>{await this.scripts.pause(!1),this.emit("resumed")})}async isPaused(){let e=await this.client;return 1===await e.hexists(this.keys.meta,"paused")}isMaxed(){return this.scripts.isMaxed()}async getRepeatableJobs(e,t,r){return(await this.repeat).getRepeatableJobs(e,t,r)}async getJobScheduler(e){return(await this.jobScheduler).getScheduler(e)}async getJobSchedulers(e,t,r){return(await this.jobScheduler).getJobSchedulers(e,t,r)}async getJobSchedulersCount(){return(await this.jobScheduler).getSchedulersCount()}async removeRepeatable(e,t,r){return this.trace(g.INTERNAL,"removeRepeatable",`${this.name}.${e}`,async n=>{null==n||n.setAttributes({[b.JobName]:e,[b.JobId]:r});let i=await this.repeat;return!await i.removeRepeatable(e,t,r)})}async removeJobScheduler(e){let t=await this.jobScheduler;return!await t.removeJobScheduler(e)}async removeDebounceKey(e){return this.trace(g.INTERNAL,"removeDebounceKey",`${this.name}`,async t=>{null==t||t.setAttributes({[b.JobKey]:e});let r=await this.client;return await r.del(`${this.keys.de}:${e}`)})}async removeDeduplicationKey(e){return this.trace(g.INTERNAL,"removeDeduplicationKey",`${this.name}`,async t=>(null==t||t.setAttributes({[b.DeduplicationKey]:e}),(await this.client).del(`${this.keys.de}:${e}`)))}async removeRateLimitKey(){return(await this.client).del(this.keys.limiter)}async removeRepeatableByKey(e){return this.trace(g.INTERNAL,"removeRepeatableByKey",`${this.name}`,async t=>{null==t||t.setAttributes({[b.JobKey]:e});let r=await this.repeat;return!await r.removeRepeatableByKey(e)})}async remove(e,{removeChildren:t=!0}={}){return this.trace(g.INTERNAL,"remove",this.name,async r=>(null==r||r.setAttributes({[b.JobId]:e,[b.JobOptions]:JSON.stringify({removeChildren:t})}),await this.scripts.remove(e,t)))}async updateJobProgress(e,t){await this.trace(g.INTERNAL,"updateJobProgress",this.name,async r=>{null==r||r.setAttributes({[b.JobId]:e,[b.JobProgress]:JSON.stringify(t)}),await this.scripts.updateProgress(e,t)})}async addJobLog(e,t,r){return tY.addJobLog(this,e,t,r)}async drain(e=!1){await this.trace(g.INTERNAL,"drain",this.name,async t=>{null==t||t.setAttributes({[b.QueueDrainDelay]:e}),await this.scripts.drain(e)})}async clean(e,t,r="completed"){return this.trace(g.INTERNAL,"clean",this.name,async n=>{let i=t||1/0,a=Math.min(1e4,i),s=Date.now()-e,o=0,l=[],d="waiting"===r?"wait":r;for(;o<i;){let e=await this.scripts.cleanJobsInSet(d,s,a);if(this.emit("cleaned",e,d),o+=e.length,l.push(...e),e.length<a)break}return null==n||n.setAttributes({[b.QueueGrace]:e,[b.JobType]:r,[b.QueueCleanLimit]:i,[b.JobIds]:l}),l})}async obliterate(e){await this.trace(g.INTERNAL,"obliterate",this.name,async()=>{await this.pause();let t=0;do t=await this.scripts.obliterate(Object.assign({force:!1,count:1e3},e));while(t)})}async retryJobs(e={}){await this.trace(g.PRODUCER,"retryJobs",this.name,async t=>{null==t||t.setAttributes({[b.QueueOptions]:JSON.stringify(e)});let r=0;do r=await this.scripts.retryJobs(e.state,e.count,e.timestamp);while(r)})}async promoteJobs(e={}){await this.trace(g.INTERNAL,"promoteJobs",this.name,async t=>{null==t||t.setAttributes({[b.QueueOptions]:JSON.stringify(e)});let r=0;do r=await this.scripts.promoteJobs(e.count);while(r)})}async trimEvents(e){return this.trace(g.INTERNAL,"trimEvents",this.name,async t=>{null==t||t.setAttributes({[b.QueueEventMaxLength]:e});let r=await this.client;return await r.xtrim(this.keys.events,"MAXLEN","~",e)})}async removeDeprecatedPriorityKey(){return(await this.client).del(this.toKey("priority"))}}("pipeline-processing",{connection:rB,defaultJobOptions:{removeOnComplete:100,removeOnFail:50,attempts:3,backoff:{type:"exponential",delay:2e3}}});async function rU(t,r,n,i){let{pipelineExecutor:a}=await e.A(93475);return await a.execute(t,r,n,i)}async function r$(t,r,n){let{prisma:i}=await e.A(22117),a={status:r,..."COMPLETED"===r&&{finishedAt:new Date},..."FAILED"===r&&{finishedAt:new Date}};n&&("FAILED"===r?a.logs={push:{timestamp:new Date,level:"error",message:"Pipeline execution failed",data:n}}:a.logs={push:{timestamp:new Date,level:"info",message:"Pipeline execution completed",data:n}}),await i.run.update({where:{id:t},data:a})}let rQ={addPipelineJob:async(e,t,r,n,i,a)=>await rW.add(`pipeline-${r}`,{runId:e,tenderId:t,pipelineName:r,config:n,parameters:i},{priority:a?.priority||0,delay:a?.delay||0}),async getJobStatus(e){let t=await tY.fromId(rW,e);return t?{id:t.id,name:t.name,data:t.data,progress:t.progress,returnValue:t.returnvalue,failedReason:t.failedReason,processedOn:t.processedOn,finishedOn:t.finishedOn,timestamp:t.timestamp}:null},async cancelJob(e){let t=await tY.fromId(rW,e);t&&await t.remove()},async getQueueStats(){let e=await rW.getWaiting(),t=await rW.getActive(),r=await rW.getCompleted(),n=await rW.getFailed(),i=await rW.getDelayed();return{waiting:e.length,active:t.length,completed:r.length,failed:n.length,delayed:i.length}},async retryFailedJobs(){for(let e of(await rW.getFailed()))await e.retry()},async cleanQueue(){await rW.clean(864e5,100,"completed"),await rW.clean(6048e5,50,"failed")}};{let e=new class e extends rN{static RateLimitError(){return new eh}constructor(e,t,r,n){if(super(e,Object.assign(Object.assign({drainDelay:5,concurrency:1,lockDuration:3e4,maxStalledCount:1,stalledInterval:3e4,autorun:!0,runRetryDelay:15e3},r),{blockingConnection:!0}),n),this.abortDelayController=null,this.blockUntil=0,this.drained=!1,this.extendLocksTimer=null,this.limitUntil=0,this.waiting=null,this.running=!1,this.mainLoopRunning=null,!r||!r.connection)throw Error("Worker requires a connection");if("number"!=typeof this.opts.maxStalledCount||this.opts.maxStalledCount<0)throw Error("maxStalledCount must be greater or equal than 0");if("number"!=typeof this.opts.stalledInterval||this.opts.stalledInterval<=0)throw Error("stalledInterval must be greater than 0");if("number"!=typeof this.opts.drainDelay||this.opts.drainDelay<=0)throw Error("drainDelay must be greater than 0");if(this.concurrency=this.opts.concurrency,this.opts.lockRenewTime=this.opts.lockRenewTime||this.opts.lockDuration/2,this.id=eE(),t){if("function"==typeof t)this.processFn=t;else{if(t instanceof rY.URL){if(!rq.existsSync(t))throw Error(`URL ${t} does not exist in the local file system`);t=t.href}else{let e=t+([".js",".ts",".flow",".cjs"].includes(z.extname(t))?"":".js");if(!rq.existsSync(e))throw Error(`File ${e} does not exist`)}let e=z.dirname(module.filename||"/ROOT/node_modules/bullmq/dist/esm/classes/worker.js"),r=z.join(e,"main-worker.js"),n=z.join(e,"main.js"),i=this.opts.useWorkerThreads?r:n;try{rq.statSync(i)}catch(t){let e=this.opts.useWorkerThreads?"main-worker.js":"main.js";i=z.join(process.cwd(),`dist/cjs/classes/${e}`),rq.statSync(i)}this.childPool=new B({mainFile:i,useWorkerThreads:this.opts.useWorkerThreads,workerForkOptions:this.opts.workerForkOptions,workerThreadsOptions:this.opts.workerThreadsOptions}),this.processFn=((e,t)=>async function(r,n){let i,a,s;try{let o=new Promise((o,l)=>{(async()=>{try{s=(e,t)=>{l(Error("Unexpected exit code: "+e+" signal: "+t))},(i=await t.retain(e)).on("exit",s),a=async e=>{var t,n,a,s,d;try{switch(e.cmd){case m.Completed:o(e.value);break;case m.Failed:case m.Error:{let t=Error();Object.assign(t,e.value),l(t);break}case m.Progress:await r.updateProgress(e.value);break;case m.Log:await r.log(e.value);break;case m.MoveToDelayed:await r.moveToDelayed(null==(t=e.value)?void 0:t.timestamp,null==(n=e.value)?void 0:n.token);break;case m.MoveToWait:await r.moveToWait(null==(a=e.value)?void 0:a.token);break;case m.MoveToWaitingChildren:{let t=await r.moveToWaitingChildren(null==(s=e.value)?void 0:s.token,null==(d=e.value)?void 0:d.opts);i.send({requestId:e.requestId,cmd:h.MoveToWaitingChildrenResponse,value:t})}break;case m.Update:await r.updateData(e.value);break;case m.GetChildrenValues:{let t=await r.getChildrenValues();i.send({requestId:e.requestId,cmd:h.GetChildrenValuesResponse,value:t})}break;case m.GetIgnoredChildrenFailures:{let t=await r.getIgnoredChildrenFailures();i.send({requestId:e.requestId,cmd:h.GetIgnoredChildrenFailuresResponse,value:t})}}}catch(e){l(e)}},i.on("message",a),i.send({cmd:h.Start,job:r.asJSONSandbox(),token:n})}catch(e){l(e)}})()});return await o,o}finally{i&&(i.off("message",a),i.off("exit",s),null===i.exitCode&&null===i.signalCode&&t.release(i))}})(t,this.childPool).bind(this)}this.opts.autorun&&this.run().catch(e=>this.emit("error",e))}let i=this.clientName()+(this.opts.name?`:w:${this.opts.name}`:"");this.blockingConnection=new rR(ei(r.connection)?r.connection.duplicate({connectionName:i}):Object.assign(Object.assign({},r.connection),{connectionName:i}),{shared:!1,blocking:!0,skipVersionCheck:r.skipVersionCheck}),this.blockingConnection.on("error",e=>this.emit("error",e)),this.blockingConnection.on("ready",()=>setTimeout(()=>this.emit("ready"),0))}emit(e,...t){return super.emit(e,...t)}off(e,t){return super.off(e,t),this}on(e,t){return super.on(e,t),this}once(e,t){return super.once(e,t),this}callProcessJob(e,t){return this.processFn(e,t)}createJob(e,t){return this.Job.fromJSON(this,e,t)}async waitUntilReady(){return await super.waitUntilReady(),this.blockingConnection.client}set concurrency(e){if("number"!=typeof e||e<1||!isFinite(e))throw Error("concurrency must be a finite number greater than 0");this._concurrency=e}get concurrency(){return this._concurrency}get repeat(){return new Promise(async e=>{if(!this._repeat){let e=await this.client;this._repeat=new rF(this.name,Object.assign(Object.assign({},this.opts),{connection:e})),this._repeat.on("error",e=>this.emit.bind(this,e))}e(this._repeat)})}get jobScheduler(){return new Promise(async e=>{if(!this._jobScheduler){let e=await this.client;this._jobScheduler=new rJ(this.name,Object.assign(Object.assign({},this.opts),{connection:e})),this._jobScheduler.on("error",e=>this.emit.bind(this,e))}e(this._jobScheduler)})}async run(){if(!this.processFn)throw Error("No process function is defined.");if(this.running)throw Error("Worker is already running.");try{if(this.running=!0,this.closing||this.paused)return;await this.startStalledCheckTimer();let e=await this.client,t=await this.blockingConnection.client;this.mainLoopRunning=this.mainLoop(e,t),await this.mainLoopRunning}finally{this.running=!1}}async waitForRateLimit(){var e;let t=this.limitUntil;if(t>Date.now()){null==(e=this.abortDelayController)||e.abort(),this.abortDelayController=new rz.AbortController;let r=this.getRateLimitDelay(t-Date.now());await this.delay(r,this.abortDelayController)}}async mainLoop(e,t){let r=new P,n=new Set;this.startLockExtenderTimer(n);let i=0;for(;!this.closing&&!this.paused||r.numTotal()>0;){let a;for(;!this.closing&&!this.paused&&!this.waiting&&r.numTotal()<this._concurrency&&!this.isRateLimited();){let n=`${this.id}:${i++}`,a=this.retryIfFailed(()=>this._getNextJob(e,t,n,{block:!0}),this.opts.runRetryDelay);if(r.add(a),this.waiting&&r.numTotal()>1||!await a&&r.numTotal()>1||this.blockUntil)break}do a=await r.fetch();while(!a&&r.numQueued()>0)if(a){let e=a.token;r.add(this.retryIfFailed(()=>this.processJob(a,e,()=>r.numTotal()<=this._concurrency,n),this.opts.runRetryDelay))}else 0===r.numQueued()&&await this.waitForRateLimit()}}async getNextJob(e,{block:t=!0}={}){var r,n;let i=await this._getNextJob(await this.client,await this.blockingConnection.client,e,{block:t});return this.trace(g.INTERNAL,"getNextJob",this.name,async e=>(null==e||e.setAttributes({[b.WorkerId]:this.id,[b.QueueName]:this.name,[b.WorkerName]:this.opts.name,[b.WorkerOptions]:JSON.stringify({block:t}),[b.JobId]:null==i?void 0:i.id}),i),null==(n=null==(r=null==i?void 0:i.opts)?void 0:r.telemetry)?void 0:n.metadata)}async _getNextJob(e,t,r,{block:n=!0}={}){if(!this.paused&&!this.closing){if(this.drained&&n&&!this.limitUntil&&!this.waiting){this.waiting=this.waitForJob(t,this.blockUntil);try{if(this.blockUntil=await this.waiting,this.blockUntil<=0||this.blockUntil-Date.now()<1)return await this.moveToActive(e,r,this.opts.name)}catch(e){if(!(this.paused||this.closing)&&eo(e))throw e}finally{this.waiting=null}}else if(!this.isRateLimited())return this.moveToActive(e,r,this.opts.name)}}async rateLimit(e){await this.trace(g.INTERNAL,"rateLimit",this.name,async t=>{null==t||t.setAttributes({[b.WorkerId]:this.id,[b.WorkerRateLimit]:e}),await this.client.then(t=>t.set(this.keys.limiter,Number.MAX_SAFE_INTEGER,"PX",e))})}get minimumBlockTimeout(){return this.blockingConnection.capabilities.canBlockFor1Ms?.001:.002}isRateLimited(){return this.limitUntil>Date.now()}async moveToActive(e,t,r){let[n,i,a,s]=await this.scripts.moveToActive(e,t,r);return this.updateDelays(a,s),this.nextJobFromJobData(n,i,t)}async waitForJob(e,t){let r;if(this.paused)return 1/0;try{if(!this.closing&&!this.isRateLimited()){let n=this.getBlockTimeout(t);if(n>0){n=this.blockingConnection.capabilities.canDoubleTimeout?n:Math.ceil(n),r=setTimeout(async()=>{e.disconnect(!this.closing)},1e3*n+1e3),this.updateDelays();let i=await e.bzpopmin(this.keys.marker,n);if(i){let[e,r,n]=i;if(r){let e=parseInt(n);if(t&&e>t)return t;return e}}}return 0}}catch(e){eo(e)&&this.emit("error",e),this.closing||await this.delay()}finally{clearTimeout(r)}return 1/0}getBlockTimeout(e){let t=this.opts;if(!e)return Math.max(t.drainDelay,this.minimumBlockTimeout);{let t=e-Date.now();return t<=0?t:t<1e3*this.minimumBlockTimeout?this.minimumBlockTimeout:Math.min(t/1e3,10)}}getRateLimitDelay(e){return Math.min(e,3e4)}async delay(e,t){await ee(e||100,t)}updateDelays(e=0,t=0){let r=Math.max(e,0);r>0?this.limitUntil=Date.now()+r:this.limitUntil=0,this.blockUntil=Math.max(t,0)||0}async nextJobFromJobData(e,t,r){if(e){this.drained=!1;let n=this.createJob(e,t);if(n.token=r,n.opts.repeat&&!n.nextRepeatableJobId)if(n.repeatJobKey&&n.repeatJobKey.split(":").length<5){let e=await this.jobScheduler;await e.upsertJobScheduler(n.repeatJobKey,n.opts.repeat,n.name,n.data,n.opts,{override:!1,producerId:n.id})}else{let e=await this.repeat;await e.updateRepeatableJob(n.name,n.data,n.opts,{override:!1})}return n}this.drained||(this.emit("drained"),this.drained=!0)}async processJob(e,t,r=()=>!0,n){var i,a;let s=null==(a=null==(i=e.opts)?void 0:i.telemetry)?void 0:a.metadata;return this.trace(g.CONSUMER,"process",this.name,async i=>{null==i||i.setAttributes({[b.WorkerId]:this.id,[b.WorkerName]:this.opts.name,[b.JobId]:e.id,[b.JobName]:e.name,[b.JobAttemptsMade]:e.attemptsMade}),this.emit("active",e,"waiting");let a=Date.now(),s={job:e,ts:a};try{if(e.deferredFailure)return await this.handleFailed(new ey(e.deferredFailure),e,t,r,n,s,i);n.add(s);let a=await this.callProcessJob(e,t);return await this.handleCompleted(a,e,t,r,n,s,i)}catch(a){return await this.handleFailed(a,e,t,r,n,s,i)}finally{null==i||i.setAttributes({[b.JobFinishedTimestamp]:Date.now(),[b.JobProcessedTimestamp]:a})}},s)}async handleCompleted(e,t,r,n=()=>!0,i,a,s){if(i.delete(a),!this.connection.closing){let i=await t.moveToCompleted(e,r,n()&&!(this.closing||this.paused));this.emit("completed",t,e,"active"),null==s||s.addEvent("job completed",{[b.JobResult]:JSON.stringify(e)});let[a,o,l,d]=i||[];return this.updateDelays(l,d),this.nextJobFromJobData(a,o,r)}}async handleFailed(e,t,r,n=()=>!0,i,a,s){if(i.delete(a),!this.connection.closing)try{if(e.message==ep){let e=await this.moveLimitedBackToWait(t,r);this.limitUntil=e>0?Date.now()+e:0;return}if(e instanceof eu||"DelayedError"==e.name||e instanceof ef||"WaitingError"==e.name||e instanceof em||"WaitingChildrenError"==e.name)return;let i=await t.moveToFailed(e,r,n()&&!(this.closing||this.paused));if(this.emit("failed",t,e,"active"),null==s||s.addEvent("job failed",{[b.JobFailedReason]:e.message}),i){let[e,t,n,a]=i;return this.updateDelays(n,a),this.nextJobFromJobData(e,t,r)}}catch(e){this.emit("error",e),null==s||s.recordException(e.message)}}async pause(e){await this.trace(g.INTERNAL,"pause",this.name,async t=>{var r;null==t||t.setAttributes({[b.WorkerId]:this.id,[b.WorkerName]:this.opts.name,[b.WorkerDoNotWaitActive]:e}),this.paused||(this.paused=!0,e||await this.whenCurrentJobsFinished(),null==(r=this.stalledCheckStopper)||r.call(this),this.emit("paused"))})}resume(){this.running||this.trace(g.INTERNAL,"resume",this.name,e=>{null==e||e.setAttributes({[b.WorkerId]:this.id,[b.WorkerName]:this.opts.name}),this.paused=!1,this.processFn&&this.run(),this.emit("resumed")})}isPaused(){return!!this.paused}isRunning(){return this.running}async close(e=!1){return this.closing?this.closing:(this.closing=(async()=>{await this.trace(g.INTERNAL,"close",this.name,async t=>{var r,n;for(let n of(null==t||t.setAttributes({[b.WorkerId]:this.id,[b.WorkerName]:this.opts.name,[b.WorkerForceClose]:e}),this.emit("closing","closing queue"),null==(r=this.abortDelayController)||r.abort(),[()=>e||this.whenCurrentJobsFinished(!1),()=>{var e;return null==(e=this.childPool)?void 0:e.clean()},()=>this.blockingConnection.close(e),()=>this.connection.close(e)]))try{await n()}catch(e){this.emit("error",e)}clearTimeout(this.extendLocksTimer),null==(n=this.stalledCheckStopper)||n.call(this),this.closed=!0,this.emit("closed")})})(),await this.closing)}async startStalledCheckTimer(){this.opts.skipStalledCheck||this.closing||await this.trace(g.INTERNAL,"startStalledCheckTimer",this.name,async e=>{null==e||e.setAttributes({[b.WorkerId]:this.id,[b.WorkerName]:this.opts.name}),this.stalledChecker().catch(e=>{this.emit("error",e)})})}async stalledChecker(){for(;!(this.closing||this.paused);){try{await this.checkConnectionError(()=>this.moveStalledJobsToWait())}catch(e){this.emit("error",e)}await new Promise(e=>{let t=setTimeout(e,this.opts.stalledInterval);this.stalledCheckStopper=()=>{clearTimeout(t),e()}})}}startLockExtenderTimer(e){!this.opts.skipLockRenewal&&(clearTimeout(this.extendLocksTimer),this.closed||(this.extendLocksTimer=setTimeout(async()=>{let t=Date.now(),r=[];for(let n of e){let{job:e,ts:i}=n;if(!i){n.ts=t;continue}i+this.opts.lockRenewTime/2<t&&(n.ts=t,r.push(e))}try{r.length&&await this.extendLocks(r)}catch(e){this.emit("error",e)}this.startLockExtenderTimer(e)},this.opts.lockRenewTime/2)))}async whenCurrentJobsFinished(e=!0){this.waiting?await this.blockingConnection.disconnect(e):e=!1,this.mainLoopRunning&&await this.mainLoopRunning,e&&await this.blockingConnection.reconnect()}async retryIfFailed(e,t){for(;;)try{return await e()}catch(e){if(this.emit("error",e),!t)return;await this.delay(t)}}async extendLocks(e){await this.trace(g.INTERNAL,"extendLocks",this.name,async t=>{null==t||t.setAttributes({[b.WorkerId]:this.id,[b.WorkerName]:this.opts.name,[b.WorkerJobsToExtendLocks]:e.map(e=>e.id)});try{for(let t of(await this.scripts.extendLocks(e.map(e=>e.id),e.map(e=>e.token),this.opts.lockDuration)))this.emit("error",Error(`could not renew lock for job ${t}`))}catch(e){this.emit("error",e)}})}async moveStalledJobsToWait(){await this.trace(g.INTERNAL,"moveStalledJobsToWait",this.name,async e=>{let t=await this.scripts.moveStalledJobsToWait();null==e||e.setAttributes({[b.WorkerId]:this.id,[b.WorkerName]:this.opts.name,[b.WorkerStalledJobs]:t}),t.forEach(t=>{null==e||e.addEvent("job stalled",{[b.JobId]:t}),this.emit("stalled",t,"active")})})}moveLimitedBackToWait(e,t){return e.moveToWait(t)}}("pipeline-processing",async e=>{let{runId:t,tenderId:r,pipelineName:n,config:i,parameters:a}=e.data;try{console.log(`Starting pipeline ${n} for tender ${r}`),await r$(t,"RUNNING");let e=await rU(t,r,i,a);return await r$(t,"COMPLETED",e),console.log(`Pipeline ${n} completed for tender ${r}`),e}catch(e){throw console.error(`Pipeline ${n} failed for tender ${r}:`,e),await r$(t,"FAILED",{error:e.message}),e}},{connection:rB,concurrency:5});process.on("SIGINT",async()=>{console.log("Shutting down pipeline worker..."),await e.close(),await rB.disconnect(),process.exit(0)})}var rH={isNothing:function(e){return null==e},isObject:function(e){return"object"==typeof e&&null!==e},repeat:function(e,t){var r,n="";for(r=0;r<t;r+=1)n+=e;return n},isNegativeZero:function(e){return 0===e&&-1/0==1/e}};function rZ(e,t){var r="",n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(r+='in "'+e.mark.name+'" '),r+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(r+="\n\n"+e.mark.snippet),n+" "+r):n}function rX(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=rZ(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack||""}function r0(e,t,r,n,i){var a="",s="",o=Math.floor(i/2)-1;return n-t>o&&(t=n-o+(a=" ... ").length),r-n>o&&(r=n+o-(s=" ...").length),{str:a+e.slice(t,r).replace(/\t/g,"→")+s,pos:n-t+a.length}}function r1(e,t){return rH.repeat(" ",t-e.length)+e}rX.prototype=Object.create(Error.prototype),rX.prototype.constructor=rX,rX.prototype.toString=function(e){return this.name+": "+rZ(this,e)};var r2=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var r=/\r?\n|\r|\0/g,n=[0],i=[],a=-1;s=r.exec(e.buffer);)i.push(s.index),n.push(s.index+s[0].length),e.position<=s.index&&a<0&&(a=n.length-2);a<0&&(a=n.length-1);var s,o,l,d="",c=Math.min(e.line+t.linesAfter,i.length).toString().length,u=t.maxLength-(t.indent+c+3);for(o=1;o<=t.linesBefore&&!(a-o<0);o++)l=r0(e.buffer,n[a-o],i[a-o],e.position-(n[a]-n[a-o]),u),d=rH.repeat(" ",t.indent)+r1((e.line-o+1).toString(),c)+" | "+l.str+"\n"+d;for(l=r0(e.buffer,n[a],i[a],e.position,u),d+=rH.repeat(" ",t.indent)+r1((e.line+1).toString(),c)+" | "+l.str+"\n"+rH.repeat("-",t.indent+c+3+l.pos)+"^\n",o=1;o<=t.linesAfter&&!(a+o>=i.length);o++)l=r0(e.buffer,n[a+o],i[a+o],e.position-(n[a]-n[a+o]),u),d+=rH.repeat(" ",t.indent)+r1((e.line+o+1).toString(),c)+" | "+l.str+"\n";return d.replace(/\n$/,"")},r3=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],r6=["scalar","sequence","mapping"],r4=function(e,t){var r,n;if(Object.keys(t=t||{}).forEach(function(t){if(-1===r3.indexOf(t))throw new rX('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=(r=t.styleAliases||null,n={},null!==r&&Object.keys(r).forEach(function(e){r[e].forEach(function(t){n[String(t)]=e})}),n),-1===r6.indexOf(this.kind))throw new rX('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function r5(e,t){var r=[];return e[t].forEach(function(e){var t=r.length;r.forEach(function(r,n){r.tag===e.tag&&r.kind===e.kind&&r.multi===e.multi&&(t=n)}),r[t]=e}),r}function r8(e){return this.extend(e)}r8.prototype.extend=function(e){var t=[],r=[];if(e instanceof r4)r.push(e);else if(Array.isArray(e))r=r.concat(e);else if(e&&(Array.isArray(e.implicit)||Array.isArray(e.explicit)))e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(r=r.concat(e.explicit));else throw new rX("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(e){if(!(e instanceof r4))throw new rX("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new rX("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new rX("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(e){if(!(e instanceof r4))throw new rX("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(r8.prototype);return n.implicit=(this.implicit||[]).concat(t),n.explicit=(this.explicit||[]).concat(r),n.compiledImplicit=r5(n,"implicit"),n.compiledExplicit=r5(n,"explicit"),n.compiledTypeMap=function(){var e,t,r={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function n(e){e.multi?(r.multi[e.kind].push(e),r.multi.fallback.push(e)):r[e.kind][e.tag]=r.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(n);return r}(n.compiledImplicit,n.compiledExplicit),n};var r9=new r8({explicit:[new r4("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),new r4("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),new r4("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}})]}),r7=new r4("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),ne=new r4("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"}),nt=new r4("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,r,n,i,a=e.length,s=0,o=!1;if(!a)return!1;if(("-"===(i=e[s])||"+"===i)&&(i=e[++s]),"0"===i){if(s+1===a)return!0;if("b"===(i=e[++s])){for(s++;s<a;s++)if("_"!==(i=e[s])){if("0"!==i&&"1"!==i)return!1;o=!0}return o&&"_"!==i}if("x"===i){for(s++;s<a;s++)if("_"!==(i=e[s])){if(!(48<=(t=e.charCodeAt(s))&&t<=57||65<=t&&t<=70||97<=t&&t<=102))return!1;o=!0}return o&&"_"!==i}if("o"===i){for(s++;s<a;s++)if("_"!==(i=e[s])){if(!(48<=(r=e.charCodeAt(s))&&r<=55))return!1;o=!0}return o&&"_"!==i}}if("_"===i)return!1;for(;s<a;s++)if("_"!==(i=e[s])){if(!(48<=(n=e.charCodeAt(s))&&n<=57))return!1;o=!0}return!!o&&"_"!==i},construct:function(e){var t,r=e,n=1;if(-1!==r.indexOf("_")&&(r=r.replace(/_/g,"")),("-"===(t=r[0])||"+"===t)&&("-"===t&&(n=-1),t=(r=r.slice(1))[0]),"0"===r)return 0;if("0"===t){if("b"===r[1])return n*parseInt(r.slice(2),2);if("x"===r[1])return n*parseInt(r.slice(2),16);if("o"===r[1])return n*parseInt(r.slice(2),8)}return n*parseInt(r,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!rH.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),nr=RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),nn=/^[-+]?[0-9]+e/,ni=new r4("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!!nr.test(e)&&"_"!==e[e.length-1]},construct:function(e){var t,r;return(r="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t)?1===r?1/0:-1/0:".nan"===t?NaN:r*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||rH.isNegativeZero(e))},represent:function(e,t){var r;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(1/0===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(-1/0===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(rH.isNegativeZero(e))return"-0.0";return r=e.toString(10),nn.test(r)?r.replace("e",".e"):r},defaultStyle:"lowercase"}),na=r9.extend({implicit:[r7,ne,nt,ni]}),ns=RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),no=RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"),nl=new r4("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==ns.exec(e)||null!==no.exec(e))},construct:function(e){var t,r,n,i,a,s,o,l,d=0,c=null;if(null===(t=ns.exec(e))&&(t=no.exec(e)),null===t)throw Error("Date resolve error");if(r=+t[1],n=t[2]-1,i=+t[3],!t[4])return new Date(Date.UTC(r,n,i));if(a=+t[4],s=+t[5],o=+t[6],t[7]){for(d=t[7].slice(0,3);d.length<3;)d+="0";d*=1}return t[9]&&(c=(60*t[10]+ +(t[11]||0))*6e4,"-"===t[9]&&(c=-c)),l=new Date(Date.UTC(r,n,i,a,s,o,d)),c&&l.setTime(l.getTime()-c),l},instanceOf:Date,represent:function(e){return e.toISOString()}}),nd=new r4("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),nc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r",nu=new r4("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,r,n=0,i=e.length;for(r=0;r<i;r++)if(!((t=nc.indexOf(e.charAt(r)))>64)){if(t<0)return!1;n+=6}return n%8==0},construct:function(e){var t,r,n=e.replace(/[\r\n=]/g,""),i=n.length,a=0,s=[];for(t=0;t<i;t++)t%4==0&&t&&(s.push(a>>16&255),s.push(a>>8&255),s.push(255&a)),a=a<<6|nc.indexOf(n.charAt(t));return 0==(r=i%4*6)?(s.push(a>>16&255),s.push(a>>8&255),s.push(255&a)):18===r?(s.push(a>>10&255),s.push(a>>2&255)):12===r&&s.push(a>>4&255),new Uint8Array(s)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,r,n="",i=0,a=e.length;for(t=0;t<a;t++)t%3==0&&t&&(n+=nc[i>>18&63],n+=nc[i>>12&63],n+=nc[i>>6&63],n+=nc[63&i]),i=(i<<8)+e[t];return 0==(r=a%3)?(n+=nc[i>>18&63],n+=nc[i>>12&63],n+=nc[i>>6&63],n+=nc[63&i]):2===r?(n+=nc[i>>10&63],n+=nc[i>>4&63],n+=nc[i<<2&63],n+=nc[64]):1===r&&(n+=nc[i>>2&63],n+=nc[i<<4&63],n+=nc[64],n+=nc[64]),n}}),np=Object.prototype.hasOwnProperty,nh=Object.prototype.toString,ny=new r4("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,r,n,i,a,s=[];for(t=0,r=e.length;t<r;t+=1){if(n=e[t],a=!1,"[object Object]"!==nh.call(n))return!1;for(i in n)if(np.call(n,i))if(a)return!1;else a=!0;if(!a||-1!==s.indexOf(i))return!1;s.push(i)}return!0},construct:function(e){return null!==e?e:[]}}),nm=Object.prototype.toString,nf=new r4("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){var t,r,n,i,a;if(null===e)return!0;for(t=0,a=Array(e.length),r=e.length;t<r;t+=1){if(n=e[t],"[object Object]"!==nm.call(n)||1!==(i=Object.keys(n)).length)return!1;a[t]=[i[0],n[i[0]]]}return!0},construct:function(e){var t,r,n,i,a;if(null===e)return[];for(t=0,a=Array(e.length),r=e.length;t<r;t+=1)i=Object.keys(n=e[t]),a[t]=[i[0],n[i[0]]];return a}}),nb=Object.prototype.hasOwnProperty,ng=new r4("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){var t;if(null===e)return!0;for(t in e)if(nb.call(e,t)&&null!==e[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),nK=na.extend({implicit:[nl,nd],explicit:[nu,ny,nf,ng]}),nv=Object.prototype.hasOwnProperty,nS=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,nE=/[\x85\u2028\u2029]/,nk=/[,\[\]\{\}]/,nI=/^(?:!|!!|![a-z\-]+!)$/i,nw=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function nj(e){return Object.prototype.toString.call(e)}function nx(e){return 10===e||13===e}function nA(e){return 9===e||32===e}function nT(e){return 9===e||32===e||10===e||13===e}function nC(e){return 44===e||91===e||93===e||123===e||125===e}function nD(e){return 48===e?"\0":97===e?"\x07":98===e?"\b":116===e||9===e?"	":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"\x1b":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}for(var nO=Array(256),nR=Array(256),nM=0;nM<256;nM++)nO[nM]=+!!nD(nM),nR[nM]=nD(nM);function nP(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||nK,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function nN(e,t){var r={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return r.snippet=r2(r),new rX(t,r)}function nJ(e,t){throw nN(e,t)}function nL(e,t){e.onWarning&&e.onWarning.call(null,nN(e,t))}var n_={YAML:function(e,t,r){var n,i,a;null!==e.version&&nJ(e,"duplication of %YAML directive"),1!==r.length&&nJ(e,"YAML directive accepts exactly one argument"),null===(n=/^([0-9]+)\.([0-9]+)$/.exec(r[0]))&&nJ(e,"ill-formed argument of the YAML directive"),i=parseInt(n[1],10),a=parseInt(n[2],10),1!==i&&nJ(e,"unacceptable YAML version of the document"),e.version=r[0],e.checkLineBreaks=a<2,1!==a&&2!==a&&nL(e,"unsupported YAML version of the document")},TAG:function(e,t,r){var n,i;2!==r.length&&nJ(e,"TAG directive accepts exactly two arguments"),n=r[0],i=r[1],nI.test(n)||nJ(e,"ill-formed tag handle (first argument) of the TAG directive"),nv.call(e.tagMap,n)&&nJ(e,'there is a previously declared suffix for "'+n+'" tag handle'),nw.test(i)||nJ(e,"ill-formed tag prefix (second argument) of the TAG directive");try{i=decodeURIComponent(i)}catch(t){nJ(e,"tag prefix is malformed: "+i)}e.tagMap[n]=i}};function nF(e,t,r,n){var i,a,s,o;if(t<r){if(o=e.input.slice(t,r),n)for(i=0,a=o.length;i<a;i+=1)9===(s=o.charCodeAt(i))||32<=s&&s<=1114111||nJ(e,"expected valid JSON character");else nS.test(o)&&nJ(e,"the stream contains non-printable characters");e.result+=o}}function nV(e,t,r,n){var i,a,s,o;for(rH.isObject(r)||nJ(e,"cannot merge mappings; the provided source object is unacceptable"),s=0,o=(i=Object.keys(r)).length;s<o;s+=1)a=i[s],nv.call(t,a)||(t[a]=r[a],n[a]=!0)}function nG(e,t,r,n,i,a,s,o,l){var d,c;if(Array.isArray(i))for(d=0,c=(i=Array.prototype.slice.call(i)).length;d<c;d+=1)Array.isArray(i[d])&&nJ(e,"nested arrays are not supported inside keys"),"object"==typeof i&&"[object Object]"===nj(i[d])&&(i[d]="[object Object]");if("object"==typeof i&&"[object Object]"===nj(i)&&(i="[object Object]"),i=String(i),null===t&&(t={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(a))for(d=0,c=a.length;d<c;d+=1)nV(e,t,a[d],r);else nV(e,t,a,r);else!e.json&&!nv.call(r,i)&&nv.call(t,i)&&(e.line=s||e.line,e.lineStart=o||e.lineStart,e.position=l||e.position,nJ(e,"duplicated mapping key")),"__proto__"===i?Object.defineProperty(t,i,{configurable:!0,enumerable:!0,writable:!0,value:a}):t[i]=a,delete r[i];return t}function nq(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):nJ(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function nY(e,t,r){for(var n=0,i=e.input.charCodeAt(e.position);0!==i;){for(;nA(i);)9===i&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(t&&35===i)do i=e.input.charCodeAt(++e.position);while(10!==i&&13!==i&&0!==i)if(nx(i))for(nq(e),i=e.input.charCodeAt(e.position),n++,e.lineIndent=0;32===i;)e.lineIndent++,i=e.input.charCodeAt(++e.position);else break}return -1!==r&&0!==n&&e.lineIndent<r&&nL(e,"deficient indentation"),n}function nz(e){var t,r=e.position;return!!((45===(t=e.input.charCodeAt(r))||46===t)&&t===e.input.charCodeAt(r+1)&&t===e.input.charCodeAt(r+2)&&(r+=3,0===(t=e.input.charCodeAt(r))||nT(t)))||!1}function nB(e,t){1===t?e.result+=" ":t>1&&(e.result+=rH.repeat("\n",t-1))}function nW(e,t){var r,n,i=e.tag,a=e.anchor,s=[],o=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=s),n=e.input.charCodeAt(e.position);0!==n&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,nJ(e,"tab characters must not be used in indentation")),45===n&&nT(e.input.charCodeAt(e.position+1)));){if(o=!0,e.position++,nY(e,!0,-1)&&e.lineIndent<=t){s.push(null),n=e.input.charCodeAt(e.position);continue}if(r=e.line,nU(e,t,3,!1,!0),s.push(e.result),nY(e,!0,-1),n=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>t)&&0!==n)nJ(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break}return!!o&&(e.tag=i,e.anchor=a,e.kind="sequence",e.result=s,!0)}function nU(e,t,r,n,i){var a,s,o,l,d,c,u,p,h,y=1,m=!1,f=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=s=o=4===r||3===r,n&&nY(e,!0,-1)&&(m=!0,e.lineIndent>t?y=1:e.lineIndent===t?y=0:e.lineIndent<t&&(y=-1)),1===y)for(;function(e){var t,r,n,i,a=!1,s=!1;if(33!==(i=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&nJ(e,"duplication of a tag property"),60===(i=e.input.charCodeAt(++e.position))?(a=!0,i=e.input.charCodeAt(++e.position)):33===i?(s=!0,r="!!",i=e.input.charCodeAt(++e.position)):r="!",t=e.position,a){do i=e.input.charCodeAt(++e.position);while(0!==i&&62!==i)e.position<e.length?(n=e.input.slice(t,e.position),i=e.input.charCodeAt(++e.position)):nJ(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==i&&!nT(i);)33===i&&(s?nJ(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(t-1,e.position+1),nI.test(r)||nJ(e,"named tag handle cannot contain such characters"),s=!0,t=e.position+1)),i=e.input.charCodeAt(++e.position);n=e.input.slice(t,e.position),nk.test(n)&&nJ(e,"tag suffix cannot contain flow indicator characters")}n&&!nw.test(n)&&nJ(e,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch(t){nJ(e,"tag name is malformed: "+n)}return a?e.tag=n:nv.call(e.tagMap,r)?e.tag=e.tagMap[r]+n:"!"===r?e.tag="!"+n:"!!"===r?e.tag="tag:yaml.org,2002:"+n:nJ(e,'undeclared tag handle "'+r+'"'),!0}(e)||function(e){var t,r;if(38!==(r=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&nJ(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!nT(r)&&!nC(r);)r=e.input.charCodeAt(++e.position);return e.position===t&&nJ(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}(e);)nY(e,!0,-1)?(m=!0,o=a,e.lineIndent>t?y=1:e.lineIndent===t?y=0:e.lineIndent<t&&(y=-1)):o=!1;if(o&&(o=m||i),(1===y||4===r)&&(p=1===r||2===r?t:t+1,h=e.position-e.lineStart,1===y?o&&(nW(e,h)||function(e,t,r){var n,i,a,s,o,l,d,c=e.tag,u=e.anchor,p={},h=Object.create(null),y=null,m=null,f=null,b=!1,g=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=p),d=e.input.charCodeAt(e.position);0!==d;){if(b||-1===e.firstTabInLine||(e.position=e.firstTabInLine,nJ(e,"tab characters must not be used in indentation")),n=e.input.charCodeAt(e.position+1),a=e.line,(63===d||58===d)&&nT(n))63===d?(b&&(nG(e,p,h,y,m,null,s,o,l),y=m=f=null),g=!0,b=!0,i=!0):b?(b=!1,i=!0):nJ(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,d=n;else{if(s=e.line,o=e.lineStart,l=e.position,!nU(e,r,2,!1,!0))break;if(e.line===a){for(d=e.input.charCodeAt(e.position);nA(d);)d=e.input.charCodeAt(++e.position);if(58===d)nT(d=e.input.charCodeAt(++e.position))||nJ(e,"a whitespace character is expected after the key-value separator within a block mapping"),b&&(nG(e,p,h,y,m,null,s,o,l),y=m=f=null),g=!0,b=!1,i=!1,y=e.tag,m=e.result;else{if(!g)return e.tag=c,e.anchor=u,!0;nJ(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!g)return e.tag=c,e.anchor=u,!0;nJ(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}if((e.line===a||e.lineIndent>t)&&(b&&(s=e.line,o=e.lineStart,l=e.position),nU(e,t,4,!0,i)&&(b?m=e.result:f=e.result),b||(nG(e,p,h,y,m,f,s,o,l),y=m=f=null),nY(e,!0,-1),d=e.input.charCodeAt(e.position)),(e.line===a||e.lineIndent>t)&&0!==d)nJ(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return b&&nG(e,p,h,y,m,null,s,o,l),g&&(e.tag=c,e.anchor=u,e.kind="mapping",e.result=p),g}(e,h,p))||function(e,t){var r,n,i,a,s,o,l,d,c,u,p,h,y=!0,m=e.tag,f=e.anchor,b=Object.create(null);if(91===(h=e.input.charCodeAt(e.position)))s=93,d=!1,a=[];else{if(123!==h)return!1;s=125,d=!0,a={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=a),h=e.input.charCodeAt(++e.position);0!==h;){if(nY(e,!0,t),(h=e.input.charCodeAt(e.position))===s)return e.position++,e.tag=m,e.anchor=f,e.kind=d?"mapping":"sequence",e.result=a,!0;y?44===h&&nJ(e,"expected the node content, but found ','"):nJ(e,"missed comma between flow collection entries"),u=c=p=null,o=l=!1,63===h&&nT(e.input.charCodeAt(e.position+1))&&(o=l=!0,e.position++,nY(e,!0,t)),r=e.line,n=e.lineStart,i=e.position,nU(e,t,1,!1,!0),u=e.tag,c=e.result,nY(e,!0,t),h=e.input.charCodeAt(e.position),(l||e.line===r)&&58===h&&(o=!0,h=e.input.charCodeAt(++e.position),nY(e,!0,t),nU(e,t,1,!1,!0),p=e.result),d?nG(e,a,b,u,c,p,r,n,i):o?a.push(nG(e,null,b,u,c,p,r,n,i)):a.push(c),nY(e,!0,t),44===(h=e.input.charCodeAt(e.position))?(y=!0,h=e.input.charCodeAt(++e.position)):y=!1}nJ(e,"unexpected end of the stream within a flow collection")}(e,p)?f=!0:(s&&function(e,t){var r,n,i,a,s,o=1,l=!1,d=!1,c=t,u=0,p=!1;if(124===(s=e.input.charCodeAt(e.position)))i=!1;else{if(62!==s)return!1;i=!0}for(e.kind="scalar",e.result="";0!==s;)if(43===(s=e.input.charCodeAt(++e.position))||45===s)1===o?o=43===s?3:2:nJ(e,"repeat of a chomping mode identifier");else if((a=48<=(r=s)&&r<=57?r-48:-1)>=0)0===a?nJ(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):d?nJ(e,"repeat of an indentation width identifier"):(c=t+a-1,d=!0);else break;if(nA(s)){do s=e.input.charCodeAt(++e.position);while(nA(s))if(35===s)do s=e.input.charCodeAt(++e.position);while(!nx(s)&&0!==s)}for(;0!==s;){for(nq(e),e.lineIndent=0,s=e.input.charCodeAt(e.position);(!d||e.lineIndent<c)&&32===s;)e.lineIndent++,s=e.input.charCodeAt(++e.position);if(!d&&e.lineIndent>c&&(c=e.lineIndent),nx(s)){u++;continue}if(e.lineIndent<c){3===o?e.result+=rH.repeat("\n",l?1+u:u):1===o&&l&&(e.result+="\n");break}for(i?nA(s)?(p=!0,e.result+=rH.repeat("\n",l?1+u:u)):p?(p=!1,e.result+=rH.repeat("\n",u+1)):0===u?l&&(e.result+=" "):e.result+=rH.repeat("\n",u):e.result+=rH.repeat("\n",l?1+u:u),l=!0,d=!0,u=0,n=e.position;!nx(s)&&0!==s;)s=e.input.charCodeAt(++e.position);nF(e,n,e.position,!1)}return!0}(e,p)||function(e,t){var r,n,i;if(39!==(r=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,n=i=e.position;0!==(r=e.input.charCodeAt(e.position));)if(39===r){if(nF(e,n,e.position,!0),39!==(r=e.input.charCodeAt(++e.position)))return!0;n=e.position,e.position++,i=e.position}else nx(r)?(nF(e,n,i,!0),nB(e,nY(e,!1,t)),n=i=e.position):e.position===e.lineStart&&nz(e)?nJ(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position);nJ(e,"unexpected end of the stream within a single quoted scalar")}(e,p)||function(e,t){var r,n,i,a,s,o,l,d;if(34!==(o=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,r=n=e.position;0!==(o=e.input.charCodeAt(e.position));)if(34===o)return nF(e,r,e.position,!0),e.position++,!0;else if(92===o){if(nF(e,r,e.position,!0),nx(o=e.input.charCodeAt(++e.position)))nY(e,!1,t);else if(o<256&&nO[o])e.result+=nR[o],e.position++;else if((s=120===(l=o)?2:117===l?4:8*(85===l))>0){for(i=s,a=0;i>0;i--)(s=function(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}(o=e.input.charCodeAt(++e.position)))>=0?a=(a<<4)+s:nJ(e,"expected hexadecimal character");e.result+=(d=a)<=65535?String.fromCharCode(d):String.fromCharCode((d-65536>>10)+55296,(d-65536&1023)+56320),e.position++}else nJ(e,"unknown escape sequence");r=n=e.position}else nx(o)?(nF(e,r,n,!0),nB(e,nY(e,!1,t)),r=n=e.position):e.position===e.lineStart&&nz(e)?nJ(e,"unexpected end of the document within a double quoted scalar"):(e.position++,n=e.position);nJ(e,"unexpected end of the stream within a double quoted scalar")}(e,p)?f=!0:!function(e){var t,r,n;if(42!==(n=e.input.charCodeAt(e.position)))return!1;for(n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!nT(n)&&!nC(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&nJ(e,"name of an alias node must contain at least one character"),r=e.input.slice(t,e.position),nv.call(e.anchorMap,r)||nJ(e,'unidentified alias "'+r+'"'),e.result=e.anchorMap[r],nY(e,!0,-1),!0}(e)?function(e,t,r){var n,i,a,s,o,l,d,c,u=e.kind,p=e.result;if(nT(c=e.input.charCodeAt(e.position))||nC(c)||35===c||38===c||42===c||33===c||124===c||62===c||39===c||34===c||37===c||64===c||96===c||(63===c||45===c)&&(nT(n=e.input.charCodeAt(e.position+1))||r&&nC(n)))return!1;for(e.kind="scalar",e.result="",i=a=e.position,s=!1;0!==c;){if(58===c){if(nT(n=e.input.charCodeAt(e.position+1))||r&&nC(n))break}else if(35===c){if(nT(e.input.charCodeAt(e.position-1)))break}else if(e.position===e.lineStart&&nz(e)||r&&nC(c))break;else if(nx(c)){if(o=e.line,l=e.lineStart,d=e.lineIndent,nY(e,!1,-1),e.lineIndent>=t){s=!0,c=e.input.charCodeAt(e.position);continue}e.position=a,e.line=o,e.lineStart=l,e.lineIndent=d;break}s&&(nF(e,i,a,!1),nB(e,e.line-o),i=a=e.position,s=!1),nA(c)||(a=e.position+1),c=e.input.charCodeAt(++e.position)}return nF(e,i,a,!1),!!e.result||(e.kind=u,e.result=p,!1)}(e,p,1===r)&&(f=!0,null===e.tag&&(e.tag="?")):(f=!0,(null!==e.tag||null!==e.anchor)&&nJ(e,"alias node should not have any properties")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===y&&(f=o&&nW(e,h))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&nJ(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,d=e.implicitTypes.length;l<d;l+=1)if((u=e.implicitTypes[l]).resolve(e.result)){e.result=u.construct(e.result),e.tag=u.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(nv.call(e.typeMap[e.kind||"fallback"],e.tag))u=e.typeMap[e.kind||"fallback"][e.tag];else for(l=0,u=null,d=(c=e.typeMap.multi[e.kind||"fallback"]).length;l<d;l+=1)if(e.tag.slice(0,c[l].tag.length)===c[l].tag){u=c[l];break}u||nJ(e,"unknown tag !<"+e.tag+">"),null!==e.result&&u.kind!==e.kind&&nJ(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+u.kind+'", not "'+e.kind+'"'),u.resolve(e.result,e.tag)?(e.result=u.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):nJ(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||f}function n$(e,t){e=String(e),t=t||{},0!==e.length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var r=new nP(e,t),n=e.indexOf("\0");for(-1!==n&&(r.position=n,nJ(r,"null byte is not allowed in input")),r.input+="\0";32===r.input.charCodeAt(r.position);)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)!function(e){var t,r,n,i,a=e.position,s=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(i=e.input.charCodeAt(e.position))&&(nY(e,!0,-1),i=e.input.charCodeAt(e.position),!(e.lineIndent>0)&&37===i);){for(s=!0,i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!nT(i);)i=e.input.charCodeAt(++e.position);for(r=e.input.slice(t,e.position),n=[],r.length<1&&nJ(e,"directive name must not be less than one character in length");0!==i;){for(;nA(i);)i=e.input.charCodeAt(++e.position);if(35===i){do i=e.input.charCodeAt(++e.position);while(0!==i&&!nx(i))break}if(nx(i))break;for(t=e.position;0!==i&&!nT(i);)i=e.input.charCodeAt(++e.position);n.push(e.input.slice(t,e.position))}0!==i&&nq(e),nv.call(n_,r)?n_[r](e,r,n):nL(e,'unknown document directive "'+r+'"')}if(nY(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,nY(e,!0,-1)):s&&nJ(e,"directives end mark is expected"),nU(e,e.lineIndent-1,4,!1,!0),nY(e,!0,-1),e.checkLineBreaks&&nE.test(e.input.slice(a,e.position))&&nL(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&nz(e)){46===e.input.charCodeAt(e.position)&&(e.position+=3,nY(e,!0,-1));return}e.position<e.length-1&&nJ(e,"end of the stream or a document separator is expected")}(r);return r.documents}var nQ={loadAll:function(e,t,r){null!==t&&"object"==typeof t&&void 0===r&&(r=t,t=null);var n=n$(e,r);if("function"!=typeof t)return n;for(var i=0,a=n.length;i<a;i+=1)t(n[i])},load:function(e,t){var r=n$(e,t);if(0!==r.length){if(1===r.length)return r[0];throw new rX("expected a single document in the stream, but found more")}}},nH=Object.prototype.toString,nZ=Object.prototype.hasOwnProperty,nX={};nX[0]="\\0",nX[7]="\\a",nX[8]="\\b",nX[9]="\\t",nX[10]="\\n",nX[11]="\\v",nX[12]="\\f",nX[13]="\\r",nX[27]="\\e",nX[34]='\\"',nX[92]="\\\\",nX[133]="\\N",nX[160]="\\_",nX[8232]="\\L",nX[8233]="\\P";var n0=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],n1=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function n2(e){this.schema=e.schema||nK,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=rH.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var r,n,i,a,s,o,l;if(null===t)return{};for(i=0,r={},a=(n=Object.keys(t)).length;i<a;i+=1)o=String(t[s=n[i]]),"!!"===s.slice(0,2)&&(s="tag:yaml.org,2002:"+s.slice(2)),(l=e.compiledTypeMap.fallback[s])&&nZ.call(l.styleAliases,o)&&(o=l.styleAliases[o]),r[s]=o;return r}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function n3(e,t){for(var r,n=rH.repeat(" ",t),i=0,a=-1,s="",o=e.length;i<o;)-1===(a=e.indexOf("\n",i))?(r=e.slice(i),i=o):(r=e.slice(i,a+1),i=a+1),r.length&&"\n"!==r&&(s+=n),s+=r;return s}function n6(e,t){return"\n"+rH.repeat(" ",e.indent*t)}function n4(e){return 32===e||9===e}function n5(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&65279!==e||65536<=e&&e<=1114111}function n8(e){return n5(e)&&65279!==e&&13!==e&&10!==e}function n9(e,t,r){var n=n8(e),i=n&&!n4(e);return(r?n:n&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!i)||n8(t)&&!n4(t)&&35===e||58===t&&i}function n7(e,t){var r,n=e.charCodeAt(t);return n>=55296&&n<=56319&&t+1<e.length&&(r=e.charCodeAt(t+1))>=56320&&r<=57343?(n-55296)*1024+r-56320+65536:n}function ie(e){return/^\n* /.test(e)}function it(e,t){var r=ie(e)?String(t):"",n="\n"===e[e.length-1];return r+(n&&("\n"===e[e.length-2]||"\n"===e)?"+":n?"":"-")+"\n"}function ir(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function ii(e,t){if(""===e||" "===e[0])return e;for(var r,n,i=/ [^ ]/g,a=0,s=0,o=0,l="";r=i.exec(e);)(o=r.index)-a>t&&(n=s>a?s:o,l+="\n"+e.slice(a,n),a=n+1),s=o;return l+="\n",e.length-a>t&&s>a?l+=e.slice(a,s)+"\n"+e.slice(s+1):l+=e.slice(a),l.slice(1)}function ia(e,t,r,n){var i,a,s,o="",l=e.tag;for(i=0,a=r.length;i<a;i+=1)s=r[i],e.replacer&&(s=e.replacer.call(r,String(i),s)),(io(e,t+1,s,!0,!0,!1,!0)||void 0===s&&io(e,t+1,null,!0,!0,!1,!0))&&(n&&""===o||(o+=n6(e,t)),e.dump&&10===e.dump.charCodeAt(0)?o+="-":o+="- ",o+=e.dump);e.tag=l,e.dump=o||"[]"}function is(e,t,r){var n,i,a,s,o,l;for(a=0,s=(i=r?e.explicitTypes:e.implicitTypes).length;a<s;a+=1)if(((o=i[a]).instanceOf||o.predicate)&&(!o.instanceOf||"object"==typeof t&&t instanceof o.instanceOf)&&(!o.predicate||o.predicate(t))){if(r?o.multi&&o.representName?e.tag=o.representName(t):e.tag=o.tag:e.tag="?",o.represent){if(l=e.styleMap[o.tag]||o.defaultStyle,"[object Function]"===nH.call(o.represent))n=o.represent(t,l);else if(nZ.call(o.represent,l))n=o.represent[l](t,l);else throw new rX("!<"+o.tag+'> tag resolver accepts not "'+l+'" style');e.dump=n}return!0}return!1}function io(e,t,r,n,i,a,s){e.tag=null,e.dump=r,is(e,r,!1)||is(e,r,!0);var o,l=nH.call(e.dump),d=n;n&&(n=e.flowLevel<0||e.flowLevel>t);var c,u,p,h="[object Object]"===l||"[object Array]"===l;if(h&&(p=-1!==(u=e.duplicates.indexOf(r))),(null!==e.tag&&"?"!==e.tag||p||2!==e.indent&&t>0)&&(i=!1),p&&e.usedDuplicates[u])e.dump="*ref_"+u;else{if(h&&p&&!e.usedDuplicates[u]&&(e.usedDuplicates[u]=!0),"[object Object]"===l)n&&0!==Object.keys(e.dump).length?(!function(e,t,r,n){var i,a,s,o,l,d,c="",u=e.tag,p=Object.keys(r);if(!0===e.sortKeys)p.sort();else if("function"==typeof e.sortKeys)p.sort(e.sortKeys);else if(e.sortKeys)throw new rX("sortKeys must be a boolean or a function");for(i=0,a=p.length;i<a;i+=1)d="",n&&""===c||(d+=n6(e,t)),o=r[s=p[i]],e.replacer&&(o=e.replacer.call(r,s,o)),io(e,t+1,s,!0,!0,!0)&&((l=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?d+="?":d+="? "),d+=e.dump,l&&(d+=n6(e,t)),io(e,t+1,o,!0,l)&&(e.dump&&10===e.dump.charCodeAt(0)?d+=":":d+=": ",d+=e.dump,c+=d));e.tag=u,e.dump=c||"{}"}(e,t,e.dump,i),p&&(e.dump="&ref_"+u+e.dump)):(!function(e,t,r){var n,i,a,s,o,l="",d=e.tag,c=Object.keys(r);for(n=0,i=c.length;n<i;n+=1)o="",""!==l&&(o+=", "),e.condenseFlow&&(o+='"'),s=r[a=c[n]],e.replacer&&(s=e.replacer.call(r,a,s)),io(e,t,a,!1,!1)&&(e.dump.length>1024&&(o+="? "),o+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),io(e,t,s,!1,!1)&&(o+=e.dump,l+=o));e.tag=d,e.dump="{"+l+"}"}(e,t,e.dump),p&&(e.dump="&ref_"+u+" "+e.dump));else if("[object Array]"===l)n&&0!==e.dump.length?(e.noArrayIndent&&!s&&t>0?ia(e,t-1,e.dump,i):ia(e,t,e.dump,i),p&&(e.dump="&ref_"+u+e.dump)):(!function(e,t,r){var n,i,a,s="",o=e.tag;for(n=0,i=r.length;n<i;n+=1)a=r[n],e.replacer&&(a=e.replacer.call(r,String(n),a)),(io(e,t,a,!1,!1)||void 0===a&&io(e,t,null,!1,!1))&&(""!==s&&(s+=","+(e.condenseFlow?"":" ")),s+=e.dump);e.tag=o,e.dump="["+s+"]"}(e,t,e.dump),p&&(e.dump="&ref_"+u+" "+e.dump));else if("[object String]"===l)"?"!==e.tag&&(o=e.dump,e.dump=function(){if(0===o.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==n0.indexOf(o)||n1.test(o)))return 2===e.quotingType?'"'+o+'"':"'"+o+"'";var r=e.indent*Math.max(1,t),n=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-r);switch(function(e,t,r,n,i,a,s,o){var l,d,c,u=0,p=null,h=!1,y=!1,m=-1!==n,f=-1,b=n5(l=n7(e,0))&&65279!==l&&!n4(l)&&45!==l&&63!==l&&58!==l&&44!==l&&91!==l&&93!==l&&123!==l&&125!==l&&35!==l&&38!==l&&42!==l&&33!==l&&124!==l&&61!==l&&62!==l&&39!==l&&34!==l&&37!==l&&64!==l&&96!==l&&!n4(d=n7(e,e.length-1))&&58!==d;if(t||s)for(c=0;c<e.length;u>=65536?c+=2:c++){if(!n5(u=n7(e,c)))return 5;b=b&&n9(u,p,o),p=u}else{for(c=0;c<e.length;u>=65536?c+=2:c++){if(10===(u=n7(e,c)))h=!0,m&&(y=y||c-f-1>n&&" "!==e[f+1],f=c);else if(!n5(u))return 5;b=b&&n9(u,p,o),p=u}y=y||m&&c-f-1>n&&" "!==e[f+1]}return h||y?r>9&&ie(e)?5:s?2===a?5:2:y?4:3:!b||s||i(e)?2===a?5:2:1}(o,a||e.flowLevel>-1&&t>=e.flowLevel,e.indent,n,function(t){var r,n;for(r=0,n=e.implicitTypes.length;r<n;r+=1)if(e.implicitTypes[r].resolve(t))return!0;return!1},e.quotingType,e.forceQuotes&&!a,d)){case 1:return o;case 2:return"'"+o.replace(/'/g,"''")+"'";case 3:return"|"+it(o,e.indent)+ir(n3(o,r));case 4:return">"+it(o,e.indent)+ir(n3(function(e,t){for(var r,n,i,a=/(\n+)([^\n]*)/g,s=(a.lastIndex=r=-1!==(r=e.indexOf("\n"))?r:e.length,ii(e.slice(0,r),t)),o="\n"===e[0]||" "===e[0];i=a.exec(e);){var l=i[1],d=i[2];n=" "===d[0],s+=l+(o||n||""===d?"":"\n")+ii(d,t),o=n}return s}(o,n),r));case 5:return'"'+function(e){for(var t,r="",n=0,i=0;i<e.length;n>=65536?i+=2:i++)!(t=nX[n=n7(e,i)])&&n5(n)?(r+=e[i],n>=65536&&(r+=e[i+1])):r+=t||function(e){var t,r,n;if(t=e.toString(16).toUpperCase(),e<=255)r="x",n=2;else if(e<=65535)r="u",n=4;else if(e<=0xffffffff)r="U",n=8;else throw new rX("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+r+rH.repeat("0",n-t.length)+t}(n);return r}(o)+'"';default:throw new rX("impossible error: invalid scalar style")}}());else{if("[object Undefined]"===l||e.skipInvalid)return!1;throw new rX("unacceptable kind of an object to dump "+l)}null!==e.tag&&"?"!==e.tag&&(c=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),c="!"===e.tag[0]?"!"+c:"tag:yaml.org,2002:"===c.slice(0,18)?"!!"+c.slice(18):"!<"+c+">",e.dump=c+" "+e.dump)}return!0}function il(e,t){return function(){throw Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var id=nQ.load;nQ.loadAll,il("safeLoad","load"),il("safeLoadAll","loadAll"),il("safeDump","dump");let ic={load:id,dump:function(e,t){var r=new n2(t=t||{});r.noRefs||function(e,t){var r,n,i=[],a=[];for(function e(t,r,n){var i,a,s;if(null!==t&&"object"==typeof t)if(-1!==(a=r.indexOf(t)))-1===n.indexOf(a)&&n.push(a);else if(r.push(t),Array.isArray(t))for(a=0,s=t.length;a<s;a+=1)e(t[a],r,n);else for(a=0,s=(i=Object.keys(t)).length;a<s;a+=1)e(t[i[a]],r,n)}(e,i,a),r=0,n=a.length;r<n;r+=1)t.duplicates.push(i[a[r]]);t.usedDuplicates=Array(n)}(e,r);var n=e;return(r.replacer&&(n=r.replacer.call({"":n},"",n)),io(r,0,n,!0,!0))?r.dump+"\n":""}},iu=new class{async createPipeline(e){try{return await this.validatePipelineConfig(e),(await O.prisma.pipeline.create({data:{name:e.name,config:e,active:!0}})).id}catch(e){throw console.error("Error creating pipeline:",e),Error("Failed to create pipeline")}}async updatePipeline(e,t){try{(t.name||t.steps)&&await this.validatePipelineConfig(t),await O.prisma.pipeline.update({where:{id:e},data:{...t.name&&{name:t.name},config:t}})}catch(e){throw console.error("Error updating pipeline:",e),Error("Failed to update pipeline")}}async deletePipeline(e){try{if(await O.prisma.run.count({where:{pipelineName:{in:await O.prisma.pipeline.findUnique({where:{id:e}}).then(e=>e?[e.name]:[])},status:{in:["PENDING","RUNNING"]}}})>0)throw Error("Cannot delete pipeline with active runs");await O.prisma.pipeline.delete({where:{id:e}})}catch(e){throw console.error("Error deleting pipeline:",e),Error("Failed to delete pipeline")}}async getPipeline(e){try{let t=await O.prisma.pipeline.findUnique({where:{id:e}});if(!t)throw Error("Pipeline not found");return{id:t.id,name:t.name,config:t.config,active:t.active,createdAt:t.createdAt,updatedAt:t.updatedAt}}catch(e){throw console.error("Error getting pipeline:",e),Error("Failed to get pipeline")}}async listPipelines(e){try{let t={};return e?.active!==void 0&&(t.active=e.active),e?.search&&(t.name={contains:e.search,mode:"insensitive"}),(await O.prisma.pipeline.findMany({where:t,select:{id:!0,name:!0,active:!0,config:!0,createdAt:!0,updatedAt:!0},orderBy:{createdAt:"desc"}})).map(e=>({id:e.id,name:e.name,active:e.active,stepsCount:Array.isArray(e.config?.steps)?e.config.steps.length:0,lastRun:e.updatedAt}))}catch(e){throw console.error("Error listing pipelines:",e),Error("Failed to list pipelines")}}async runPipeline(e,t,r){try{let n=await O.prisma.pipeline.findUnique({where:{id:e}});if(!n)throw Error("Pipeline not found");if(!n.active)throw Error("Pipeline is not active");let i=await O.prisma.run.create({data:{tenderId:t,pipelineName:n.name,status:"PENDING",logs:[]}});return await rQ.addPipelineJob(i.id,t,n.name,n.config,r),i.id}catch(e){throw console.error("Error running pipeline:",e),Error("Failed to run pipeline")}}async getRun(e){try{let t=await O.prisma.run.findUnique({where:{id:e},include:{tender:{select:{id:!0,title:!0}}}});if(!t)throw Error("Run not found");return t}catch(e){throw console.error("Error getting run:",e),Error("Failed to get run")}}async listRuns(e){try{let t={};e?.tenderId&&(t.tenderId=e.tenderId),e?.pipelineName&&(t.pipelineName=e.pipelineName),e?.status&&(t.status=e.status);let r=e?.page||1,n=e?.limit||20,[i,a]=await Promise.all([O.prisma.run.findMany({where:t,include:{tender:{select:{id:!0,title:!0}}},orderBy:{startedAt:"desc"},skip:(r-1)*n,take:n}),O.prisma.run.count({where:t})]);return{runs:i,total:a,page:r,totalPages:Math.ceil(a/n)}}catch(e){throw console.error("Error listing runs:",e),Error("Failed to list runs")}}async cancelRun(e){try{let t=await O.prisma.run.findUnique({where:{id:e}});if(!t)throw Error("Run not found");if("COMPLETED"===t.status||"FAILED"===t.status)throw Error("Cannot cancel completed or failed run");await O.prisma.run.update({where:{id:e},data:{status:"CANCELLED",finishedAt:new Date}})}catch(e){throw console.error("Error canceling run:",e),Error("Failed to cancel run")}}async validatePipelineConfig(e){for(let t of(e.steps.map(e=>e.id),e.steps)){if(!["pipeline/prepare","pipeline/extract","pipeline/checklist","pipeline/summary","pipeline/human-approval","pipeline/notify"].includes(t.uses))throw Error(`Invalid step type: ${t.uses}`);if("pipeline/extract"===t.uses&&!t.with?.fields)throw Error("Extract step requires fields parameter");if("pipeline/checklist"===t.uses&&!t.with?.templateId)throw Error("Checklist step requires templateId parameter");if("pipeline/summary"===t.uses&&!t.with?.templateId)throw Error("Summary step requires templateId parameter")}}async exportPipeline(e,t="yaml"){try{let r=await this.getPipeline(e);if("yaml"===t)return ic.dump(r.config);return JSON.stringify(r.config,null,2)}catch(e){throw console.error("Error exporting pipeline:",e),Error("Failed to export pipeline")}}async importPipeline(e,t="yaml"){try{let r;return r="yaml"===t?ic.load(e):JSON.parse(e),await this.createPipeline(r)}catch(e){throw console.error("Error importing pipeline:",e),Error("Failed to import pipeline")}}};e.s(["validateRequestBody",()=>im,"validateSearchParams",()=>ib],6090);var ip=e.i(69719);ip.z.date().refine(e=>e>new Date,{message:"Date must be in the future"}),ip.z.string().regex(/^[a-f0-9]{64}$/i,"Must be a valid SHA-256 hash");let ih=ip.z.string().refine(e=>["application/pdf","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/msword","text/plain"].includes(e),{message:"Only PDF, DOCX, DOC, and TXT files are supported"});ip.z.string().email("Must be a valid email address"),ip.z.string().url("Must be a valid URL"),ip.z.string().uuid("Must be a valid UUID"),ip.z.object({key:ip.z.string(),value:ip.z.any(),traceLinkIds:ip.z.array(ip.z.string()).min(1,"At least one citation is required")}).refine(e=>e.traceLinkIds.length>0,{message:"Field extractions must have at least one citation",path:["traceLinkIds"]}),ip.z.object({date:ip.z.date(),isExtendable:ip.z.boolean().optional()}).refine(e=>e.date>new Date,{message:"Submission deadline must be in the future",path:["date"]}),ip.z.object({checklistItems:ip.z.array(ip.z.object({key:ip.z.string(),status:ip.z.enum(["PENDING","OK","MISSING","N_A"])}))}).refine(e=>!e.checklistItems.filter(e=>!e.key.startsWith("optional_")).some(e=>"PENDING"===e.status||"MISSING"===e.status),{message:"Cannot approve while required checklist items are PENDING or MISSING",path:["checklistItems"]}),ip.z.string().refine(e=>{try{let t=(e.match(/\{\{/g)||[]).length,r=(e.match(/\}\}/g)||[]).length;return t===r}catch{return!1}},{message:"Invalid Handlebars template syntax"}),ip.z.any().refine(e=>{try{if("object"!=typeof e||null===e||e.type&&"string"!=typeof e.type)return!1;return!0}catch{return!1}},{message:"Invalid JSON schema format"}),ip.z.string().refine(async t=>{try{let r=(await e.A(30212)).parse(t);return"object"==typeof r&&null!==r&&"string"==typeof r.name&&Array.isArray(r.steps)&&r.steps.length>0}catch{return!1}},{message:"Invalid pipeline YAML format"}),ip.z.object({id:ip.z.string().min(1,"Step ID is required"),uses:ip.z.enum(["pipeline/prepare","pipeline/extract","pipeline/checklist","pipeline/summary","pipeline/human-approval"]),with:ip.z.record(ip.z.any()).optional()}).refine(e=>"pipeline/extract"===e.uses?e.with?.fields&&Array.isArray(e.with.fields):"pipeline/checklist"===e.uses||"pipeline/summary"===e.uses?e.with?.templateId&&"string"==typeof e.with.templateId:"pipeline/human-approval"!==e.uses||e.with?.rolesAllowed&&Array.isArray(e.with.rolesAllowed),{message:"Invalid step configuration for the specified step type"});let iy=ip.z.string().transform(e=>e.replace(/[^a-zA-Z0-9._-]/g,"_").replace(/_{2,}/g,"_").replace(/^_+|_+$/g,"").substring(0,255));ip.z.object({filename:iy,mime:ih,size:(e=>ip.z.number().max(1024*e*1024,`File size must be less than ${e}MB`))(50)}).refine(e=>{let t=e.filename.split(".").pop()?.toLowerCase(),r={"application/pdf":["pdf"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":["docx"],"application/msword":["doc"],"text/plain":["txt"]}[e.mime]||[];return!!t&&r.includes(t)},{message:"File extension does not match MIME type"}),ip.z.object({tenderId:ip.z.string(),key:ip.z.string()}),ip.z.object({tenderId:ip.z.string(),key:ip.z.string()}),ip.z.object({tenderId:ip.z.string(),blockKey:ip.z.string()}),ip.z.object({kind:ip.z.enum(["SUMMARY","CHECKLIST"]),name:ip.z.string()});let im=e=>t=>e.parse(t),ib=e=>t=>{let r={};for(let[e,n]of t.entries())r[e]?Array.isArray(r[e])?r[e].push(n):r[e]=[r[e],n]:r[e]=n;return e.parse(r)};e.s(["CreateRunSchema",()=>iS,"PipelineConfigSchema",()=>iK],22961);let ig=ip.z.object({id:ip.z.string().min(1),name:ip.z.string().min(1),uses:ip.z.string().min(1),with:ip.z.record(ip.z.any()).optional(),timeout:ip.z.number().positive().optional(),retries:ip.z.number().min(0).max(3).default(0),continueOnError:ip.z.boolean().default(!1)}),iK=ip.z.object({name:ip.z.string().min(1,"Pipeline name is required"),description:ip.z.string().optional(),version:ip.z.string().default("1.0"),triggers:ip.z.array(ip.z.enum(["manual","upload","schedule"])).default(["manual"]),steps:ip.z.array(ig).min(1,"At least one step is required"),settings:ip.z.object({timeout:ip.z.number().positive().default(3600),maxRetries:ip.z.number().min(0).max(5).default(2),notifications:ip.z.object({onSuccess:ip.z.boolean().default(!1),onFailure:ip.z.boolean().default(!0),recipients:ip.z.array(ip.z.string().email()).default([])}).optional()}).optional()}),iv=ip.z.object({timestamp:ip.z.date(),level:ip.z.enum(["info","warn","error","debug"]),step:ip.z.string().optional(),message:ip.z.string(),data:ip.z.any().optional()}),iS=ip.z.object({tenderId:ip.z.string().uuid(),pipelineName:ip.z.string().min(1),parameters:ip.z.record(ip.z.any()).optional(),priority:ip.z.enum(["low","normal","high"]).default("normal")});ip.z.object({status:ip.z.enum(["PENDING","RUNNING","COMPLETED","FAILED","CANCELLED"]).optional(),logs:ip.z.array(iv).optional(),finishedAt:ip.z.date().optional(),error:ip.z.string().optional()}),ip.z.object({config:iK,validateSteps:ip.z.boolean().default(!0),checkDependencies:ip.z.boolean().default(!0)}),ip.z.object({fields:ip.z.array(ip.z.object({key:ip.z.enum(["scope","eligibility","evaluationCriteria","submissionMechanics","deadlineSubmission"]),requireCitations:ip.z.boolean().default(!0),minConfidence:ip.z.number().min(0).max(1).default(.5),validators:ip.z.array(ip.z.string()).default([])})),extractionMethod:ip.z.enum(["regex","nlp","hybrid"]).default("hybrid"),citationMinLength:ip.z.number().min(10).default(50)}),ip.z.object({templateId:ip.z.string().uuid(),autoCheck:ip.z.boolean().default(!0),requiredItemsOnly:ip.z.boolean().default(!1)}),ip.z.object({templateId:ip.z.string().uuid(),requireCitations:ip.z.boolean().default(!0),maxSectionLength:ip.z.number().positive().default(1e3),includeMetadata:ip.z.boolean().default(!0)}),ip.z.object({rolesAllowed:ip.z.array(ip.z.enum(["ANALYST","REVIEWER","ADMIN"])).min(1),requireComment:ip.z.boolean().default(!1),autoApprove:ip.z.object({enabled:ip.z.boolean().default(!1),conditions:ip.z.array(ip.z.object({field:ip.z.string(),operator:ip.z.string(),value:ip.z.any()})).default([])}).optional()})}];

//# sourceMappingURL=%5Broot-of-the-server%5D__07c74b7e._.js.map