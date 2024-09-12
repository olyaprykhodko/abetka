<h1>Abetka</h1>
<h2>Dependencies</h2>
<li><a href="https://www.docker.com">Docker</a></li>
<h2>Project installation</h2>
git clone https://github.com/olyaprykhodko/abetka.git<br>
cd abetka
cp .env.example .env // change default values to yours

docker compose up --build --detach # use command rebuild image due to changes
