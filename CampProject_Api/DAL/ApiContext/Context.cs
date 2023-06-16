using System;
using CV_Project_Api.DAL.Entity;
using Microsoft.EntityFrameworkCore;

namespace CV_Project_Api.DAL.ApiContext
{
	public class Context : DbContext
	{
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=localhost;database=CVProjectDBApi;User=SA; Password=reallyStrongPwd123");
        }

        public DbSet<Product> Products { get; set; }
    }
}

