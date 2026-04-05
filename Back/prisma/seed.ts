async function main() {
  console.log('Seed omitido: la base de datos actual ya existe y se gestiona manualmente.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});