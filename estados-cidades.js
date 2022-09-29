var json_cidades = {
  "estados": [
    {
      "sigla": "AC",
      "nome": "Acre",
      "cidades": [
        "Acrelândia",
        "Assis Brasil",
        "Brasiléia",
        "Bujari",
        "Capixaba",
        "Cruzeiro do Sul",
        "Epitaciolândia",
        "Feijó",
        "Jordão",
        "Mâncio Lima",
        "Manoel Urbano",
        "Marechal Thaumaturgo",
        "Plácido de Castro",
        "Porto Acre",
        "Porto Walter",
        "Rio Branco",
        "Rodrigues Alves",
        "Santa Rosa do Purus",
        "Sena Madureira",
        "Senador Guiomard",
        "Tarauacá",
        "Xapuri"
      ]
    },
    {
      "sigla": "AL",
      "nome": "Alagoas",
      "cidades": [
        "Água Branca",
        "Anadia",
        "Arapiraca",
        "Atalaia",
        "Barra de Santo Antônio",
        "Barra de São Miguel",
        "Batalha",
        "Belém",
        "Belo Monte",
        "Boca da Mata",
        "Branquinha",
        "Cacimbinhas",
        "Cajueiro",
        "Campestre",
        "Campo Alegre",
        "Campo Grande",
        "Canapi",
        "Capela",
        "Carneiros",
        "Chã Preta",
        "Coité do Nóia",
        "Colônia Leopoldina",
        "Coqueiro Seco",
        "Coruripe",
        "Craíbas",
        "Delmiro Gouveia",
        "Dois Riachos",
        "Estrela de Alagoas",
        "Feira Grande",
        "Feliz Deserto",
        "Flexeiras",
        "Girau do Ponciano",
        "Ibateguara",
        "Igaci",
        "Igreja Nova",
        "Inhapi",
        "Jacaré dos Homens",
        "Jacuípe",
        "Japaratinga",
        "Jaramataia",
        "Jequiá da Praia",
        "Joaquim Gomes",
        "Jundiá",
        "Junqueiro",
        "Lagoa da Canoa",
        "Limoeiro de Anadia",
        "Maceió",
        "Major Isidoro",
        "Mar Vermelho",
        "Maragogi",
        "Maravilha",
        "Marechal Deodoro",
        "Maribondo",
        "Mata Grande",
        "Matriz de Camaragibe",
        "Messias",
        "Minador do Negrão",
        "Monteirópolis",
        "Murici",
        "Novo Lino",
        "Olho d'Água das Flores",
        "Olho d'Água do Casado",
        "Olho d'Água Grande",
        "Olivença",
        "Ouro Branco",
        "Palestina",
        "Palmeira dos Índios",
        "Pão de Açúcar",
        "Pariconha",
        "Paripueira",
        "Passo de Camaragibe",
        "Paulo Jacinto",
        "Penedo",
        "Piaçabuçu",
        "Pilar",
        "Pindoba",
        "Piranhas",
        "Poço das Trincheiras",
        "Porto Calvo",
        "Porto de Pedras",
        "Porto Real do Colégio",
        "Quebrangulo",
        "Rio Largo",
        "Roteiro",
        "Santa Luzia do Norte",
        "Santana do Ipanema",
        "Santana do Mundaú",
        "São Brás",
        "São José da Laje",
        "São José da Tapera",
        "São Luís do Quitunde",
        "São Miguel dos Campos",
        "São Miguel dos Milagres",
        "São Sebastião",
        "Satuba",
        "Senador Rui Palmeira",
        "Tanque d'Arca",
        "Taquarana",
        "Teotônio Vilela",
        "Traipu",
        "União dos Palmares",
        "Viçosa"
      ]
    }
  ]
};
// FIM DO .js

function buscaCidades(e){
   document.querySelector("#cidade").innerHTML = '';
   var cidade_select = document.querySelector("#cidade");

   var num_estados = json_cidades.estados.length;
   var j_index = -1;

   // aqui eu pego o index do Estado dentro do JSON
   for(var x=0;x<num_estados;x++){
      if(json_cidades.estados[x].sigla == e){
         j_index = x;
      }
   }

   if(j_index != -1){
  
      // aqui eu percorro todas as cidades e crio os OPTIONS
      json_cidades.estados[j_index].cidades.forEach(function(cidade){
         var cid_opts = document.createElement('option');
         cid_opts.setAttribute('value',cidade)
         cid_opts.innerHTML = cidade;
         cidade_select.appendChild(cid_opts);
      });
   }else{
      document.querySelector("#cidade").innerHTML = '';
   }
}