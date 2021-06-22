using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;
namespace Proyecto
{
    public partial class Form1 : Form
    {
        static MySqlConnection conexion = new MySqlConnection("Server=localhost;database=colores;Uid=usuario;Pwd=123456;");

        MySqlDataReader reader;

        int cR, cG, cB;
        int cRt, cGt, cBt;


        private Color[] lista;
        private Color[] pintar = {Color.Violet,Color.Black,Color.Red,Color.Yellow,Color.Fuchsia,
            Color.Blue,Color.Cyan,Color.Magenta,Color.Pink,Color.LightGreen};

        

        private int[] contadores;

        private void button2_Click(object sender, EventArgs e)
        {
            Bitmap bmp = new Bitmap(pictureBox1.Image);
            Color c = new Color();
            c = bmp.GetPixel(0, 0);
            textBox1.Text = c.R.ToString();
            textBox2.Text = c.G.ToString();
            textBox3.Text = c.B.ToString();
        }
        private void clasificar(string color)
        {
            string sql = "Select * from colores where nombre='"+color+"'";
            List<string[]> lista = conexion_bd(sql);
            textBox1.Text = lista[0][1];

            //Bitmap bmp1 = new Bitmap(paleta.Image);
            //Color c1 = new Color();
            //c1 = bmp1.GetPixel(e.X, e.Y);
            Bitmap bmp = new Bitmap(pictureBox1.Image);
            Bitmap bmp2 = new Bitmap(pictureBox2.Image);
            int cRto, cGto, cBto;
            Color c = new Color();
            if (inc > 9)
            {
                inc = 0;
            }
            inc++;
            for (int m = 0; m < lista.Count(); m ++)
            {
                cR = int.Parse(lista[m][1]); cG = int.Parse(lista[m][2]); cB = int.Parse(lista[m][3]);
                cRt = cR; cGt = cG; cBt = cB;
                                              
                for (int i = 0; i < bmp.Width - 20; i = i + 10)
                    for (int j = 0; j < bmp.Height - 20; j = j + 10)
                    {

                        cRto = 0; cGto = 0; cBto = 0;
                        for (int k = i; k < i + 10; k++)
                            for (int l = j; l < j + 10; l++)
                            {
                                c = bmp.GetPixel(k, l);
                                cRto = c.R + cRto; cGto = c.G + cGto; cBto = c.B + cBto;
                            }
                        cRto = cRto / 100;
                        cGto = cGto / 100;
                        cBto = cBto / 100;
                        c = bmp.GetPixel(i, j);
                        if (((cRt - 15 <= cRto) && (cRto <= cRt + 15)) && ((cGto - 15 <= cGt) && (cGt <= cGto + 15)) && ((cBto - 15 <= cBt) && (cBt <= cBto + 15)))
                            for (int k = i; k < i + 10; k++)
                                for (int l = j; l < j + 10; l++)
                                {
                                    bmp2.SetPixel(k, l, pintar[inc]);
                                }
                        else
                            for (int k = i; k < i + 10; k++)
                                for (int l = j; l < j + 10; l++)
                                {
                                    c = bmp2.GetPixel(k, l);
                                    bmp2.SetPixel(k, l, c);
                                }

                    }
            }


            
            pictureBox2.Image = bmp2;
        }
        private int inc = -1;

        private void button10_Click(object sender, EventArgs e)
        {
            clasificar("marron");
        }

        private void btn_limpiar_Click(object sender, EventArgs e)
        {
            Bitmap bmp = new Bitmap(pictureBox1.Image);
            Bitmap bmp2 = new Bitmap(bmp.Width, bmp.Height);
            Color c = new Color();
            for (int i = 0; i < bmp.Width; i++)
                for (int j = 0; j < bmp.Height; j++)
                {
                    c = bmp.GetPixel(i, j);
                    bmp2.SetPixel(i, j, c);
                }
            pictureBox2.Image = bmp2;
        }

        public Form1()
        {
            InitializeComponent();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            clasificar("rojo");
        }

        private void button4_Click(object sender, EventArgs e)
        {
            clasificar("negro");
        }

        private void button6_Click(object sender, EventArgs e)
        {
            clasificar("naranja");
        }

        private void button5_Click(object sender, EventArgs e)
        {
            clasificar("amarillo");
        }

        private void button7_Click(object sender, EventArgs e)
        {
            clasificar("verde");
        }

        private void button9_Click(object sender, EventArgs e)
        {
            clasificar("azul");
        }

        private void button8_Click(object sender, EventArgs e)
        {
            clasificar("celeste");
        }

        private void button12_Click(object sender, EventArgs e)
        {
            clasificar("rosado");
        }

        private void button11_Click(object sender, EventArgs e)
        {
            clasificar("lila");
        }

        private void button14_Click(object sender, EventArgs e)
        {
            clasificar("plomo");
        }

        private void button13_Click(object sender, EventArgs e)
        {
            clasificar("cian");
        }

        private void button1_Click(object sender, EventArgs e)
        {
            openFileDialog1.ShowDialog();
            Bitmap bmp = new Bitmap(openFileDialog1.FileName);
            pictureBox1.Image = bmp;
            pictureBox2.Image = bmp;

        }
        private void agregar_db(string query)
        {
            
            MySqlCommand commandDatabase = new MySqlCommand(query, conexion);
            commandDatabase.CommandTimeout = 60;

            try
            {
                conexion.Open();
                MySqlDataReader myReader = commandDatabase.ExecuteReader();

                MessageBox.Show("Color insertado satisfactoriamente");

                conexion.Close();
            }
            catch (Exception ex)
            {
                // Mostrar cualquier error
                MessageBox.Show(ex.Message);
            }
        }
        public List<string[]> conexion_bd(string query)
        {
            MySqlCommand commandDatabase = new MySqlCommand(query, conexion);
            commandDatabase.CommandTimeout = 60;
            List<string[]> lista = new List<string[]>();
            try
            {
                // Abre la base de datos
                conexion.Open();

                // Ejecuta la consultas
                reader = commandDatabase.ExecuteReader();

                // Hasta el momento todo bien, es decir datos obtenidos

                // IMPORTANTE :#
                // Si tu consulta retorna un resultado, usa el siguiente proceso para obtener datos

                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        // En nuestra base de datos, el array contiene:  ID 0, FIRST_NAME 1,LAST_NAME 2, ADDRESS 3
                        // Hacer algo con cada fila obtenida
                        string[] row = { reader.GetString(0), reader.GetString(1), reader.GetString(2), reader.GetString(3) };
                        lista.Add(row);
                    }
                }
                else
                {
                    Console.WriteLine("No se encontraron datos.");
                }

                // Cerrar la conexión
                conexion.Close();
            }
            catch (Exception ex)
            {
                // Mostrar cualquier excepción
                MessageBox.Show(ex.Message);
            }
            return lista;
        }
        private void pictureBox1_MouseClick(object sender, MouseEventArgs e)
        {
            Bitmap bmp = new Bitmap(pictureBox1.Image);
            Color c = new Color();
            c = bmp.GetPixel(e.X, e.Y);
            cR = c.R; cG = c.G; cB = c.B;

            cRt = 0; cGt = 0; cBt = 0;
            for (int i = e.X; i < e.X + 10; i++)
                for (int j = e.Y; j < e.Y + 10; j++)
                {
                    c = bmp.GetPixel(i, j);
                    cRt = c.R + cRt; cGt = c.G + cGt; cBt = c.B + cBt;
                }
            cRt = cRt / 100;
            cGt = cGt / 100;
            cBt = cBt / 100;
            textBox1.Text = c.R.ToString() + " " + cRt.ToString();
            textBox2.Text = c.G.ToString() + " " + cGt.ToString();
            textBox3.Text = c.B.ToString() + " " + cBt.ToString();
            
            //string sql = "INSERT into colores VALUES ('cian',"+ cRt+","+ cGt+"," + cBt  +");";
            //agregar_db(sql);
        }


    }
}
