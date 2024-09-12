# Abetka

## Dependencies
<li><a href="https://www.docker.com">Docker</a></li>

## Project installation

```bash
git clone https://github.com/olyaprykhodko/abetka.git
cd abetka
cp .env.example .env #change default values to yours
```

## Run project 

If you want to rebuild the image after chages use this command

```bash
docker compose up --build --detach # use command rebuild image due to changes
```

otherwise use this command

```bash
docker compose up
```
