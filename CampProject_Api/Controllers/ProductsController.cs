using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CV_Project_Api.DAL.Entity;
using Microsoft.AspNetCore.Mvc;
using CV_Project_Api.DAL.ApiContext;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CV_Project_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllProducts()
        {
            using var c = new Context();
            return Ok(c.Products.ToList());
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            using var c = new Context();
            var value = c.Products.Find(id);
            if (value == null)
                return NotFound();
            return Ok(value);
        }
        [HttpPost]
        public IActionResult ProductAdd(Product p)
        {
            using var c = new Context();
            c.Add(p);
            c.SaveChanges();
            return Created("", p);
        }
        [HttpDelete]
        public IActionResult ProductDelete(int id)
        {
            using var c = new Context();
            var value = c.Products.Find(id);
            if (value == null)
                return NotFound();
            c.Remove(value);
            c.SaveChanges();
            return NoContent();
        }
        [HttpPut]
        public IActionResult ProductUpdate(Product p)
        {
            using var c = new Context();
            var value = c.Find<Product>(p.ProductID);
            if (value == null)
                return NotFound();
            value.productName = p.productName;
            value.unitPrice = p.unitPrice;
            value.unitsInStock = p.unitsInStock;
            value.quantityPerUnit = p.quantityPerUnit;
            value.CategoryName = p.CategoryName;
            c.Update(value);
            c.SaveChanges();
            return NoContent();
        }
    }
}

