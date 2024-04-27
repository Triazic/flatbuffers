cd ../..
make -j
cd tests/ts/union_vector
flatc --ts --gen-object-api --gen-mutable --ts-entry-points --ts-flat-files --gen-name-strings --reflect-names ../../union_vector/union_vector.fbs