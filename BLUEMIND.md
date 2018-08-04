git fetch upstream 1.7.x
git checkout 1.7.x
git checkout -b bm-1.7.x

patch etc/build.py for --replaces chronograf
git push origin bm-1.7.x
