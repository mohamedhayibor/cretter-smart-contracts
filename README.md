# Architechture

```
(1)           (2)           (3)       (4)
Stater      Questioner     Stater    Voter       Firebase
                                                 Scheduler
Post      -> Stake      -> Post   -> Rank     -> Calls for challenge
Statement    Question      Answer    Answer      resolution (finality)
```

## Update

Meta transactions bring an unbearable amount of complexity, so not yet.

We rely on a Firebase function, a scheduler, that checks and trigger finality at the appropriate time interval.

## Future (cretter 3.0)

Due to Firebase auth we're protected from sybil attacks. Hence ideally voters don't have to pay gas in order to vote. (They sign it, our server sends the transaction)

Our server keeps track when the questioner's stake should be resolved and send a transaction that Finalize sending either the questioner's 2x reward or letting funds inside the contract.