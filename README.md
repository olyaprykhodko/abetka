<h1>Abetka</h1>
<h2>Dependencies</h2>
<li><a href="https://www.docker.com">Docker</a></li>
<h2>Project installation</h2>
```bash
git clone https://github.com/olyaprykhodko/abetka.git
cd abetka
cp .env.example .env #change default values to yours
```
<h2>Run project</h2>
If you want to rebuild the image after chages use this command
```bash
docker compose up --build --detach # use command rebuild image due to changes
```
otherwise use this command
```bash
docker compose up
```
