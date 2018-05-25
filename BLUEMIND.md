git remote add upstream https://github.com/influxdata/chronograf.git
git fetch upstream 1.5.0.x
git rebase FETCH_HEAD
