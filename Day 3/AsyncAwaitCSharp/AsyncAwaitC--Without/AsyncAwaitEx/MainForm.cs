﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace AsyncAwaitEx
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private async void btnGo_Click(object sender, EventArgs e)
        {
            await Download();
            this.Text = "Download finished.";
        }

        private async Task Download()
        {
            int sum = 0;
            string[] urls = { "http://www.walla.co.il", "http://ynet.co.il", "http://nrg.co.il" };
            foreach (var url in urls)
            {
                try
                {
                    int currentBytesCount = await GetBytesFromWeb(url);
                    //int currentBytesCount = await GetBytesFromWeb(url).Result;
                    listBox1.Items.Add($"Download finished {url} - {currentBytesCount}");
                    sum += currentBytesCount;
                }
                catch (Exception ex)
                {
                    listBox1.Items.Add($"Download Failed for :{url} - {ex.Message}");
                }
            }
            lblTotal.Text = sum.ToString();
        }

        Task<int> GetBytesFromWeb(string url)
        {
            return Task.Factory.StartNew(() =>
            {
                Thread.Sleep(3000);
                if (url.Contains("ynet"))
                {
                    throw new Exception("Failed...");
                }
                return (new Random().Next(1000, 5000));
            });

        }
    }
}
