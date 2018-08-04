git fetch upstream 1.6.x
git checkout 1.6.x
git checkout -b bm-1.6.x

patch etc/build.py for --replaces chronograf
git push origin bm-1.6.x
