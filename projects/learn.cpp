#include <iostream>
#include <cmath>
#include <cstring>
#include <list>
#include <stdlib.h>
#include <iomanip>
using namespace std;

/*
int main(){
    int aluno,nota[2];
    float total;

    aluno = 0;
    while (aluno < 2)
    {
        cout<<"entre a nota do aluno "<<aluno<<": ";
        cin>>nota[aluno];
        aluno = aluno + 1;
    }

    cout<< "notas: "<<endl;

    total = 0;

    for(aluno = 0;aluno < 2; aluno++ )
    {
        cout<<"aluno "<< aluno<< ": "<< nota[aluno];
        cout<<" ";
        total = total + nota[aluno];

        if(nota[aluno] >= 7){
            cout<<"o aluno "<< aluno << " foi aprovado"<<endl;

        }
        if(nota[aluno] < 7){
            cout<<"o aluno "<< aluno <<" foi reprovado"<<endl;
        }
}

    cout<< "media: "<< total/2<<endl;
}
*/
/*
int main(){
    int numm;
    cout<< " insira um num: "<<endl;
    cin>>numm;
    if(numm >= 0){
        if(numm % 2 >= 0)
        {
            cout<< "é par e +\n"<<endl;
        }else
        cout<<"é impar e +\n"<<endl;

    }else{
    if(numm % 2 ==0)
        cout<<"é - e par\n";
    else
    cout<< " é - e impar\n"<<endl;
    }


}
*/
/*
//tabela...
   int main(){
 int tabel[3][4];
 int l,c;

 for (l = 0;l < 3; l++)
 {
    for (c = 0; c < 4; c++)
    {
        cin>>tabel[l][c];
    }

 }

 for (l = 0;l < 3; l++)
 {
    for (c = 0; c < 4; c++)
    {
        cout<<tabel[l][c]<<" ";
    }
    cout<<"\n";
 }
 return 0;
 }
 */
/*
int main(){
    string marcas[5] = {"bmw","nissan"};
    int i;
    for (i = 0; i < 5 ; i++)
    {
        cout<<"marcas: "<< marcas[i]<<"\n";
    }

     for (i = 0; i < 5 ; i++)
    {
        cout<<"posiçao: "<< i<<" // "<<" maarca: "<<marcas[i]<<"\n";
    }
}
*/
/*
int main() {
  // We put "1" to indicate there is a ship.
  bool ships[4][4] = {
    { 0, 1, 1, 0 },
    { 0, 0, 0, 0 },
    { 0, 0, 1, 0 },
    { 0, 0, 1, 0 }
  };

int hits = 0,numberOfTurns = 0;
while (hits < 2)
{
    int l,c;

    cout<<"select coordenates\n";
    cout<<"choose one line&colum like: 0 0: ";
    cin>>l>>c;

    if (ships[l][c])
    {
        ships[l][c] = 0;
        hits++;
        cout<<"\t\thit! "<<(4 - hits)<<" ships left\n\n";
    }else{
        cout<<" \t\tmiss\n\n";
    }
    numberOfTurns++;
}
cout<<"victory! "<<endl;
cout<<"you won in "<<numberOfTurns<<" turns!"<<endl;

  return 0;
}
*/
/*
int amaior(int x, int y, int z){
    int maior;

    maior = x;
    if (y > maior)
    {
        maior  = y;
    }
    if (z > maior)
    {
        maior = z;
    }
    return maior;
}
int main(){
    int a, b, c, maior_1,maior_2;

    cout<<"insira o conjunto: \n";
    cin>>a>>b>>c;

    maior_1 = amaior(a,b,c);

      cout<<"insira o conjunto: \n";
    cin>>a>>b>>c;

    maior_2 = amaior(a,b,c);

    cout<<"os maiores: "<<maior_1<<" "<<maior_2<<endl;
    cout<<"a soma é: "<<maior_1<< " + "<<maior_2<<": ";
    cout<<maior_1 + maior_2<<endl;

}
*/
/*
void inst(void){
    int ch;
    cout<<"voce quer instruçoes? (s/n) \n";
    ch = cin.get();

    if (ch == 'n' || ch == 'N')
    {
        return;
    }

    cout<<"essas sao as instrucoes: \n"
    <<".\n"<<".\n"<<".\n"<<".\n"<<".\n";
    return;
}
int main(){
    inst();
}
*/
/*
int fahr_cel(float f){
    return (float)5/9 * (f - 32);
}
int main(){

   cout<< fahr_cel(98.0) <<endl;
}
*/
/*
int main(){
    int a,b;
    cout<<"entre num e dem da fr: \n";
    cin>>a>>b;
    cout<<"fraçao: "<< (double)a/b <<endl;
}
*/
/*
int main(){
    int day = 11;
    cout<<"today is : ";
    switch (day)
    {
    case 11:
        cout<<" monday ";
        break;
     case 12:
        cout<<" tuesday ";
     break;
     case 13:
        cout<<" wensday ";
     break;
     case 14:
        cout<<" thrusday ";
     break;
     case 15:
        cout<<" friday ";
    break;

    default:
        cout<<"vamos esperar a prox semana... \n";
        break;
    }
}
*/
/*
int main(){
    int num1, num2;
    char op;
    cout<<"entre um ex= '1 + 1' \n";
    cin>>num1>>op>>num2;

    switch (op)
    {
    case '+':
        cout<< "= "<<setprecision(2)<<num1 + num2<<"\n";
        break;
         case '-':
        cout<< "= "<<setprecision(2)<<num1 - num2<<"\n";
        break;
         case '*':
         case 'x':
         case 'X':
        cout<< "= "<<setprecision(2)<<num1 * num2<<"\n";
        break;
         case '/':
        cout<< "= "<< setprecision(2)<<(float)num1 / num2<<"\n";
        break;
    default:
    cout<<"op invalid... :(\n";
        break;
    }
}
*/
/*
##define pi 3.14

float tria_area(float ,float);
float circ_area(float );

int main(){
float base, altura, raio, area1, area2;

cout<<"insira base  ealtura do tria: \n";
cin>>base>>altura;
cout<<"insira raio do circ: \n";
cin>>raio;

area1 = tria_area(base,altura);
area2 = circ_area(raio);
cout<<"areas do t e c : "<<setprecision(2)<<area1<<" // "
<<setprecision(2)<<area2<<endl;

 }
 float tria_area(float b, float alt){
    return 0.5 * b * alt;
}
float circ_area(float r){
    return pi * (r * r);
}
*/
/*
#define juros 0.07

void credito(float);
void debito(float);
void juross(void);

float saldo;

int main(){
float valor;

cout<<"insira seu saldo: \n";
cin>>saldo;

cout<<"deposite: \n";
cin>>valor;
credito(valor);

cout<<"retire: \n";
cin>>valor;
debito(valor);

juross();
cout<<"juros: "<< juros * 100 <<"%.\n";
cout<<"saldo : "<<setprecision(5)<<saldo<<endl;
}

void credito(float val){
    saldo += val;
}
void debito(float val){
    saldo -= val;
}
void juross(void){
    saldo += (saldo * juros);
}
*/
/*
#define len 50

struct endereco
{
    char rua[len];
    char cidade_estado_cep[len];
};

struct endereco obtem_endereco(void);
void imprime_endereco(struct endereco);

struct endereco obtem_endereco(void)
{
    struct endereco ender;

    cout<<"digite o nome da rua: \n";
    cin.getline(ender.rua,len);
     cout<<"digite o nome da cidad-estad-cep: \n";
    cin.getline(ender.cidade_estado_cep,len);

    return ender;
};

void imprime_endereco(struct endereco ender){
    cout<<"\t"<<ender.rua<<endl;
    cout<<"\t"<<ender.cidade_estado_cep<<endl;
}

int main(){
    struct endereco residencia;
    cout<<"digite seu endereco residencial \n";
    residencia = obtem_endereco();

    cout<<"\n seu endereco eh: \n";
    imprime_endereco(residencia);
}
*/
/*
#define len 50
#define num 2

struct endereco
{
    char rua[len];
    char cidade_estado_cep[len];
};

void obtem_endereco(struct endereco[], int);
void imprime_endereco(struct endereco);

void obtem_endereco(struct endereco aender[],int index){

    cout<<"entre rua: \n";
    cin.getline(aender[index].rua,len);
    cout<<"entre c/t/c: \n";
    cin.getline(aender[index].cidade_estado_cep,len);
}
void imprime_endereco(struct endereco ender){
    cout<< ender.rua <<endl;
    cout<< ender.cidade_estado_cep <<endl;
}

int main(){
    struct endereco residencia[num];
    int i;

    for (i = 0; i < num; i++)
    {
        cout<<"entre o endereco "<< i <<endl;
        obtem_endereco(residencia, i);
    }
    for ( i = 0; i < num; i++)
    {
        cout<<"\nseu endereco eh : \n\n";
        imprime_endereco(residencia[i]);
    }


}
*/
/*
#define lin 5
#define col 5
int main(){
    int x,y;
    int taboada[lin][col];

    y = 0;
    while (y < lin)
    {
        x = 0;
        while (x < col)
        {
            taboada[y][x] = x * y;
            x++;
        }
        y++;
    }



cout<<"\n   taboa de multiplicaçao...\n";

cout<<setw(6)<<0;
x=1;
while (x < col)
{
    cout<<setw(3)<<x;
    x++;
}
cout<<endl;
cout<<"   ";

x = 0;
while (x < 3 * col)
{
    cout<<"-";
    x++;
}
cout<<endl;

y = 0;
while (y < lin)
{
    cout<<setw(2)<< y <<"|";
    x = 0;
    while (x < col)
    {
        cout<<setw(3)<< taboada[y][x];
        x++;
    }
    cout<<endl;
    y++;
}
}
*/
/*
#define alt 5
#define lar 5
int main(){
    int x,y;
    char tabela[alt][lar];

for ( x = 0; x < alt; x++)
{
    for ( y = 0; y < lar; y++)
    {
        tabela[x][y] = 0;
    }
}
cout<<"Entre coordenadas na forma \"y x\"."<<endl;
cin>>x>>y;

while (x >= 0 && y >=0)
{
    tabela[x][y] = 1;
    for ( x = 0; x < alt; x++)
    {
        for ( y = 0; y < lar; y++)
        {
            cout<<tabela[x][y]<<" ";
        }
    }
    cout<<"\n";
    cout<<"coordenadas: ";
    cin>>x>>y;
}
}
*/
/*
#define lin 5
#define col 5
int main(){
    int x,y;
    int taboada[lin][col];

    for ( y = 0; y < lin; y++)
    {
        for ( x = 0; x < col; x++)
        {
            taboada[y][x] = y * x ;
        }
    }

    cout<<"\n   tabela de multiplicaçao: \n";

    cout<<setw(6)<<0;
    for (x = 1; x < col; x++)
    {
        cout<<setw(3)<<x;

    }
    cout<<endl;
    cout<<"   ";
    for ( x = 0; x < 4 * col; x++)
    {
        cout<<"-";
    }
        cout<<"\n";
    for ( y = 0; y < lin; y++)
    {
        cout<<setw(2)<<y<<"|";
        for ( x = 0; x < col; x++)
        {
           cout<< setw(3) <<taboada[y][x];
        }
            cout<<"\n";
    }
}
*/
/*
#define qaluno 4

int main(){
string alunos[qaluno];
int indice,nota[qaluno];
int total;

for (indice = 0; indice < qaluno; indice++)
{
    cout<<"entre o nome do aluno e sua nota: "<<endl;
    cin>>alunos[indice]>>nota[indice];
}

total = 0;
for ( indice = 0; indice < qaluno; indice++)
{

if (nota[indice] >= 7 )
{
    cout<<"o aluno "<<alunos[indice]<<" tirou: "<<nota[indice]<<" passou! \n";
}else if (nota[indice] <= 4)
{
    cout<<"o aluno "<<alunos[indice]<<" tirou: "<<nota[indice]<<" reprovado! \n";
}else if (nota[indice] == 5 || nota[indice] == 6)
{
    cout<<"o aluno "<<alunos[indice]<<" tirou: "<<nota[indice]<<" recuperaçao! \n";

}else
{
    cout<<"aluno sem nota ajuste o qnota e adicione-a...\n";
}
total += nota[indice];
}
cout<<"media da sala: "<< total/qaluno <<endl;
}
*/
/*
int main(){
char gender, answer;
int kids,salary;

cout<<"insert your gender here: \n";
cin>>gender;

if (gender == 'f' || gender == 'F')
{
    cout<<"ok so you are a female...\n";
}else if (gender == 'm' || gender == 'M')
{
     cout<<"ok so you are a male...\n";
}else{
    cout<<"are a coconut ?!\n";
}

cout<<"are you married ? (y/n) \n";
cin>>answer;

if (answer == 'y' || answer == 'Y')
{
    cout<<"computing...\n";
}else if (answer == 'n' || answer == 'N')
{
     cout<<"computing...\n";
}else{
    cout<<"answer with y or n!\n";
}

cout<<"do you have kids, how many ?\n";
cin>>kids;

if (gender == 'f' || gender == 'F')
{
    cout<<"ok, she has "<<kids<<"kids!.\n";
}else if (gender == 'm' || gender == 'M')
{
     cout<<"ok he has "<<kids<<" kids!\n";
}else if (kids > 4)
{
    cout<<"OK so you have "<<kids<<" kids!!, you didn't have much things to do, didn't you?...\n";
}else{
    cout<<"ok so do you have no kids, right?!...\n";
}

cout<<"how much do you ear per month ?\n";
cin>>salary;

cout<<"ok these are your data.\n";
cout<<"you are a "<<gender<<" gender \n";
cout<<"you have "<<kids<<" kids \n";
cout<<"this is your salary: "<<salary<<endl;
return 0;
}
*/
/*
int main()
{
    int nota[3], i;
    string aluno[3];
    for (i = 0; i < 3; i++)
    {
        if (i != 1)
        {
        cout << "quem é voce? Digite seu nome: ";
        cin >> aluno[i];
        }else
        {
        cout << "e voce? Digite seu nome aqui: ";
        cin >> aluno[i];
        }
    }
    cout<<endl;
    for (i = 0; i < 3; i++)
    {
        cout << "Digite sua nota " << aluno[i] << ": ";
        cin >> nota[i];
    }
    for (i = 0; i < 3; i++)
    {
        if (nota[i] >= 6)
        {
            cout << "\nParabens " << aluno[i] << " vocẽ passou." << endl;
        }
        else if (nota[i] == 5)
        {
            cout << "Atenção! " << aluno[i] << " vocẽ ficou de recupeção." << endl;
        }
        else
        {
            cout << "Se esforce mais " << aluno[i] << " vocẽ reprovou." << endl;
        }
    }

    return 0;
}
*/
/*
int main(){
    int media[] = {7,6,5};
    int mediaMaior = 0;
    for (int i = 0; i < size(media); i++)
    {
        cout<<"essas são as medias: "<<media[i]<<endl;
    }
     for (int i = 0; i < sizeof(mediaMaior)/sizeof(int); i++)
    {
        if (media[i] > mediaMaior)
        {
            mediaMaior = media[i];
        cout<<"\n Essa é a maior media: "<<mediaMaior<<endl;
        }

    }
    return 0;

}
*/
// int main(){
//     int av[] ={1,2,3},nota[3];
//     float media = 0;
//     for (int i = 0; i < 3; i++)
//     {
//         cout<<"insira sua nota da AV"<<av[i]<<": "<<endl;
//         cin>>nota[i];
//         media+=nota[i];
//     }
//     for (int i = 0; i < 3; i++)
//     {
//     cout<<" AV"<<av[i]<<" foi: "<<nota[i];
//     }
//     media = media/size(nota);

//     cout<<endl;
//     if (media >= 6)
//     {
//     cout<<"sua media foi "<<media<<"\nparabens! aprovado";
//     }else{
//             cout<<"sua media foi "<<media<<"\nque pena! reprovado";
//     }

//     cout<<endl;
//     return 0;
// }
/* int main()
{
    int av[] = {1, 2, 3}, nota[3], maiornota1 = 0, maiornota2 = 0;
    float media;
    for (int i = 0; i < size(av); i++)
    {
        cout << "insira a nota da AV" << av[i] << ": ";
        cin >> nota[i];
    }

    for (int i = 0; i < size(av); i++)
    {
        if (nota[i] > maiornota1)
        {
            maiornota1 = nota[i];
        }
    }

    for (int i = 0; i < size(av); i++)
    {
        if (nota[i] > maiornota2)
        {
            maiornota2 = nota[i];
        }
    }

    media += (maiornota1 + maiornota2) / 2;

    if (media >= 6)
    {
        cout << "sua media foi: " << media << " parabens!, voce passou" << endl;
    }
    else
    {
        cout << "sua media foi: " << media << " que pena!, voce reprovou" << endl;
    }
} */