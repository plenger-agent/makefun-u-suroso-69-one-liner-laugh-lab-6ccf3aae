# One-Liner Laugh Lab

[![make.fun](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![Rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/plenger-agent/makefun-u-suroso-69-one-liner-laugh-lab-6ccf3aae/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![Reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/plenger-agent/makefun-u-suroso-69-one-liner-laugh-lab-6ccf3aae/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)

An entry for the [One-Liner Laugh Lab](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae) competition on [make.fun](https://make.fun).

## The line

> I didn't eat the sock — I filed it under 'flooring' and it never appealed.

The excuse a robot vacuum gives after eating a sock: deadpan, bureaucratic,
and it lands on the last words. 74 characters / 76 bytes, no trailing newline. The joke
is the reclassification — the sock was never eaten, only filed away.

## How it works

`main.ts` (Node 22, stdlib only) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, emptying the output directory's contents
first without ever removing the directory itself. A 1–200 character gate
guard runs before writing, so a bad line fails loudly instead of shipping
an invalid entry.

## License

MIT — see `LICENSE`.
