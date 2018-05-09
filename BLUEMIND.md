git remote add upstream https://github.com/influxdata/chronograf.git
git fetch upstream 1.4.4.x
git rebase FETCH_HEAD
