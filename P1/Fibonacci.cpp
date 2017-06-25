#include<iostream>
using namespace std;
int main()
{
	int s;
	int fi(int);
	for(int i=1;i<=20;i++)
	{s=fi(i);
	cout<<s<<endl;}
	return 0;	
}
int fi(int a)
{
	int s;
	if(a<=2)
	s=1;
	else
	s=(fi(a-1)+fi(a-2));
	return s;
}
