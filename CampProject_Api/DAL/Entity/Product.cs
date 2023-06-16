using System;
using System.ComponentModel.DataAnnotations;

namespace CV_Project_Api.DAL.Entity
{
	public class Product
	{
		[Key]
		public int ProductID { get; set; }
        public string productName { get; set; }
        public int unitPrice { get; set; }
        public int unitsInStock { get; set; }
        public string quantityPerUnit { get; set; }
        public string CategoryName { get; set; }
    }
}

