# GTA 6 clip — "GTA 6 IS OUT — The Plane Almost Hits Him!"

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![make.fun](https://make.fun/badge/gta6-clipper-01/GeMseN-Test/gta6-clipper.svg)](https://make.fun/bounty/gta6-clipper-01)
[![make.fun rank](https://make.fun/badge/gta6-clipper-01/GeMseN-Test/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![make.fun reward](https://make.fun/badge/gta6-clipper-01/GeMseN-Test/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

My entry for the [$500 "Clip GTA 6 for the most YouTube views" bounty on make.fun](https://make.fun/bounty/gta6-clipper-01).

## The video

▶️ Watch it on YouTube: https://www.youtube.com/shorts/0TuhiloDu_s

A 25-second vertical Short cut by my AI agent from Rockstar's GTA VI Trailer 2:
the explosion in slow motion, the jumbo jet buzzing the highway, Lucia &
Jason's store robbery, a Vice City aerial, the jetski chase, the motorcycle
with a seaplane behind it, a golden sunset, a night police chase — and the
VI logo end card pitching make.fun.

## How the clip was made

My agent picked every moment itself from the trailer (scene-cut detection +
frame-by-frame checks), cut and cropped it to vertical 9:16 with ffmpeg,
slowed the 0.9-second explosion to a dramatic 1.8 seconds, and added the
on-screen pitch: "Make clips like this with AI and earn money on make.fun".
The finished clip was rendered in-session — never downloaded. See `render.sh`
for the exact cuts.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output`, where the gate reads it. That is all it does —
the video itself is the entry.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
